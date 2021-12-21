import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {

  @ViewChild('video') videoElem!: ElementRef
  currentVolume: number = 0
  currentTime: number = 0
  duration: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.videoElem.nativeElement.volume = this.currentVolume / 100
    this.videoElem.nativeElement.play()
  }


  play(video: HTMLVideoElement) {
    video.play()
  }


  pause(video: HTMLVideoElement) {
    video.pause()
  }


  cambiarVolumen(video: HTMLVideoElement, event: any): void {
    const volumeInput = Number(event.target.value)
    this.currentVolume = volumeInput;
    video.volume = volumeInput / 100  /* El volumen se mueve entre 0 y 1 */
  }

  fullScreen(video: HTMLVideoElement) {
    video.requestFullscreen()
  }

  replay(video: HTMLVideoElement) {
    video.currentTime = 0
  }

  subirVolumen() {
    if (this.currentVolume + 10 <= 100) {
      this.videoElem.nativeElement.volume += 0.1
      this.currentVolume += 10
    } else {
      this.videoElem.nativeElement.volume = 1
      this.currentVolume = 100
    }
  }

  bajarVolumen() {
    if (this.currentVolume - 10 >= 0) {
      this.videoElem.nativeElement.volume -= 0.1
      this.currentVolume -= 10
    } else {
      this.videoElem.nativeElement.volume = 0
      this.currentVolume = 0
    }
  }

  actualizarProgreso(event: any) {
    this.currentTime = event.target.currentTime
  }


  setDuration() {
    this.duration = this.videoElem.nativeElement.duration
    console.log(this.duration)
  }

/*
  getDuration(video: HTMLVideoElement): number {
    return video.duration || 0
  }
  */
}