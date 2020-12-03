import FakeAnalyzesController from './fakes/FakeAnalyzesController';

it('Should be able to create an Analyzes', async () => {
  const AnalyzesController = new FakeAnalyzesController();

  const time = 2;
  const type = 'Análise de Algo'
  const data = '2020-09-26';

  const response = await AnalyzesController.create(time, type, data);

  expect(response).toHaveProperty('ID');
});

it('Should be able to show all Analyzes', async () => {
  const AnalyzesController = new FakeAnalyzesController();

  const time = 2;
  const type = 'Análise de Algo'
  const data = '2020-09-26';

  await AnalyzesController.create(time, type, data);
  await AnalyzesController.create(time + 1, type, data);

  const response = await AnalyzesController.index();

  expect(response).toBeInstanceOf(Array);
});