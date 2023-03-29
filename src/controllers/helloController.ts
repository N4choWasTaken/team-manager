import { Request, Response } from 'express';

const getHelloMessage = (req: Request, res: Response) =>
    res.json({ message: 'Hello World' }).status(200);

export default { getHelloMessage };
