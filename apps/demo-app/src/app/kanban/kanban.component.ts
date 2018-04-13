import {Component, OnInit} from '@angular/core';
import {BoardService} from '../services/board.service';
import {Board, Column} from '../model';
import {DragData} from '@angular-sortable/sortable';

@Component({
  selector: 'demo-app-kanban',
  templateUrl: 'kanban.component.html',
  styleUrls: ['kanban.component.scss'],
  providers: [BoardService]
})

export class KanbanComponent implements OnInit {

  kanbanBoard: Board;
  columns: Column[];
  sortableOptions: any;
  sortableInfo: any;

  constructor(private boardService: BoardService) {
  }

  ngOnInit() {
    this.boardService.getKanbanBoard().map(res => new Board(res)).subscribe(data => {
      this.kanbanBoard = data;
      this.columns = data.columns;
    });

    this.sortableOptions = this.getSortableOptions();
  }

  dragStarted = (dragData: DragData): void => {
    console.log('drag Started');
  };

  dragMove = (eventData: any): void => {
    //console.log(event);
  };

  dragEnded = (dragData: DragData): void => {
    console.log('drag Ended');
  };

  itemMoved = (dragData: DragData): void => {
    console.log(dragData);
  };

  orderChanged = (dragData: DragData): void => {
    console.log(dragData);
  };

  getSortableOptions = (): any => {
    return {};
  };

}
