import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiariesPage } from './diaries.page';

describe('DiariesPage', () => {
  let component: DiariesPage;
  let fixture: ComponentFixture<DiariesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiariesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiariesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
