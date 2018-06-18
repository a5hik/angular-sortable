import { Injectable } from '@angular/core';

@Injectable()
export class SortableService {
  index: number;
  sortableData: Array<any>;
  sortableInfo: any;
  isDragged: boolean;
  dragData: any;

  private elem: HTMLElement;

  public get element(): HTMLElement {
    return this.elem;
  }
}
