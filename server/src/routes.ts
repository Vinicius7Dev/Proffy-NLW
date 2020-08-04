import express from 'express';

const routes = express.Router();

routes.post('/classes', (req, res) => {
    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        swhedule
    } = req.body;

    return res.json({ message: 'OK' });
});

export default routes;