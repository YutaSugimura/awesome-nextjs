import { NotionRenderer } from 'react-notion';
import Head from 'next/head';
import { TwitterTweetEmbed } from 'react-twitter-embed';

export async function getServerSideProps(context) {
  const pageId = context.params?.pageId;

  if (!pageId) {
    return;
  }

  const data = await fetch(
    `https://notion-api.splitbee.io/v1/page/${pageId}`,
  ).then((res) => res.json());

  return {
    props: {
      blockMap: data,
    },
  };
}

const Page = ({ blockMap }) => {
  if (!blockMap || Object.keys(blockMap).length === 0) {
    return (
      <div>
        <h3>No data found.</h3>
        <div> Make sure the pageId is valid.</div>
        <div>Only public pages are supported in this example.</div>
      </div>
    );
  }

  const title =
    blockMap[Object.keys(blockMap)[0]]?.value.properties.title[0][0];

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NotionRenderer blockMap={blockMap} fullPage />
      {Object.keys(blockMap).length > 0 &&
        Object.values(blockMap).map(
          (block, index) =>
            block.value.type === 'tweet' && (
              <div
                key={index}
                className="tweetContainer"
                style={{
                  width: '420px',
                  margin: '0 auto',
                  padding: '12px 0',
                }}
              >
                <TwitterTweetEmbed
                  tweetId={
                    block.value.properties.source[0][0].match(/[0-9]+$/)[0]
                  }
                />
              </div>
            ),
        )}
      <style jsx global>{`
        div :global(.notion-code) {
          box-sizing: border-box;
        }
        body {
          padding: 0;
          margin: 0;
        }
      `}</style>
    </>
  );
};
export default Page;
