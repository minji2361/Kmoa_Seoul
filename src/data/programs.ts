import type { Program, ProgramCategory, ProgramType } from "@/types/program";

export const PROGRAM_CATEGORIES: ProgramCategory[] = [
  "K-Media",
  "K-Food",
  "Language Exchange",
  "Traditional & Daily",
];

export const PROGRAM_TYPES: ProgramType[] = ["모아 데이", "모아 클럽", "모아 크루"];

// 제공된 UI(HTML)의 예시 데이터. 운영 일정 확정 후 Supabase 로 이전한다.
export const PROGRAMS: Program[] = [
  {
    id: "baking",
    title: "베이킹 모아 데이",
    visual: "BAKING",
    tone: "dark",
    date: "2026-11-14",
    time: "오후 2:00",
    place: "서울 · 성수",
    langs: ["한국어", "English"],
    category: "K-Food",
    type: "모아 데이",
    count: "8 / 12명",
    description:
      "함께 반죽하고, 함께 이야기해요. 달콤한 베이킹을 매개로 한국어와 영어를 자연스럽게 나누는 원데이 클래스입니다.",
    activities: [
      "서로 알아가는 아이스브레이킹",
      "베이킹 체험과 자유로운 언어 교류",
      "완성한 디저트 나누기",
    ],
    duration: "약 2시간",
  },
  {
    id: "drama",
    title: "드라마 명장면 회화 모아 클럽",
    visual: "K-DRAMA",
    tone: "blue",
    date: "2026-11-18",
    time: "오후 7:30",
    place: "서울 · 홍대",
    langs: ["한국어", "English"],
    category: "K-Media",
    type: "모아 클럽",
    count: "5 / 10명",
    description:
      "좋아하는 드라마 장면에서 대화가 시작됩니다. 한국어의 뉘앙스와 일상 표현을 함께 배우는 소규모 정기 모임입니다.",
    activities: ["오늘의 명장면 함께 보기", "한국어·영어 표현 나누기", "팀별 롤플레잉과 자유 대화"],
    duration: "약 2시간 · 정기 모임",
  },
  {
    id: "seoul",
    title: "전통 & 일상 문화 탐방 모아 데이",
    visual: "SEOUL DAILY",
    tone: "teal",
    date: "2026-11-21",
    time: "오후 1:00",
    place: "서울 · 종로",
    langs: ["한국어", "English"],
    category: "Traditional & Daily",
    type: "모아 데이",
    count: "10 / 14명",
    description:
      "익숙한 서울을 새로운 시선으로 걸어봐요. 전통과 오늘의 일상이 만나는 공간에서 서로의 문화를 나눕니다.",
    activities: [
      "호스트와 만남 및 팀 소개",
      "골목과 문화 공간 탐방",
      "함께 쉬며 일상 이야기 나누기",
    ],
    duration: "약 3시간",
  },
  {
    id: "crew",
    title: "모아 크루 기수 모집",
    visual: "5-WEEK CREW",
    tone: "purple",
    date: "2026-11-28",
    time: "토요일 · 5주 과정",
    place: "서울 · 활동별 안내",
    langs: ["한국어", "English"],
    category: "Language Exchange",
    type: "모아 크루",
    count: "마감 임박 · 예시",
    description:
      "5주 동안 같은 친구들과 새로운 문화를 경험합니다. 한 번의 만남을 넘어 지속되는 관계를 만들어가요.",
    activities: ["1주 맛집 · 2주 도예", "3주 경복궁 · 4주 뷰티", "5주 국립중앙박물관"],
    duration: "5주 · 주 1회",
  },
  {
    id: "cooking",
    title: "K-푸드 쿠킹 모아 데이",
    visual: "K-FOOD",
    tone: "gold",
    date: "2026-12-05",
    time: "오후 12:00",
    place: "서울 · 마포",
    langs: ["한국어", "English"],
    category: "K-Food",
    type: "모아 데이",
    count: "3 / 12명",
    description:
      "서로의 식탁을 알아가는 시간. 한국 음식을 함께 만들며 문화와 언어를 나누는 쿠킹 모임입니다.",
    activities: [
      "재료와 음식 문화 알아보기",
      "팀별 한국 음식 만들기",
      "함께 식사하며 이야기 나누기",
    ],
    duration: "약 2시간 30분",
  },
  {
    id: "other",
    title: "글로벌 보드게임 모아 클럽",
    visual: "PLAY & TALK",
    tone: "pink",
    date: "2026-12-06",
    time: "오후 3:00",
    place: "서울 · 신촌",
    langs: ["한국어", "기타 언어"],
    category: "Language Exchange",
    type: "모아 클럽",
    count: "4 / 8명",
    description:
      "게임의 규칙을 배우며 서로의 언어도 알아가요. 공통 관심사로 연결되는 편안한 정기 모임입니다.",
    activities: ["친구들과 자기소개", "팀별 보드게임", "자유 대화와 다음 활동 정하기"],
    duration: "약 2시간 · 정기 모임",
  },
];
