# K-MOA 배포 환경 설정

K-MOA 전용 Supabase·Vercel 프로젝트 구성과 브랜치 운영 방식을 기록한다. **비밀 값(키, 비밀번호)은 이 문서에 적지 않는다.**

## 구성

| 서비스   | 프로젝트                                 | 비고                                   |
| -------- | ---------------------------------------- | -------------------------------------- |
| Supabase | `k-moa` (Region: Northeast Asia / Seoul) | 무료 플랜. Genie_Seoul과 별개 프로젝트 |
| Vercel   | `k-moa` (Framework: Next.js, Root: `./`) | GitHub `minji2361/Kmoa_Seoul` 연결     |

## 환경변수

| 이름                            | 공개 범위     | 값의 출처                                               |
| ------------------------------- | ------------- | ------------------------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`      | 브라우저 공개 | Supabase → Project Settings → Data API                  |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | 브라우저 공개 | Supabase → Project Settings → API Keys, Publishable key |
| `SUPABASE_SERVICE_ROLE_KEY`     | **서버 전용** | 같은 화면의 Secret key (`NEXT_PUBLIC_` 금지)            |
| `NEXT_PUBLIC_APPLY_FORM_URL`    | 브라우저 공개 | 외부 신청 폼 주소 (정해지면 추가)                       |
| `NEXT_PUBLIC_PARTNER_FORM_URL`  | 브라우저 공개 | 외부 입점 신청 폼 주소 (정해지면 추가)                  |

- 로컬: `.env.example`을 `.env.local`로 복사해 값을 입력한다 (Git에 올라가지 않으며 `.cursorignore`로 AI 읽기도 차단).
- Vercel: Project → Settings → Environment Variables 에 같은 이름으로 등록하고, 값을 바꾼 뒤에는 재배포해야 적용된다.

## 브랜치 운영

| 브랜치      | Vercel 배포                         | 용도                          |
| ----------- | ----------------------------------- | ----------------------------- |
| `dev-minji` | **Preview** (브랜치 전용 임시 주소) | 개발·테스트                   |
| `main`      | **Production** (정식 주소)          | 정식 배포 (Production Branch) |

- 모든 코드 수정은 `dev-minji`에서 하고, Preview 주소에서 확인한 뒤 `main`으로 병합한다.
- Push, Merge, DB 변경, 실제 배포는 사용자 승인 후에만 진행한다.
- Preview 주소는 Vercel Authentication(배포 보호)으로 로그인한 본인만 볼 수 있게 둔다.

## 확인 목록

- [x] Vercel Deployments에서 `dev-minji` Preview 배포가 Ready
- [x] Preview 주소에서 6개 페이지(Home, About, Programs, Category, Reviews, Contact) 정상 표시
- [x] Settings → Git 의 Production Branch 가 `main`
- [x] 환경변수 3종이 Production·Preview에 적용됨
- [x] Preview 에서 Supabase 연결 확인: URL·Publishable key·Secret key 모두 정상 응답(임시 점검 주소로 확인 후 삭제함)
- [ ] Production(`main`) 배포를 환경변수 수정 후 Redeploy (처음 연결 시 만들어진 배포는 수정 전 값으로 빌드됨)

## 환경변수 주의 (실제로 겪은 문제)

- `NEXT_PUBLIC_SUPABASE_URL` 은 **`https://<Reference ID>.supabase.co` 까지만** 쓴다. 끝에 `/` 나 `/rest/v1` 같은 경로를 붙이면 요청이 404 가 된다. (Data API 화면의 REST 주소를 그대로 복사하지 않는다.)
- Vercel 환경변수는 **새로 만드는 배포부터** 적용된다. 값을 추가·수정한 뒤에는 Deployments 에서 Redeploy 하고, `NEXT_PUBLIC_` 값은 빌드 때 코드에 들어가므로 **"Use existing Build Cache" 를 해제**한다.
- 각 변수의 Environments 에 Production 과 Preview 가 모두 포함돼야 `dev-minji` Preview 에서도 값이 전달된다.
- 로컬 `.env.local` 도 같은 형태(도메인까지만)로 맞춘다.

## 주의

- Vercel 무료(Hobby) 플랜은 상업적 이용이 제한되므로, 정식 운영 전에 플랜을 확인한다.
- Supabase 무료 플랜은 일정 기간 사용이 없으면 프로젝트가 일시 중지될 수 있다.
- 자체 신청 폼 전환용 SQL(`supabase/migrations/…create_application_forms.sql`)은 아직 DB에 적용하지 않았다.
