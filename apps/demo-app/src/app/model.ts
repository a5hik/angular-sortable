
export class Board {
  name: string;
  numberOfColumns: number;
  columns: Column[];

  static fromJSONArray(array: Array<Board>): Board[] {
    return array.map(obj => new Board(obj));
  }

  constructor(obj: Object) {
    this.name = obj['name'];
    this.numberOfColumns = obj['numberOfColumns'];
    this.columns = Column.fromJSONArray(obj['columns']);
  }
}

export class Column {
  name: string;
  cards: Card[];

  static fromJSONArray(array: Array<Column>): Column[] {
    return array.map(obj => new Column(obj));
  }

  constructor(obj: Object) {
    this.name = obj['name'];
    this.cards = Card.fromJSONArray(obj['cards']);
  }
}

export class Backlog {
  name: string;
  phases: Phase[];
}

export class Phase {
  name: string;
  cards: Card[];
}

export class Card {
  title: string;
  status: string;
  details: string;

  static fromJSONArray(array: Array<Card>): Card[] {
    return array.map(obj => new Card(obj));
  }

  constructor(obj: Object) {
    this.title = obj['title'];
    this.status = obj['status'];
    this.details = obj['details'];
  }
}