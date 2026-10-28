import { createBrowserClient } from "@supabase/ssr";
import { requireEnv } from "@/lib/env";

// 브라우저(클라이언트 컴포넌트)용. anon key 만 사용하며 RLS 가 적용된다.
export function createClient() {
  return createBrowserClient(
    requireEnv("NEXT_PUBLIC_SUPABASE_URL", process.env.NEXT_PUBLIC_SUPABASE_URL),
    requireEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
  );
}
