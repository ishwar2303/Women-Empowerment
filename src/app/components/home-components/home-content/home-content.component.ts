import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  imageIndex: number = -1
  numberOfImages: number = 3
  bannerImage: string = ''
  timeForBannerToSwitch: number = 3000 // in milli seconds

  bannerAutoSwitchInterval: any

  bannerImages = [
    '../../../../assets/images/w5.png',
    '../../../../assets/images/w1.png',
    '../../../../assets/images/w2.jpeg'
  ]

  constructor() { }

  ngOnInit(): void {
    this.nextImage()

    this.bannerAutoSwitchInterval = setInterval(() => {
      this.autoNextImage()
    }, this.timeForBannerToSwitch)
  }

  previousImage(): void {
    if(this.bannerAutoSwitchInterval)
      clearInterval(this.bannerAutoSwitchInterval)
    if(this.imageIndex == 0)
      this.imageIndex = this.numberOfImages - 1
    else this.imageIndex = this.imageIndex - 1
    this.imageIndex = this.imageIndex%this.numberOfImages
    this.bannerImage = this.bannerImages[this.imageIndex]
  }

  nextImage(): void {
    if(this.bannerAutoSwitchInterval)
      clearInterval(this.bannerAutoSwitchInterval)
    this.imageIndex = this.imageIndex + 1
    this.imageIndex = this.imageIndex%this.numberOfImages
    this.bannerImage = this.bannerImages[this.imageIndex]
  }

  autoNextImage(): void {
    this.imageIndex = this.imageIndex + 1
    this.imageIndex = this.imageIndex%this.numberOfImages
    this.bannerImage = this.bannerImages[this.imageIndex]
  }

}
