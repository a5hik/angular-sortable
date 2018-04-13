/* tslint:disable:no-unused-variable */

import {BoardService} from './board.service';
import {
  inject,
  async,
  fakeAsync,
  flushMicrotasks,
  addProviders,
  TestComponentBuilder,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

describe('BoardService Service', () => {

  it('should ...',
    inject([BoardService], (service: BoardService) => {
      expect(service).toBeTruthy();
    }));
});
