import {
  Directive,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  ElementRef,
  NgZone
} from '@angular/core';
import { SortableService } from './sortable.service';
import * as Sortable from 'sortablejs';
import {
  SortableDefaultOptions,
  DragData,
  SortableConfig
} from './sortable.config';
import { SortableHelper } from './sortable.helper';

@Directive({
  selector: '[asSortable]'
})
export class SortableDirective implements OnInit, OnDestroy {
  private element: HTMLElement;
  private draggable = true;
  private data: Array<any> = [];
  private acceptDrop: (dropData: any) => boolean;
  private options: any = {};
  private sortable: any;
  private info: any;

  @Input('dragEnabled')
  set dragEnabled(value: boolean) {
    this.draggable = value;
  }

  @Input('sortableData')
  set sortableData(sortableData: Array<any>) {
    this.data = sortableData;
  }

  @Input('allowDrop')
  set allowDrop(value: (dropData: any) => boolean) {
    this.acceptDrop = value;
  }

  @Input('sortableOptions')
  set sortableOptions(value: any) {
    this.options = value;
  }

  @Input('sortableInfo')
  set sortableInfo(value: any) {
    this.info = value;
  }

  /**
   * Callback functions.
   */
  @Output('onDragStart')
  onDragStart: EventEmitter<DragData> = new EventEmitter<DragData>();
  @Output('onDragEnd')
  onDragEnd: EventEmitter<DragData> = new EventEmitter<DragData>();

  @Output('onOrderChanged')
  onOrderChanged: EventEmitter<DragData> = new EventEmitter<DragData>();
  @Output('onItemMoved')
  onItemMoved: EventEmitter<DragData> = new EventEmitter<DragData>();

  @Output('onDragEnter')
  onDragEnter: EventEmitter<Event> = new EventEmitter<Event>();
  @Output('onDragLeave')
  onDragLeave: EventEmitter<Event> = new EventEmitter<Event>();

  get sortableData(): Array<any> {
    return this.data;
  }

  get sortableElement(): HTMLElement {
    return this.element;
  }

  get sortableOptions(): any {
    return this.options;
  }

  get sortableInfo(): any {
    return this.info;
  }

  constructor(
    private elemRef: ElementRef,
    private defaultOptions: SortableDefaultOptions,
    private sortableService: SortableService,
    private sortableHelper: SortableHelper,
    private ngZone: NgZone
  ) {
    this.element = this.elemRef.nativeElement;
    this.element.classList.add(SortableConfig.sortableClass);
  }

  ngOnInit() {
    /*this.element.ondragenter = (event: DragEvent) => {
      this.onDragEnter.emit(event);
    };

    this.element.ondragleave = (event: DragEvent) => {
      this.onDragLeave.emit(event);
    };*/

    const customSortOptions = Object.assign(this.defaultOptions, {
      disabled: !this.draggable,

      // dragging started
      onStart: (event: Event) => {
        const eventData = this.sortableHelper.getEventData(event);

        this.sortableService.isDragged = true;
        this.sortableService.sortableData = this.sortableData;
        this.sortableService.sortableInfo = this.sortableInfo;
        this.sortableService.index = eventData.oldIndex;
        // Add dragData
        this.sortableService.isDragged = true;
        this.sortableService.dragData = this.sortableData[eventData.oldIndex];

        this.ngZone.run(() => {
          this.onDragStart.emit(this.sortableHelper.getDragData(eventData));
        });
      },

      setData: function(dataTransfer, el) {
        dataTransfer.setData('text', '');
        el.classList.add(SortableConfig.dragClass);
      },

      // dragging ended
      onEnd: event => {
        const eventData = this.sortableHelper.getEventData(event);
        this.sortableService.isDragged = false;
        this.sortableService.sortableData = null;
        this.sortableService.sortableInfo = null;
        this.sortableService.index = null;
        this.sortableService.isDragged = false;
        this.sortableService.dragData = null;

        event.item.classList.remove(SortableConfig.dragClass);

        this.ngZone.run(() => {
          this.onDragEnd.emit(this.sortableHelper.getDragData(eventData));
        });
      },

      // Element is dropped into the list from another list
      onAdd: (event: Event) => {
        const eventData = this.sortableHelper.getEventData(event);
        const fromSortableData = this.sortableService.sortableData;
        const fromSortableInfo = this.sortableService.sortableInfo;
        // Get item
        const item: any = this.sortableService.sortableData[
          this.sortableService.index
        ];
        // Remove item from previous list
        fromSortableData.splice(this.sortableService.index, 1);

        // Add item to new list
        this.sortableData.splice(eventData.newIndex, 0, item);
        this.sortableService.sortableData = this.sortableData;
        this.sortableService.sortableInfo = this.sortableInfo;
        this.sortableService.index = eventData.newIndex;

        this.ngZone.run(() => {
          this.onItemMoved.emit(
            this.sortableHelper.getDragData(
              eventData,
              fromSortableData,
              fromSortableInfo
            )
          );
        });
      },

      // Changed sorting within list
      onUpdate: (event: Event) => {
        const eventData = this.sortableHelper.getEventData(event);

        if (eventData.newIndex !== eventData.oldIndex) {
          this.sortableData.splice(
            eventData.newIndex,
            0,
            this.sortableData.splice(eventData.oldIndex, 1)[0]
          );
          this.sortableService.sortableData = this.sortableData;
          this.sortableService.sortableInfo = this.sortableInfo;
          this.sortableService.index = eventData.newIndex;

          this.ngZone.run(() => {
            this.onOrderChanged.emit(
              this.sortableHelper.getDragData(eventData)
            );
          });
        }
      }
    });

    this.ngZone.runOutsideAngular(() => {
      this.sortable = Sortable.create(
        this.element,
        Object.assign(customSortOptions, this.options)
      );
    });
  }

  ngOnDestroy() {
    this.ngZone.runOutsideAngular(() => {
      if (this.sortable) {
        this.sortable.destroy();
      }
    });
  }
}
