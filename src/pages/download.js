import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import GetPragtical from '@site/src/components/GetPragtical';

import styles from './index.module.css';

function DownloadHeader() {
  return (
    <header className={clsx('hero hero--primary-dark', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Download</h1>
        <p className="hero__subtitle">Binary builds of Pragtical code editor</p>
      </div>
    </header>
  );
}

export default function Download() {
  return (
    <Layout title="Downloads" description="Get Pragtical code editor.">
      <DownloadHeader />
      <main>
        <GetPragtical />
      </main>
    </Layout>
  );
}
