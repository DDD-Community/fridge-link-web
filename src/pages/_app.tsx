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
import 'dayjs/locale/ko';
import dayjs from 'dayjs';
import { Suspense } from 'react';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
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
  onError: (error: Error) => {
    console.error(error);
  },
});

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <div>
      Error: {error.message}
      <button onClick={resetErrorBoundary}>Retry</button>
    </div>
  );
}

function LoadingFallback() {
  return <div>Loading...</div>;
}

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
            <Suspense fallback={<LoadingFallback />}>
              <RecoilRoot>
                <ThemeProvider theme={theme}>
                  <CSSReset />
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </ThemeProvider>
              </RecoilRoot>
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </QueryClientProvider>
  );
}
