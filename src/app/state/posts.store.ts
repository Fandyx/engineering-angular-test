import { EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';


export interface Hit {
  created_at: string;
  title: string;
  url: string;
  author: string;
  points: number;
  story_text?: string;
  comment_text?: string;
  num_comments: number;
  story_id?: number;
  story_title?: string;
  story_url?: string;
  parent_id?: number;
  created_at_i: number;
  objectID: number;
}

export interface PostDetails {
  hits: Hit[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: number;
  query: string;
  params: string;
  processingTimeMS: number;
}

export interface PostState {
  postDetails?: PostDetails;
}

export function createInitialState(): PostState {
  return {
    postDetails: undefined
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'post', resettable: true })
export class PostStore extends EntityStore<PostState> {

}
