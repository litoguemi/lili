import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalidasComponent } from './salidas.component';

describe('SalidasComponent', () => {
  let component: SalidasComponent;
  let fixture: ComponentFixture<SalidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalidasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
