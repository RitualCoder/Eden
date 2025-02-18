import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../lib/createEmotionCache";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/lib/themes/themeMui";
import { CssBaseline } from "@mui/material";
import { Analytics } from "@vercel/analytics/react";

const clientSideEmotionCache = createEmotionCache();
export interface ILocalProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App({ Component, pageProps }: AppProps) {
  const emotionCache = clientSideEmotionCache;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" type="image/svg" href="/favicon.svg" />
        <title>Eden</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Analytics />
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}
