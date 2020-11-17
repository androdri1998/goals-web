import { format } from 'date-fns';

interface IDeposit {
  description: string;
  value: number;
}

export default class Goal {
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
    this.title = title;
    this.value = value;
    this.whenReach = whenReach;
    this.deposits = deposits || [];
    this.createdAt = format(new Date(), 'yyyy-MM-yy');
    this.updatedAt = format(new Date(), 'yyyy-MM-yy');
  }
}
