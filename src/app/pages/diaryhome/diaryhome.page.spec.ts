import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiaryhomePage } from './diaryhome.page';

describe('DiaryhomePage', () => {
  let component: DiaryhomePage;
  let fixture: ComponentFixture<DiaryhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryhomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiaryhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
