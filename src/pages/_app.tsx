import type { AppProps } from "next/app";
import "@/styles/globals.css"; // Make sure this is imported

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
