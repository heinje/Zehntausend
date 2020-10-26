export class Player {
  name: string;
  points: number;
  pointsRound: number;

  constructor(name: string) {
    this.name = name;
    this.points = 0;
    this.pointsRound = 0;
  }
}
