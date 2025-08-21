const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

module.exports = function recentBlogPlugin(context, options = {}) {
  const maxPosts = options.maxPosts || 5; // max number of posts to expose
  const excerptLength = options.excerptLength || 200; // max chars for auto description

  return {
    name: 'recent-blog-plugin',

    async loadContent() {
      const blogDir = path.join(context.siteDir, 'blog');
      if (!fs.existsSync(blogDir)) return [];

      const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));

      const posts = files.map(file => {
        const contentRaw = fs.readFileSync(path.join(blogDir, file), 'utf-8');
        const {data, content} = matter(contentRaw);

        const slug = data.slug || file.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.mdx?$/, '');
        const date = data.date || file.slice(0, 10);

        // Use frontmatter description if available, otherwise take excerpt from content
        const description =
          data.description ||
          content
            .replace(/\n/g, ' ')
            .replace(/!\[.*?\]\(.*?\)/g, '') // remove images
            .replace(/\[.*?\]\(.*?\)/g, '') // remove links
            .slice(0, excerptLength)
            .trim() + (content.length > excerptLength ? '…' : '');

        return {
          metadata: {
            title: data.title || slug,
            date,
            permalink: `/blog/${slug}`,
            description,
          },
        };
      });

      // Sort newest first and limit to maxPosts
      return posts
        .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date))
        .slice(0, maxPosts);
    },

    async contentLoaded({content, actions}) {
      const {setGlobalData} = actions;
      setGlobalData(content);
    },
  };
};
