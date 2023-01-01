import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsModule } from 'src/modules/posts/posts.module';
import { TodosModule } from 'src/modules/todos/todos.module';
import { UsersModule } from 'src/modules/users/users.module';
import { PostsPageComponent } from './posts/posts.component';
import { TodosPageComponent } from './todos/todos.component';
import { UsersPageComponent } from './users/users.component';



@NgModule({
  declarations: [
    PostsPageComponent,
    UsersPageComponent,
    TodosPageComponent,
  ],
  imports: [
    CommonModule,
    PostsModule,
    UsersModule,
    TodosModule
  ]
})
export class PagesModule { }
