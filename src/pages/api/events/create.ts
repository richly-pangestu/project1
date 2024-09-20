import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, description, date, userId } = req.body;

        // Check if all data is present
        if (!name || !description || !date || !userId) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        try {
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
            console.error('Failed to create event:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
