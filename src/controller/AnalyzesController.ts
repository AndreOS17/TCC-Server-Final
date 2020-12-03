import { Request, Response } from 'express'
import db from '../database';

interface RequestDTO {
  tempo: string;
  type: string;
  data: Date;
}

interface TypeModel {
  // TODO
}

export default class AnalyzesController {
  async index(request: Request, response: Response) {
    const allAnalyzes = await db.select('*').from('Análises');

    return response.json(allAnalyzes);
  }

  async create(request: Request, response: Response) {
    const { tempo, type, data }: RequestDTO = request.body;

    const trx = await db.transaction();

    await trx('Análises').insert({ time: tempo, type, data });

    await trx.commit();
    return response.status(201).json({
      time: tempo,
      type,
      data,
    }).send();
  }
}