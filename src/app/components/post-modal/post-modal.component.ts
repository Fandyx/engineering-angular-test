import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hit } from 'src/app/state';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss']
})
export class PostModalComponent {
  post: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public postInput: Hit,
    public dialogRef: MatDialogRef<PostModalComponent>
  ) {
    this.post = JSON.stringify(postInput);
  }

}
