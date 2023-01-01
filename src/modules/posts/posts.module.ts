import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { CoreModule } from 'src/core/core.module';
import { RouterModule } from '@angular/router';
import { PostContainerComponent } from './components/post-container/post-container.component';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [
    PostsListComponent,
    PostContainerComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
  ],
  providers: [
    PostsService,
  ],
  exports: [
    PostsListComponent,
  ]
})
export class PostsModule { }
