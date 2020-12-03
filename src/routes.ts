import { Router } from "express";

import AnalyzesController from './controller/AnalyzesController';
const analizesController = new AnalyzesController();

const routes = Router();

routes.get('/analises', analizesController.index);
routes.post('/analises', analizesController.create);

export default routes;