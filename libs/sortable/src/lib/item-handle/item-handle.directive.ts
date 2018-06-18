import { OnInit } from '@angular/core';
import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { SortableConfig } from '../sortable.config';
import 'rxjs/add/operator/map';

@Directive({
  selector: '[asItemHandle]'
})
export class ItemHandleDirective implements OnInit {
  private element: HTMLElement;

  constructor(private renderer: Renderer2, private elemRef: ElementRef) {}

  ngOnInit() {
    this.element = this.elemRef.nativeElement;
    this.element.classList.add(SortableConfig.handleClass);
    this.renderer.setStyle(this.element, 'cursor', 'move');
  }
}
