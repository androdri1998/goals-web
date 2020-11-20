import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

interface IDeposit {
  id: string;
  description: string;
  value: number;
}

export default class Goal {
  public id: string;

  public title: string;

  public value: number;

  public whenReach: string;

  public createdAt: string;

  public updatedAt: string;

  public deposits: IDeposit[];

  constructor(
    title: string,
    value: number,
    whenReach: string,
    deposits?: IDeposit[],
  ) {
    this.id = uuidv4();
    this.title = title;
    this.value = value * 100;
    this.deposits = deposits || [];

    const currentDate = format(new Date(), 'yyyy-MM-yy HH:mm:ss');
    this.whenReach = whenReach;
    this.createdAt = currentDate;
    this.updatedAt = currentDate;
  }
}
