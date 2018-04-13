import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortableDirective } from './sortable.directive';
import { SortableItemDirective } from './sortable-item/sortable-item.directive';
import { ItemHandleDirective } from './item-handle/item-handle.directive';
import { SortableService } from './sortable.service';
import { SortableConfig, SortableDefaultOptions } from './sortable.config';
import { SortableHelper } from './sortable.helper';

@NgModule({
  imports: [CommonModule],
  declarations: [SortableDirective, SortableItemDirective, ItemHandleDirective],
  exports: [SortableDirective, SortableItemDirective, ItemHandleDirective],
  providers: [SortableService, SortableConfig, SortableDefaultOptions, SortableHelper]
})
export class SortableModule {}
