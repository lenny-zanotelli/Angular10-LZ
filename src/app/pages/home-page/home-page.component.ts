import { Component, inject } from '@angular/core';
import { ArticleListComponent } from '../../components/article-list/article-list.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Article } from '../../models/article/article.model';
import { ArticleService } from '../../services/article/article.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ArticleListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  popularArticles$!: Observable<Article[]>;
  router: Router = inject(Router);
  articleService: ArticleService = inject(ArticleService);

  public ngOnInit(): void {
    this.popularArticles$ = this.articleService.getPopularArticles();
  }

  public navigateToArticle(slug: string) {
    this.router.navigate(['/article', slug]);
  }
}
