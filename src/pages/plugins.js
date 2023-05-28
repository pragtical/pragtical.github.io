import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import PluginsNavigation from '@site/src/components/PluginsNavigation';

import styles from './index.module.css';

function PluginsHeader() {
  return (
    <header className={clsx('hero hero--primary-dark', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Plugins for Pragtical</h1>
      </div>
    </header>
  );
}

export default function Plugins() {
  return (
    <Layout title="Plugins" description="Plugins for Pragtical code editor.">
      <PluginsHeader />
      <main>
        <PluginsNavigation />
      </main>
    </Layout>
  );
}
