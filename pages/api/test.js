// import type { NextApiRequest, NextApiResponse } from 'next'

// type ResponseData = {
// message: string
// }

export default function handler(req, res) {
  res.status(200).json({ message: "Hello from Next.js!" });
}
