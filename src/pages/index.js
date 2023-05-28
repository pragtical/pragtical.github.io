import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ImageGallery from 'react-image-gallery';

import styles from './index.module.css';
import "react-image-gallery/styles/css/image-gallery.css"


const images = [
  {
    original: '/img/gallery/1.png',
    thumbnail: '/img/gallery/1-small.png',
  },
  {
    original: '/img/gallery/2.png',
    thumbnail: '/img/gallery/2-small.png',
  },
  {
    original: '/img/gallery/3.png',
    thumbnail: '/img/gallery/3-small.png',
  },
];

function getOS() {
   const os = ['Windows', 'Linux', 'Mac']; // add your OS values
   return os.find(v=>navigator.userAgent.indexOf(v) >= 0);
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary-dark', styles.heroBanner)}>
      <div className="container">
        <img src="/img/logo-simple.svg" role="img" />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function HomeGallery() {
  return (
    <section className={clsx('hero hero--primary-dark', styles.heroBanner)}>
      <div className="container">
        <h1>Gallery</h1>
        <ImageGallery items={images} />
      </div>
    </section>
  );
}

// <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.tagline}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomeGallery />
      </main>
    </Layout>
  );
}
