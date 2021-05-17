import { Request, Response } from 'express';

export default class IndexView {

    public static getMain(req: Request, res: Response) {
        return res.json({
            ok: true,
            message: 'Listo'
        });
    }

    public static postMain(req: Request, res: Response) {

        const { body } = req;

        return res.json({
            ok: true,
            body
        });

    }

}




