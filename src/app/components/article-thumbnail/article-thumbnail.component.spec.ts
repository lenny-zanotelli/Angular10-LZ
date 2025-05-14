import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleThumbnailComponent } from './article-thumbnail.component';
import { RouterModule } from '@angular/router';

describe('ArticleThumbnailComponent', () => {
  let component: ArticleThumbnailComponent;
  let fixture: ComponentFixture<ArticleThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleThumbnailComponent, RouterModule.forRoot([])],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
