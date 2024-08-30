import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Lightweight',
    Svg: require('@mdi/svg/svg/feather.svg').default,
    description: (
      <>
        ~50 MB of RAM, ~10 MB of disk space. Pragtical runs on many devices
        without performance issues.
      </>
    ),
  },
  {
    title: 'Powerful',
    Svg: require('@mdi/svg/svg/lightning-bolt.svg').default,
    description: (
      <>
        Syntax highlighting, multiple cursors, command palette and many more.
        LSP and other features are available as plugins.
      </>
    ),
  },
  {
    title: 'Hyperextensible',
    Svg: require('@mdi/svg/svg/code-tags.svg').default,
    description: (
      <>
        Pragtical allows you to extend the editor via Lua and its C API.
        Documentation is available for many parts of the editor.
      </>
    ),
  },
  {
    title: 'Cross-platform',
    Svg: require('@mdi/svg/svg/monitor-shimmer.svg').default,
    description: (
      <>
        Built on SDL, C and Lua, Pragtical runs on Windows, Linux and macOS.
        Porting to other systems is trivial.
      </>
    ),
  },
  {
    title: 'Easy to Use',
    Svg: require('@mdi/svg/svg/account-cog.svg').default,
    description: (
      <>
        Easily change your editor settings, color theme, key bindings and
        installed plugins configuration using the graphical settings manager.
      </>
    ),
  },
  {
    title: 'Free & Open Source',
    Svg: require('@mdi/svg/svg/open-source-initiative.svg').default,
    description: (
      <>
        Pragtical is licensed under the MIT license. No telemetry or
        data collection.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
