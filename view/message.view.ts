import { Request, Response } from 'express';

export default class MessageView {

    static send(req: Request, res: Response) {
        const { content } = req.body;

        return res.json({
            ok: true,
            message: content
        });
    }
}