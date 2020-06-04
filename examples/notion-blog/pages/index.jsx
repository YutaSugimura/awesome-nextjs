import Head from 'next/head';
import { NotionRenderer } from 'react-notion';

export async function getStaticProps() {
  const data = await fetch(process.env.NOTION_BLOG_URL).then((res) =>
    res.json(),
  );

  return {
    props: {
      blockMap: data,
    },
  };
}

export default function Home({ blockMap }) {
  return (
    <div
      style={{
        maxWidth: 708,
        margin: '0 auto',
        padding: '0 8px',
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"`,
      }}
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NotionRenderer blockMap={blockMap} />
    </div>
  );
}
