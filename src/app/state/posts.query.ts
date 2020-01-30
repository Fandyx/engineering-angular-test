import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { PostState, PostStore } from './posts.store';

@Injectable({ providedIn: 'root' })
export class PostQuery extends Query<PostState> {
  selectPostDetails$ = this.select(state => state.postDetails);

  constructor(protected store: PostStore) {
    super(store);
  }
}
