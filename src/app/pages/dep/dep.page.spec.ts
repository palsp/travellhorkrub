import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DepPage } from './dep.page';

describe('DepPage', () => {
  let component: DepPage;
  let fixture: ComponentFixture<DepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
