import { Injectable } from '@angular/core';
import { DragData, EventData } from './sortable.config';
import { SortableService } from './sortable.service';

@Injectable()
export class SortableHelper {
  constructor(private sortableService: SortableService) {}

  public getEventData = (event: any): EventData => {
    return {
      item: event.item,
      newIndex: event.newIndex,
      oldIndex: event.oldIndex,
      from: event.from,
      to: event.to
    };
  }

  public getDragData = (event: EventData, fromSortableModel?: Object, fromSortableInfo?: any): DragData => {
    return {
      newIndex: event.newIndex,
      oldIndex: event.oldIndex,
      itemEl: event.item,
      itemModel: this.sortableService.dragData,
      sourceSortableEl: event.from,
      destSortableEl: event.to,
      sourceSortableModel: fromSortableModel,
      sourceSortableInfo: fromSortableInfo,
      destSortableModel: this.sortableService.sortableData,
      destSortableInfo: this.sortableService.sortableInfo
    };
  }
}
