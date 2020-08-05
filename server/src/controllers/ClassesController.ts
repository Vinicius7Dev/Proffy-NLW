import { Request, Response } from 'express';

import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleType {
    week_day: number;
    from: string;
    to: string;
}

export default class ClassesController {
    async index(req: Request, res: Response) {
        const filters = req.query;

        const week_day = filters.week_day as string;
        const subject = filters.subject as string;
        const time = filters.time as string;

        if(!week_day || !subject || !time)
            return res.status(400).json({ message: 'Não foi possível recuperar todos os filtros!' })
    
        const timeMinute = convertHourToMinutes(time);

        const classes = await db('classes')
            .whereExists(function() {
                this.select('class_schedule.*')
                    .from('class_schedule')
                    .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                    .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
                    .whereRaw('`class_schedule`.`from` <= ??', [timeMinute])
                    .whereRaw('`class_schedule`.`to` > ??', [timeMinute])
            })
            .where('classes.subject', '=', subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*']);

        return res.json(classes);
    }

    async create(req: Request, res: Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = req.body;
    
        const trx = await db.transaction();
    
        try {
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio
            });
        
            const insertedClassesIds = await trx('classes').insert({
                subject,
                cost,
                user_id: insertedUsersIds[0]
            });
        
            const classSchedule = schedule.map((element: ScheduleType) => {
                return {
                    class_id: insertedClassesIds[0],
                    week_day: element.week_day,
                    from: convertHourToMinutes(element.from),
                    to: convertHourToMinutes(element.to)
                };
            });
        
            await trx('class_schedule').insert(classSchedule);
        
            await trx.commit();
        
            return res.status(201).json({ message: 'Aula cadastrada com sucesso!' });
        } catch(error) {
            await trx.rollback();
    
            return res.status(400).json({ message: 'Erro ao cadastrar a aula!' })
        }
    }
}