import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from '../../models/article/article.model';
import { ArticleService } from '../../services/article/article.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss',
})
export class ArticlePageComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private articleService = inject(ArticleService);
  article?: Article;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleService
        .getArticleById(Number(params.get('id')))
        .subscribe((data) => (this.article = data));
    });
  }
}
