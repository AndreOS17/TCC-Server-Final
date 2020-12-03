import { uuid } from 'uuidv4';

export default interface RepositoryModel {
  ID: string;
  time: number;
  type: string;
  data: string;
}

export default class FakeAnalyzesController {
  private Repository: RepositoryModel[] = [];

  async index() {
    const allAnalyzes = this.Repository;

    return allAnalyzes;
  }

  async create(time: number, type: string, data: string) {
    const ID = uuid();

    const analyze = { ID, time, type, data };

    Object.assign(this.Repository, analyze);

    return analyze;
  }
}