import { Injectable } from '@angular/core';

@Injectable()
export class SortableConfig {
  public static sortableClass = 'as-sortable';
  public static itemClass = 'as-sortable-item';
  public static handleClass = 'as-item-handle';
  public static placeHolderClass = 'as-sortable-placeholder';
  public static dragClass = 'as-sortable-drag';
  public static dragOverClass = 'as-sortable-drag-over';
  public static dragCursor = 'move';
}

export interface EventData {
  item: any;
  from: any;
  to: any;
  newIndex: number;
  oldIndex: number;
}

export interface DragData {
  newIndex: number;
  oldIndex: number;
  itemEl: HTMLElement;
  itemModel: Object;
  sourceSortableEl: HTMLElement;
  destSortableEl: HTMLElement;
  sourceSortableModel?: Object;
  sourceSortableInfo?: any;
  destSortableModel: Object;
  destSortableInfo: any;
}

@Injectable()
export class SortableDefaultOptions {
  animation = 150;
  delay = 0;
  fallbackTolerance = 0;
  scroll = true;
  scrollSensitivity = 30;
  scrollSpeed = 10; // px
  group: string = SortableConfig.sortableClass;
  draggable: string = '.' + SortableConfig.itemClass;
  ghostClass: string = SortableConfig.placeHolderClass;
  chosenClass: string = SortableConfig.dragClass;
  dragClass: string = SortableConfig.dragClass;
  handle: string = '.' + SortableConfig.handleClass;
}
