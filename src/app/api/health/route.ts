import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// 임시 점검용: Supabase 환경변수 설정과 키 유효성만 확인한다. (URL·키 값은 응답에 포함하지 않는다)
// 정식 배포(Production)에서는 404 를 돌려주며, 연동 확인이 끝나면 이 파일을 삭제한다.
async function probe(url: string, key: string): Promise<number | null> {
  try {
    const res = await fetch(`${url}/auth/v1/health`, {
      headers: { apikey: key },
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });
    return res.status;
  } catch {
    return null;
  }
}

export async function GET() {
  if (process.env.VERCEL_ENV === "production") {
    return new NextResponse(null, { status: 404 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const secretKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  const env = {
    url: Boolean(url),
    publishableKey: Boolean(publishableKey),
    secretKey: Boolean(secretKey),
  };
  const status = {
    publishableKey: url && publishableKey ? await probe(url, publishableKey) : null,
    secretKey: url && secretKey ? await probe(url, secretKey) : null,
  };
  const ok =
    env.url &&
    env.publishableKey &&
    env.secretKey &&
    status.publishableKey === 200 &&
    status.secretKey === 200;

  return NextResponse.json(
    { ok, env, supabaseHttpStatus: status },
    { status: ok ? 200 : 503, headers: { "Cache-Control": "no-store" } },
  );
}
