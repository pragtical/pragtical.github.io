import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const DownloadList = [
  {
    title: 'Linux',
    Svg: require('@mdi/svg/svg/linux.svg').default,
    description: (
      <nav>
        <li className={styles.li}>
          <a href='https://github.com/pragtical/pragtical/releases/download/latest/Pragtical-latest-x86_64.AppImage'>
            AppImage
          </a>
          &nbsp;
          <code>64 bit</code>
        </li>
        <li className={styles.li}>
          <a href='https://github.com/pragtical/pragtical/releases/download/latest/pragtical-latest-linux-x86_64-portable.tar.gz'>
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
          <a href='https://github.com/pragtical/pragtical/releases/download/latest/Pragtical-latest-x86_64-setup.exe'>
            Installer
          </a>
          &nbsp;
          <code>64 bit</code>
        </li>
        <li className={styles.li}>
          <a href='https://github.com/pragtical/pragtical/releases/download/latest/pragtical-latest-windows-x86_64.zip'>
            Portable ZIP
          </a>
          &nbsp;
          <code>64 bit</code>
        </li>
        <li className={styles.li}>
          <a href='https://github.com/pragtical/pragtical/releases/download/latest/Pragtical-latest-i686-setup.exe'>
            Installer
          </a>
          &nbsp;
          <code>32 bit</code>
        </li>
        <li className={styles.li}>
          <a href='https://github.com/pragtical/pragtical/releases/download/latest/pragtical-latest-windows-i686.zip'>
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
          <a href='https://github.com/pragtical/pragtical/releases/download/latest/pragtical-latest-macos-universal.dmg'>
            DMG
          </a>
          &nbsp;
          <code>Universal</code>
        </li>
        <li className={styles.li}>
          <a href='https://github.com/pragtical/pragtical/releases/download/latest/pragtical-latest-macos-x86_64.dmg'>
            DMG
          </a>
          &nbsp;
          <code>Intel</code>
        </li>
        <li className={styles.li}>
          <a href='https://github.com/pragtical/pragtical/releases/download/latest/pragtical-latest-macos-arm64.dmg'>
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

export default function HomepageFeatures() {
  return (
    <section className={styles.downloads}>
      <div className="container">
        <div className="row">
          {DownloadList.map((props, idx) => (
            <Download key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
