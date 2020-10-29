import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowdiaryPage } from './showdiary.page';

describe('ShowdiaryPage', () => {
  let component: ShowdiaryPage;
  let fixture: ComponentFixture<ShowdiaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowdiaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowdiaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
