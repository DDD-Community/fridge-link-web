import { ThemeProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import Layout from '@/components/templates/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'dayjs/locale/ko';
import dayjs from 'dayjs';
dayjs.locale('ko');

const theme = extendTheme({
  colors: {
    primary2: { 500: '#3CAA8D' },
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <CSSReset />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
