# K-MOA

K-MOA 신규 웹사이트 프로젝트. Genie_Seoul(참고용)과 무관한 **독립 프로젝트**다.

## 프로젝트 정보

- 작업 브랜치: `dev-minji` (다른 브랜치에서 수정 금지)
- 참고 저장소: https://github.com/minji2361/Genie_Seoul.git (읽기 전용 참고, 절대 수정 금지)
- 주 언어: TypeScript
- 기술 스택 (Genie_Seoul 분석 후 확정):
  - Next.js 15 (App Router) + React 19, TypeScript 5 (`strict`, 경로 별칭 `@/*` → `src/*`)
  - Tailwind CSS 3.4 (제공될 HTML을 Tailwind로 옮기기 쉬움)
  - Supabase: `@supabase/supabase-js` + `@supabase/ssr` (deprecated된 `auth-helpers-nextjs`는 사용 금지)
  - 품질 도구: ESLint 9(flat config) + Prettier, `tsc --noEmit`
  - 런타임: Node 22 (`.nvmrc`), 패키지 매니저 npm
- 호스팅: Vercel (K-MOA 전용 프로젝트)
- DB: Supabase (K-MOA 전용 프로젝트)
- 개발 도구: Cursor(주), IntelliJ IDEA(보조), Cursor AI / Claude Code(AI 지원)
- UI: 추후 제공될 HTML 기준으로 구현
- 기능: 추후 제공될 기획서 기준으로 개발

## 현재 단계

UI(HTML)와 기획서가 제공되어 개발 진행 중. 기준 자료는 `docs/reference/K-MOA-ui.html`(UI)과 `docs/reference/K-MOA-plan.docx`(기획서)다.

- 완료: 공통 레이아웃(헤더·푸터)과 Home, About, Programs, Category, Reviews, Contact/FAQ 전체 페이지.
- 신청/입점 신청은 **외부 폼 링크**로 연결한다 (`NEXT_PUBLIC_APPLY_FORM_URL`, `NEXT_PUBLIC_PARTNER_FORM_URL`, `src/components/ui/FormLink.tsx`). 주소가 비어 있으면 신청 버튼은 `/contact`로 이동하고 Contact 페이지에 "준비 중" 안내가 표시된다. 주소는 `.env.local`(로컬)과 Vercel 환경변수에 넣고 재배포하면 적용된다. 자체 폼 전환에 대비한 스키마는 `supabase/migrations/20261028000001_create_application_forms.sql`에 준비돼 있으며 **아직 DB에 적용하지 않았다.**
- 프로그램·후기 데이터는 `src/data/`의 예시 데이터를 쓴다. 운영 데이터 확정 후 Supabase로 이전한다.

## 필수 규칙

1. 모든 코드 수정은 `dev-minji` 브랜치에서만 진행한다.
2. Genie_Seoul은 참고용이다. 기존 프로젝트를 절대 수정하지 않는다.
3. K-MOA는 독립적인 신규 프로젝트로 구성한다.
4. Supabase와 Vercel은 K-MOA 전용 환경을 사용한다.
5. 기존 프로젝트의 API Key, 환경변수, DB 데이터를 복사하지 않는다.
6. 관련 없는 파일은 수정하거나 삭제하지 않는다.
7. UI는 제공된 HTML을 기준으로 구현한다.
8. 기능은 제공된 기획서를 기준으로 개발한다.
9. **사용자 승인 후에만** 진행: `git push`, merge, DB 변경(스키마/데이터), 실제 배포.
10. 작업 완료 후 변경 파일과 테스트 결과를 보고한다.
11. 기존 변경사항을 임의로 덮어쓰거나 삭제하지 않는다.
12. 위험한 Git 명령(`reset --hard`, `push --force`, `clean -f`, `checkout .`, `branch -D`, 히스토리 재작성 등)은 사용자 승인 없이 실행하지 않는다.

## 명령어

```bash
npm install
npm run dev          # 개발 서버 (http://localhost:3000)
npm run build        # 프로덕션 빌드
npm run lint         # ESLint
npm run typecheck    # tsc --noEmit
npm run format       # Prettier 적용
npm run format:check # Prettier 검사
```

## 반응형 웹 개발 규칙 (필수)

K-MOA는 모바일·태블릿·PC(노트북/데스크탑) 모두에서 사용하는 반응형 웹사이트다. 신규 페이지·컴포넌트는 별도 요청이 없어도 반응형을 기본 적용한다.

