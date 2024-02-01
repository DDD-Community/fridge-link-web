import { ThemeProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import Layout from '@/components/templates/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import 'dayjs/locale/ko';
import dayjs from 'dayjs';
dayjs.locale('ko');

const theme = extendTheme({
  colors: {
    primary2: { 500: '#3CAA8D' },
  },
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  );
}
