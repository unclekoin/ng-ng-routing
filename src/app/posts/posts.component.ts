import { Component, OnInit } from '@angular/core';
import { Post, PostsService } from './posts.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public posts!: Post[];
  public showIds: boolean = false;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.posts = this.postsService.posts;
    this.route.queryParams.subscribe((params: Params) => {
      this.showIds = !!params['showIds'];
    });

    this.route.fragment.subscribe((fragment) => {
      console.log(fragment);
    })
  }

  public showIdsProgram() {
    this.router.navigate(['/posts'], {
      queryParams: {
        showIds: true
      },
      fragment: 'program-fragment'
    })
  }
}
