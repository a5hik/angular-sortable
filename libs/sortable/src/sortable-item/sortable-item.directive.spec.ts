import { SortableItemDirective } from './sortable-item.directive';
import { resetFakeAsyncZone, TestBed } from '@angular/core/testing';
import { Component, ElementRef } from '@angular/core';

const mockElementRef = {
  nativeElement: jasmine.createSpy('nativeElement')
};

@Component({
  template: `
    <div cnUiSortableItem></div>`
})
class TestCnUiSortableItemComponent {}

describe('Directive: SortableItemDirective', () => {
  let sortableFixture, sortableDirective, sortableElement, sortableDebugElement;
  beforeEach(() => {
    TestBed.resetTestingModule();
    resetFakeAsyncZone();
    TestBed.configureTestingModule({
      declarations: [TestCnUiSortableItemComponent, SortableItemDirective],
      providers: [{ provide: ElementRef, useValue: mockElementRef }]
    }).compileComponents();
    sortableFixture = TestBed.createComponent(TestCnUiSortableItemComponent);
    sortableDirective = sortableFixture.componentInstance; // to access properties and methods
    sortableElement = sortableFixture.nativeElement; // to access DOM element
    sortableDebugElement = sortableFixture.debugElement; // test helper
  });

  it('should have a defined component', () => {
    expect(sortableDirective).toBeDefined();
  });
});