- **Mobile First**: 기본 스타일은 모바일 기준으로 작성하고, Tailwind의 `md:`(768px~), `lg:`(1024px~)로 확장한다.
- **기준 화면**: 모바일 767px 이하 / 태블릿 768~1023px / PC 1024px 이상. Tailwind 기본 breakpoint(`md`=768, `lg`=1024)와 일치하므로 `tailwind.config.ts`에서 바꾸지 않는다. 제공된 UI와 실제 콘텐츠에 따라 조정할 수 있다.
- 화면 크기에 따라 메뉴/내비게이션, 콘텐츠 배치, 버튼, 입력 폼, 테이블 레이아웃이 자연스럽게 바뀌어야 한다.
- 모바일·태블릿은 터치 조작을 고려해 버튼/링크의 터치 영역과 간격을 충분히 확보한다 (최소 약 44×44px).
- PC에서는 넓은 화면을 활용하되 콘텐츠가 과도하게 늘어나지 않도록 최대 너비(`max-w-*`)와 중앙 정렬을 쓴다.
- 작은 화면에서 불필요한 가로 스크롤·콘텐츠 잘림을 만들지 않는다. 복잡한 데이터 테이블 등은 해당 영역에 한해 가로 스크롤(`overflow-x-auto`)을 허용한다.
- 제공되는 HTML UI가 PC 기준이어도 모바일·태블릿 레이아웃을 추가 구현하되, 디자인 의도는 최대한 유지한다.
- 화면 크기에 따라 UI를 바꿔도 주요 기능과 데이터 접근성은 유지한다 (기능을 숨기기만 하지 않는다).
- Chrome, Edge, Safari 및 모바일 브라우저 호환성을 고려한다 (예: iOS Safari의 `100vh` 이슈는 `dvh` 등으로 대응).
- 개발 완료 후 모바일·태블릿·PC 화면 크기별로 레이아웃을 검증하고, 결과를 작업 보고에 포함한다.

## Supabase / SQL 보안 규칙

- 마이그레이션 SQL(`supabase/migrations/`)은 스키마 정의(테이블, 인덱스, RLS 정책, 함수)만 담고 Git에 올려도 된다.
- SQL 파일에 **금지**: 비밀번호, API Key, service_role 키, JWT, 실제 사용자 데이터(이메일·이름·연락처 등), 운영 데이터 덤프, 관리자 계정 생성 INSERT.
- 시드/운영 데이터와 계정 설정 SQL은 Git에 올리지 않고 `supabase/private/`(gitignore) 또는 Supabase Dashboard에서 관리한다.
- 모든 테이블은 RLS를 활성화하고 정책을 명시한다. service_role 키는 서버 코드에서만 사용하고 `NEXT_PUBLIC_` 접두사를 붙이지 않는다.
- DB 변경(마이그레이션 적용, 데이터 수정)은 사용자 승인 후에만 실행한다.

## 개발 환경 규칙 (IDE 중립)

- Cursor와 IntelliJ IDEA 어디서든 같은 프로젝트를 열고 수정할 수 있도록 표준 프로젝트 구조를 유지한다.
- 특정 IDE에 종속된 설정/기능을 사용하지 않는다.
- 코드 스타일은 `.editorconfig`를 기준으로 한다 (UTF-8, LF, 2칸 들여쓰기, 끝 개행). 포맷터/린터 도입 시 설정 파일을 저장소에 커밋해 두 IDE가 동일하게 적용하게 한다.
- 모든 개발/빌드/테스트 명령은 `package.json` scripts로 정의해 터미널에서 실행 가능해야 한다. IDE 전용 Run Configuration에 의존하지 않는다.
- Node 버전 등 실행 환경은 `.nvmrc`와 `package.json`의 `engines`로 고정한다.
- IDE 개인 설정/임시 파일(`.idea/`, `*.iml`, `.vscode/` 등)은 `.gitignore`로 제외한다. 단 `.cursor/rules/`는 공유 규칙이므로 커밋한다.
- 비밀 값은 `.env*.local`에만 두고 커밋하지 않는다. 필요한 키 이름은 `.env.example`에 값 없이 기록한다.

## 작업 방식

- 코드를 쓰기 전에 주변 코드의 스타일·네이밍을 따른다.
- 요청 범위 밖의 리팩터링이나 파일 정리를 하지 않는다.
- 작업 완료 보고에는 변경 파일 목록, 실행한 테스트/빌드 명령과 결과, 미실행 항목을 포함한다.

## Cursor 규칙 파일

- `.cursor/rules/*.mdc`에 동일한 규칙을 요약해 두었다. 규칙을 바꿀 때는 이 파일(CLAUDE.md)을 기준으로 함께 갱신한다.
