import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const ReleaseList = [
  {
    title: 'Linux',
    Svg: require('@mdi/svg/svg/linux.svg').default,
    description: (
      <nav>
        <li className={styles.li}>
          <a href='https://github.com/pragtical/pragtical/releases/download/v3.1.1/Pragtical-v3.1.1-x86_64.AppImage'>
            AppImage
          </a>
          &nbsp;
          <code>64 bit</code>
        </li>
        <li className={styles.li}>
          <a href='https://github.com/pragtical/pragtical/releases/download/v3.1.1/pragtical-v3.1.1-linux-x86_64-portable.tar.gz'>
            Portable ZIP
          </a>
          &nbsp;
          <code>64 bit</code>
        </li>
      </nav>
    ),
  },
  {
    title: 'Windows',
    Svg: require('@mdi/svg/svg/microsoft-windows.svg').default,
    description: (
      <nav>
        <li className={styles.li}>
          <a href='https://github.com/pragtical/pragtical/releases/download/v3.1.1/Pragtical-v3.1.1-x86_64-setup.exe'>
            Installer
          </a>
          &nbsp;
          <code>64 bit</code>
        </li>
        <li className={styles.li}>
          <a href='https://github.com/pragtical/pragtical/releases/download/v3.1.1/pragtical-v3.1.1-windows-x86_64.zip'>
            Portable ZIP
          </a>
          &nbsp;
          <code>64 bit</code>
        </li>
        <li className={styles.li}>
          <a href='https://github.com/pragtical/pragtical/releases/download/v3.1.1/Pragtical-v3.1.1-i686-setup.exe'>
            Installer
          </a>
          &nbsp;
          <code>32 bit</code>
        </li>
        <li className={styles.li}>
          <a href='https://github.com/pragtical/pragtical/releases/download/v3.1.1/pragtical-v3.1.1-windows-i686.zip'>
            Portable ZIP
          </a>
          &nbsp;
          <code>32 bit</code>
        </li>
      </nav>
    ),
  },
  {
    title: 'macOS',
    Svg: require('@mdi/svg/svg/apple.svg').default,
    description: (
      <nav>
        <li className={styles.li}>
          <a href='https://github.com/pragtical/pragtical/releases/download/v3.1.1/pragtical-v3.1.1-macos-universal.dmg'>
            DMG
          </a>
          &nbsp;
          <code>Universal</code>
        </li>
        <li className={styles.li}>
          <a href='https://github.com/pragtical/pragtical/releases/download/v3.1.1/pragtical-v3.1.1-macos-x86_64.dmg'>
            DMG
          </a>
          &nbsp;
          <code>Intel</code>
        </li>
        <li className={styles.li}>
          <a href='https://github.com/pragtical/pragtical/releases/download/v3.1.1/pragtical-v3.1.1-macos-arm64.dmg'>
            DMG
          </a>
          &nbsp;
          <code>Arm</code>
        </li>
      </nav>
    ),
  },
];

const RollingList = [
  {
    title: 'Linux',
    Svg: require('@mdi/svg/svg/linux.svg').default,
    description: (
      <nav>
        <li className={styles.li}>
          <a href='https://github.com/pragtical/pragtical/releases/download/rolling/Pragtical-rolling-x86_64.AppImage'>
            AppImage
          </a>
          &nbsp;
          <code>64 bit</code>
        </li>
        <li className={styles.li}>
          <a href='https://github.com/pragtical/pragtical/releases/download/rolling/pragtical-rolling-linux-x86_64-portable.tar.gz'>
            Portable ZIP
          </a>
          &nbsp;
          <code>64 bit</code>
        </li>
      </nav>
    ),
  },
  {
    title: 'Windows',
    Svg: require('@mdi/svg/svg/microsoft-windows.svg').default,
    description: (
      <nav>
        <li className={styles.li}>
          <a href='https://github.com/pragtical/pragtical/releases/download/rolling/Pragtical-rolling-x86_64-setup.exe'>
            Installer
          </a>
          &nbsp;
          <code>64 bit</code>
        </li>
        <li className={styles.li}>
          <a href='https://github.com/pragtical/pragtical/releases/download/rolling/pragtical-rolling-windows-x86_64.zip'>
            Portable ZIP
          </a>
          &nbsp;
          <code>64 bit</code>
        </li>
        <li className={styles.li}>
          <a href='https://github.com/pragtical/pragtical/releases/download/rolling/Pragtical-rolling-i686-setup.exe'>
            Installer
          </a>
          &nbsp;
          <code>32 bit</code>
        </li>
        <li className={styles.li}>
          <a href='https://github.com/pragtical/pragtical/releases/download/rolling/pragtical-rolling-windows-i686.zip'>
            Portable ZIP
          </a>
          &nbsp;
          <code>32 bit</code>
        </li>
      </nav>
    ),
  },
  {
    title: 'macOS',
    Svg: require('@mdi/svg/svg/apple.svg').default,
    description: (
      <nav>
        <li className={styles.li}>
          <a href='https://github.com/pragtical/pragtical/releases/download/rolling/pragtical-rolling-macos-universal.dmg'>
            DMG
          </a>
          &nbsp;
          <code>Universal</code>
        </li>
        <li className={styles.li}>
          <a href='https://github.com/pragtical/pragtical/releases/download/rolling/pragtical-rolling-macos-x86_64.dmg'>
            DMG
          </a>
          &nbsp;
          <code>Intel</code>
        </li>
        <li className={styles.li}>
          <a href='https://github.com/pragtical/pragtical/releases/download/rolling/pragtical-rolling-macos-arm64.dmg'>
            DMG
          </a>
          &nbsp;
          <code>Arm</code>
        </li>
      </nav>
    ),
  },
];

function Download({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.osSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function GetPragtical() {
  return (
    <main>
      <section className={styles.downloads}>
        <div className="container">
          <h1 style={{textAlign:"center"}}>v3.1.1 Builds</h1>
          <p style={{textAlign:"center"}}>
            The newest stable version
          </p>
          <div className="row">
            {ReleaseList.map((props, idx) => (
              <Download key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <section className={clsx('hero hero--primary-dark', styles.heroBanner)}>
        <div className="container">
          <h1 style={{textAlign:"center"}}>Rolling Builds</h1>
          <p style={{textAlign:"center"}}>
            Most recent changes with debugging symbols enabled
          </p>
          <div className="row">
            {RollingList.map((props, idx) => (
              <Download key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
