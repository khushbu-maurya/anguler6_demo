import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {TodoOverviewComponent} from './todo-overview/todo-overview.component';
import {TodoListComponent} from './todo-list/todo-list.component';

import { FormsModule } from '@angular/forms';
const routes: Routes = [{path:'todo-list',component:TodoListComponent},{path:'todo-overview',component:TodoOverviewComponent}];

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(routes),
  FormsModule ],
  declarations:[TodoOverviewComponent,TodoListComponent],
  exports: [RouterModule,TodoListComponent,TodoOverviewComponent]
})
export class ReduxTodoRoutingModule { }
