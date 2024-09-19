import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, description, date, userId } = req.body;
      const event = await prisma.event.create({
        data: {
          name,
          description,
          date: new Date(date),
          createdBy: {
            connect: { id: userId }
          }
        }
      });
      res.status(201).json(event);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create event' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
