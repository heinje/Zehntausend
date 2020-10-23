export class Player {
  name: string;
  points: number;
  pointsRound: number;
  pointsAdd: number;

  constructor(name: string) {
    this.name = name;
    this.points = 0;
    this.pointsRound = 0;
    this.pointsAdd = 0;
  }
}
