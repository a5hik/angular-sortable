import { SortableDirective } from './sortable.directive';
import { resetFakeAsyncZone, TestBed } from '@angular/core/testing';
import { Component, ElementRef } from '@angular/core';
import { SortableService } from './sortable.service';
import { SortableDefaultOptions } from './sortable.config';
import { SortableHelper } from './sortable.helper';

const mockElementRef = {
  nativeElement: jasmine.createSpy('nativeElement')
};

@Component({
  template: `
    <div cnUiSortable></div>`
})
class TestCnUiSortableComponent {}

describe('Directive: SortableDirective', () => {
  let sortableFixture, sortableDirective, sortableElement, sortableDebugElement;
  beforeEach(() => {
    TestBed.resetTestingModule();
    resetFakeAsyncZone();
    TestBed.configureTestingModule({
      declarations: [TestCnUiSortableComponent, SortableDirective],
      providers: [
        { provide: SortableHelper },
        { provide: SortableDefaultOptions },
        { provide: SortableService },
        { provide: ElementRef, useValue: mockElementRef }
      ]
    }).compileComponents();
    sortableFixture = TestBed.createComponent(TestCnUiSortableComponent);
    sortableDirective = sortableFixture.componentInstance; // to access properties and methods
    sortableElement = sortableFixture.nativeElement; // to access DOM element
    sortableDebugElement = sortableFixture.debugElement; // test helper
  });

  it('should have a defined component', () => {
    expect(sortableDirective).toBeDefined();
  });
});
