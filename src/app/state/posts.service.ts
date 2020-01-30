import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { PostDetails, PostStore } from './posts.store';

@Injectable({ providedIn: 'root' })

export class PostService {

  constructor(
    private http: HttpClient,
    private postStore: PostStore
  ) { }

  getPosts() {
    return this.http.get('https://hn.algolia.com/api/v1/search_by_date?tags=story').subscribe((postDetails: PostDetails) => {
      this.postStore.update({ postDetails });
    });
  }
}
