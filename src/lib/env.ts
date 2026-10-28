export function requireEnv(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(`환경변수 ${name} 가 설정되지 않았습니다. .env.example 을 참고하세요.`);
  }
  return value;
}
