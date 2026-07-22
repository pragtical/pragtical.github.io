import React, { useState, useEffect } from "react";
import clsx from 'clsx';
import styles from './styles.module.css';

const LATEST='v3.12.4';

const COMMUNITY_PORTS = [
  {
    system: 'AmigaOS 4 / MorphOS',
    author: 'George "walkero" Sokianos',
    url: 'https://ko-fi.com/post/Pragtical-is-coming-to-AmigaOS-4-and-MorphOS-Y8P523M05B',
  },
];

function GetDownloadsMap(version) {
  return [
    {
      title: 'Linux',
      Svg: require('@mdi/svg/svg/linux.svg').default,
      description: (
        <nav>
          <li className={styles.li}>
            <a href={`https://github.com/pragtical/pragtical/releases/download/${version}/Pragtical-${version}-x86_64.AppImage`}>
              AppImage
            </a>
            &nbsp;
            <code>x86_64</code>
          </li>
          <li className={styles.li}>
            <a href={`https://github.com/pragtical/pragtical/releases/download/${version}/pragtical-${version}-linux-x86_64-portable.tar.gz`}>
              Portable ZIP
            </a>
            &nbsp;
            <code>x86_64</code>
          </li>
          <li className={styles.li}>
            <a href={`https://github.com/pragtical/pragtical/releases/download/${version}/Pragtical-${version}-aarch64.AppImage`}>
              AppImage
            </a>
            &nbsp;
            <code>AArch64</code>
          </li>
          <li className={styles.li}>
            <a href={`https://github.com/pragtical/pragtical/releases/download/${version}/pragtical-${version}-linux-aarch64-portable.tar.gz`}>
              Portable ZIP
            </a>
            &nbsp;
            <code>AArch64</code>
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
            <a href={`https://github.com/pragtical/pragtical/releases/download/${version}/Pragtical-${version}-x86_64-setup.exe`}>
              Installer
            </a>
            &nbsp;
            <code>64 bit</code>
          </li>
          <li className={styles.li}>
            <a href={`https://github.com/pragtical/pragtical/releases/download/${version}/pragtical-${version}-windows-x86_64.zip`}>
              Portable ZIP
            </a>
            &nbsp;
            <code>64 bit</code>
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
            <a href={`https://github.com/pragtical/pragtical/releases/download/${version}/pragtical-${version}-macos-arm64.dmg`}>
              DMG
            </a>
            &nbsp;
            <code>Arm</code>
          </li>
          <li className={styles.li}>
            <a href={`https://github.com/pragtical/pragtical/releases/download/${version}/pragtical-${version}-macos-x86_64.dmg`}>
              DMG
            </a>
            &nbsp;
            <code>Intel</code>
          </li>
        </nav>
      ),
    },
  ];
}

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

function CommunityPortsTable() {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.portsTable}>
        <thead>
          <tr>
            <th>System</th>
            <th>Author</th>
            <th>View More</th>
          </tr>
        </thead>
        <tbody>
          {COMMUNITY_PORTS.map((port) => (
            <tr key={port.system}>
              <td>{port.system}</td>
              <td>{port.author}</td>
              <td>
                <a href={port.url}>View More</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function GetPragtical() {
  return (
    <main>
      <section className={styles.downloads}>
        <div className="container">
          <h1 style={{textAlign:"center"}}>{LATEST} Builds</h1>
          <p style={{textAlign:"center"}}>
            The newest stable version
          </p>
          <div className="row">
            {GetDownloadsMap(LATEST).map((props, idx) => (
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
            {GetDownloadsMap("rolling").map((props, idx) => (
              <Download key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.downloads}>
        <div className="container">
          <h1 style={{textAlign:"center"}}>Third-party Ports</h1>
          <p style={{textAlign:"center"}}>
            Community ports of Pragtical to non-officially supported systems.
          </p>
          <CommunityPortsTable />
        </div>
      </section>
    </main>
  );
}
