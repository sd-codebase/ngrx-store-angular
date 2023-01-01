import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/core/services/data.service';
import { IPost } from '../posts.interfaces';

@Injectable()
export class PostsService {

  constructor(private dataService: DataService) { }

  getPosts(): Observable<IPost[]> {
    return this.dataService.get<IPost[]>('posts');
  }
}
