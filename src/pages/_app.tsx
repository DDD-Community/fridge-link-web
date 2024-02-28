import { ThemeProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import Layout from '@/components/templates/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from '@tanstack/react-query';
import React from 'react';
import 'dayjs/locale/ko';
import dayjs from 'dayjs';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback, SuspenseFallback } from '@/components/templates';
dayjs.locale('ko');

const theme = extendTheme({
  colors: {
    primary2: { 500: '#3CAA8D' },
  },
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      gcTime: 0,
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
            <React.Suspense fallback={<SuspenseFallback />}>
              <RecoilRoot>
                <ThemeProvider theme={theme}>
                  <CSSReset />
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </ThemeProvider>
              </RecoilRoot>
            </React.Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </QueryClientProvider>
  );
}
