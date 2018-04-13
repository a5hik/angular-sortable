import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { SortableConfig } from '../sortable.config';

@Directive({
  selector: '[asSortableItem]'
})
export class SortableItemDirective implements OnInit {
  private element: HTMLElement;

  /**
   * The data that has to be dragged. It can be any JS object
   */
  @Input() dragData: any;

  constructor(private elemRef: ElementRef) {
    elemRef.nativeElement.draggable = true;
  }

  ngOnInit() {
    this.element = this.elemRef.nativeElement;
    this.element.classList.add(SortableConfig.itemClass);
  }
}
