import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component implements 
       OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
       AfterViewChecked, OnDestroy {

  nombre: string = "santiago";

  constructor() { 
    console.log('constructor');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  guardar(){}
}
