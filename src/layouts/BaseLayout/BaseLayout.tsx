import React from 'react';
import cx from 'classnames';

import { Footer } from '@components/common/Footer';

import s from './BaseLayout.module.sass';

interface BaseLayoutProps {
  className?: string;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({
  className,
  children,
}) => (
  <>
    {/* Paste Header component here */}
    <main className={cx(s.root, className)}>
      {children}
    </main>
    <Footer />
  </>
);