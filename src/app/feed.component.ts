import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs/Subscription';

import gql from 'graphql-tag';

import 'rxjs/add/operator/toPromise';

const AllPostsQuery = gql`
  query allPosts {
      allPosts {
        #add fields here
        id
      }
  }
`;

@Component({
  selector: 'app-feed',
  template: `
    <a routerLink="/create" class="fixed bg-white top-0 right-0 pa4 ttu dim black no-underline">+ New Post</a>
    <div class="w-100" style="max-width: 400px">
      <div class="pa3 bg-black-05 ma3" *ngFor="let post of allPosts">
        <div class="w-100" [ngStyle]="setImage(post.imageUrl)"></div>
        <div class="pt3">
          {{post.description}}&nbsp;
          <span class='red f6 pointer dim' (click)="handleDelete(post.id)">Delete</span>
        </div>
      </div>
    </div>
  `,
  host: {'style': 'width: 100%; display: flex; justify-content: center;'}
})

export class FeedComponent implements OnInit, OnDestroy {

  loading: boolean = true;
  allPosts: any;
  allPostsSub: Subscription;

  constructor(
    private apollo: Apollo
  ) {}

  setImage(url: string) {
    const styles = {
      'background-image':  `url(${url})`,
      'background-size': 'cover',
      'padding-bottom': '100%',
    };
    return styles;
  }

  handleDelete(id: string) {
    // add code here
  }

  ngOnInit() {
    // add code here
  }

  ngOnDestroy() {
    //this.allPostsSub.unsubscribe();
  }
}
