import { NextApiRequest, NextApiResponse } from 'next';

const func = (_: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({ text: 'Hello' });
};
export default func;
