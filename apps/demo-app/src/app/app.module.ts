import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { HttpModule } from '@angular/http';
import { KanbanComponent } from './kanban';
import { routing } from './app.routes';
import { SortableModule } from '@angular-sortable/sortable';

@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), HttpModule, routing, SortableModule],
  declarations: [AppComponent, KanbanComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
