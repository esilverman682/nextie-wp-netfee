import usePageMetadata from 'hooks/use-page-metadata';

import { getPaginatedPosts } from 'lib/posts';

import TemplateArchive from 'templates/archive';

export default function Posts({ posts, pagination }) {
  const title = 'Blogz Posters';
  const slug = 'blog';

  const { metadata } = usePageMetadata({
    metadata: {
      title,
      description: false,
    },
  });

  return (
    <TemplateArchive
      title={title}
      posts={posts}
      slug={slug}
      pagination={pagination}
      metadata={metadata}
    />
  );
}

export async function getStaticProps() {
  const { posts, pagination } = await getPaginatedPosts();
  return {
    props: {
      posts,
      pagination: {
        ...pagination,
        basePath: '/blog',
      },
    },
  };
}
