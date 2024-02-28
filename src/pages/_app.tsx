import '@/styles/globals.css';
import 'dayjs/locale/ko';

import { CSSReset, ThemeProvider, extendTheme } from '@chakra-ui/react';
import { ErrorFallback, SuspenseFallback } from '@/components/templates';
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from '@tanstack/react-query';

import type { AppProps } from 'next/app';
import { ErrorBoundary } from 'react-error-boundary';
import Layout from '@/components/templates/Layout';
import React from 'react';
import { RecoilRoot } from 'recoil';
import dayjs from 'dayjs';

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
