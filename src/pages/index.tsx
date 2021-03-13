import React from 'react';
import cx from 'classnames';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import LikeIcon from '@icons/Like.svg';

import s from '@styles/Home.module.sass';

const Home: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation(['common', 'home']);

  return (
    <div className={s.container}>
      <Head>
        <title>{t('home:Create Next App')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={s.main}>
        <h1 className={s.title}>
          <LikeIcon className={s.icon} />
          {t('home:Welcome to')}
          {' '}
          <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={s.description}>
          {t('home:Get started by editing')}
          {' '}
          <code className={s.code}>pages/index.tsx</code>
        </p>

        <div className={s.grid}>
          <a href="https://nextjs.org/docs" className={cx(s.card, s.additionalCard)}>
            <h3>
              {t('home:Documentation')}
              {' '}
              &rarr;
            </h3>
            <p>{t('home:Find in-depth information about Next.js features and API.')}</p>
          </a>

          <a href="https://nextjs.org/learn" className={s.card}>
            <h3>
              {t('home:Learn')}
              {' '}
              &rarr;
            </h3>
            <p>{t('home:Learn about Next.js in an interactive course with quizzes!')}</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={s.card}
          >
            <h3>
              {t('home:Examples')}
              {' '}
              &rarr;
            </h3>
            <p>{t('home:Discover and deploy boilerplate example Next.js projects.')}</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={s.card}
          >
            <h3>
              {t('home:Deploy')}
              {' '}
              &rarr;
            </h3>
            <p>
              {t('home:Instantly deploy your Next.js site to a public URL with Vercel.')}
            </p>
          </a>
        </div>
        <span>
          {t('common:Change language')}
          :
          {' '}
          {router.locales?.map((locale) => (
            <React.Fragment key={locale}>
              <Link href="/" locale={locale}>{locale.toUpperCase()}</Link>
              {' '}
            </React.Fragment>
          ))}
        </span>
      </main>

      <footer className={s.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('common:Powered by')}
          {' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={s.logo} />
        </a>
      </footer>
    </div>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'home']),
  },
});

export default Home;
