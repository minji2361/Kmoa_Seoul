const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];

// "2026-11-14" → "11월 14일 (토)". 타임존에 영향받지 않도록 UTC 로만 계산한다.
export function formatProgramDate(isoDate: string): string {
  const [y, m, d] = isoDate.split("-").map(Number);
  const weekday = WEEKDAYS[new Date(Date.UTC(y, m - 1, d)).getUTCDay()];
  return `${m}월 ${d}일 (${weekday})`;
}
