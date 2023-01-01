import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostContainerComponent } from 'src/modules/posts/components/post-container/post-container.component';
import { PostsPageComponent } from 'src/pages/posts/posts.component';
import { TodosPageComponent } from 'src/pages/todos/todos.component';
import { UsersPageComponent } from 'src/pages/users/users.component';

const routes: Routes = [
  {path: 'posts', component: PostsPageComponent, children: [
    {path: ':id', component: PostContainerComponent}
  ]},
  {path: 'users', component: UsersPageComponent},
  {path: 'todos', component: TodosPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
