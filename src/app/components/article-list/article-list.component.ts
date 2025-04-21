import { Component, inject, Input, OnInit, Output } from '@angular/core';
import { Article } from '../../models/article/article.model';
import { ArticleThumbnailComponent } from '../article-thumbnail/article-thumbnail.component';
import { Router, RouterModule } from '@angular/router';
import { ArticleService } from '../../services/article/article.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [RouterModule, ArticleThumbnailComponent, CommonModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
})
export class ArticleListComponent implements OnInit {
  @Input() displayPopularOnly: boolean = false;
  @Input() articles$!: Observable<Article[]>;
  router: Router = inject(Router);
  articleService: ArticleService = inject(ArticleService);

  public ngOnInit(): void {
    this.articles$ = this.displayPopularOnly
      ? this.articleService.getPopularArticles()
      : this.articleService.getArticles();
  }

  public navigateToArticle(slug: string) {
    this.router.navigate(['/article', slug]);
  }

  handleLike(article: Article) {
    article.isLiked = !article.isLiked;
  }
}
