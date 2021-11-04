// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'

const hello = (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
  if (true) {
    console.log('test')
  }
  const test = {
    1: 'test',
    2: 'test2',
  }
}

export default hello
