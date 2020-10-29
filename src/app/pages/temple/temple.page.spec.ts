import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TemplePage } from './temple.page';

describe('TemplePage', () => {
  let component: TemplePage;
  let fixture: ComponentFixture<TemplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TemplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
