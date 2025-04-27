import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePageComponent } from './article-page.component';
import { ArticleService } from '../../services/article.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('ArticlePageComponent', () => {
  let component: ArticlePageComponent;
  let fixture: ComponentFixture<ArticlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlePageComponent, HttpClientTestingModule, RouterModule.forRoot([])],
      providers: [ArticleService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
