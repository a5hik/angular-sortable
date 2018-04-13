import {Injectable} from '@angular/core';
import {Board, Column} from '../model';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BoardService {

 // kanbanBoard: Board;

  constructor(private http: Http) {
  }

  getKanbanBoard(): Observable<Board> {
    return this.http.get('/assets/kanbanboard.json').map((res: Response) => {
      return res.json();
    })
  }

}
