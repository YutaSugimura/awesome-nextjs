import React from 'react';
import { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <div>
      <p>page: about</p>
      <p>env: {process.env.NEXT_PUBLIC_EXAMPLE_KEY}</p>
    </div>
  );
};
export default Page;
