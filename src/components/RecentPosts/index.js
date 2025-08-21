import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useGlobalData from '@docusaurus/useGlobalData';
import clsx from 'clsx';

export default function RecentPosts() {
  const data = useGlobalData()['recent-blog-plugin']?.default ?? [];

  if (data.length === 0) return <p>No recent posts found.</p>;

  return (
    <div className="container">
      <div className="row">
        {data.map(post => (
          <div key={post.metadata.permalink} className="col col--4 margin-bottom--lg">
            <div className={clsx('card', 'card--outlined', 'padding--md')}>
              <div className="card__header">
                <h3>
                  <Link to={post.metadata.permalink}>{post.metadata.title}</Link>
                </h3>
                <small>{post.metadata.date}</small>
              </div>
              {post.metadata.description && (
                <div className="card__body margin-top--sm">
                  <p>{post.metadata.description}</p>
                </div>
              )}
              <div className="card__footer margin-top--sm">
                <Link className="button button--small button--secondary" to={post.metadata.permalink}>
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
