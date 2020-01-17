import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifThumbnailsComponent } from './gif-thumbnails.component';

describe('GifThumbnailsComponent', () => {
  let component: GifThumbnailsComponent;
  let fixture: ComponentFixture<GifThumbnailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifThumbnailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifThumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
