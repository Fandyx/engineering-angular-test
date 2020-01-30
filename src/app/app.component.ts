import { Component, OnInit } from '@angular/core';
import { PostService, PostQuery, PostDetails, Hit } from './state';
import { MatDialog } from '@angular/material/dialog';
import { PostModalComponent } from './components/post-modal/post-modal.component';
import { interval, Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts$: Observable<PostDetails>;

  postList: Hit[];
  displayedColumns: string[] = ['title', 'url', 'created_at', 'author'];
  dataSource: any;

  constructor(
    private postService: PostService,
    private postQuery: PostQuery,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.postService.getPosts();
    interval(10000).subscribe(() => this.postService.getPosts());

    this.posts$ = this.postQuery.select('postDetails');
    this.posts$.subscribe(posts => {
      if (posts) { this.postList = posts.hits; this.dataSource = new MatTableDataSource(this.postList); }
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(row: Hit) {
    this.dialog.open(PostModalComponent, {
      data: row
    });
  }
}
