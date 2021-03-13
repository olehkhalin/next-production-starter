import React from 'react';
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import '@styles/globals.sass';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
