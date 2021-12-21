import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appPowerMode]'
})
export class PowerModeDirective implements OnInit {

  @HostBinding('style.marginLeft') moverInput: string = ''
  @HostBinding('style.color') colorLetrasInput: string = ''


  constructor() { }

  ngOnInit(): void { }

  @HostListener('input') onInput() {
    this.moverInput = Math.random() * 256 + "px"
    this.colorLetrasInput = 'rgb(' + Math.random() * 256 + "," + Math.random() * 256 + "," + Math.random() * 256 + ')';
  }

  @HostListener('keyup') keyup() {
    this.moverInput = "0px"
  }
}
