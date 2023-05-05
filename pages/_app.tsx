import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../apolloClient';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
