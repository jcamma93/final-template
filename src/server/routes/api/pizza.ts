import { Router } from 'express';
import { tokenCheck } from '../../middlewares/auth.mw';
import { ReqUser } from '../../../types';

const router = Router();

router.get('/', tokenCheck, (req: ReqUser, res: any) => {
    try {
        res.json({ message: `Enjoy your pizza party ${req.user!.email}` })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "I'm learning to code! :)", error: error.message });
    }
});

export default router;