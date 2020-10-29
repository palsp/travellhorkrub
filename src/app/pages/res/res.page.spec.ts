import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResPage } from './res.page';

describe('ResPage', () => {
  let component: ResPage;
  let fixture: ComponentFixture<ResPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
