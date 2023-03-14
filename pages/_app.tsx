import type { AppProps } from 'next/app'
import Layout from "@/components/layout/Layout";
import '@/styles/global.css'
// 루트 컴포넌트
// 레이아웃 컴포넌트로 컴포넌트를 감싸면 header를 추가하기 용이함
export default function App({ Component, pageProps }: AppProps) {
  return <Layout><Component {...pageProps} /></Layout>
}