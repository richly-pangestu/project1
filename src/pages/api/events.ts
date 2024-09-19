import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const events = await prisma.event.findMany({
        include: { createdBy: true },
      });
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch events' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
