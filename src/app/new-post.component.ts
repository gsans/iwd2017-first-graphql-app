import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';

import gql from 'graphql-tag';

@Component({
  selector: 'app-new-post',
  template: `
    <div>
      <input
        type="text"
        class="form-control"
        id="descriptionInput"
        placeholder="Description"
        [(ngModel)]="description"
        name="description"
        required
      />
      <input
        type="text"
        class=""
        id="urlInput"
        placeholder="Url"
        [(ngModel)]="imageUrl"
        name="imageUrl"
      />
      <button 
        (click)="postImage()"
      >
        Post
      </button>
    </div>
  `
})
export class NewPostComponent {
  description: string;
  imageUrl: string;

  constructor(
    private router: Router,
    private apollo: Apollo
  ) { }

  postImage(): void {
    // add code here
  }
}
