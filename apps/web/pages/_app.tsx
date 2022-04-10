import { FC, useState, useEffect } from 'react';

import SEO from '@config/next-seo';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { GlobalStyle } from 'ui/styles';

import '@config/fontsource';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const [mounted, setMounted] = useState(false);
  const { asPath } = useRouter();

  const page = asPath === '/' ? '' : asPath;
  const [canonicalUrl] = `https://sync-forward.com${page}`.split('?');

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <DefaultSeo
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          type: 'website',
          site_name: 'Polkastarter',
        }}
        dangerouslySetAllPagesToNoIndex
        {...SEO}
      />
      <GlobalStyle />
      {mounted && <Component {...pageProps} />}
    </>
  );
};

export default MyApp;
