import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

declare var faceapi: any;
const WEIGHTS_PATH = '../../../assets/weights'
const minConfidence = 0.5 //show which is over 50%

@Component({
  selector: 'app-detection',
  templateUrl: './detection.page.html',
  styleUrls: ['./detection.page.scss'],
})
export class DetectionPage implements OnInit {
  out: any;
  @ViewChild('video', { static: false }) videoElement: ElementRef;
  @ViewChild('canvas', { static: false }) canvas: ElementRef;

  videoWidth = 0;
  videoHeight = 0;
  constraints = {
    video: {
      facingMode: "environment",
      width: { ideal: 480 },
      height: { ideal: 480 }
    }
  };
  isReady: boolean = false;
  showLandmark: boolean = true;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  async startCamera() {
    await faceapi.nets.ssdMobilenetv1.load(WEIGHTS_PATH);
    await faceapi.nets.faceLandmark68Net.load(WEIGHTS_PATH);

    if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
      navigator.mediaDevices.getUserMedia(this.constraints).then(this.attachVideo.bind(this)).catch(this.handleError);
      this.isReady = true;
    } else {
      alert('Sorry, camera not available');
    }
  }

  attachVideo(stream) {
    this.renderer.setProperty(this.videoElement.nativeElement, 'srcObject', stream);
    this.renderer.listen(this.videoElement.nativeElement, 'play', (event) => {
      this.videoHeight = this.videoElement.nativeElement.videoHeight;
      this.videoWidth = this.videoElement.nativeElement.videoWidth;
    });
  }

  handleError(error) {
    console.log('Error: ', error);
    alert('Error: ' + error);
  }

  changeCamera(event: any) {
    this.constraints = {
      video: {
        facingMode: event.target.value,
        width: { ideal: 480 },
        height: { ideal: 480 }
      }
    };
  }

  changeLandmark(event: any) {
    this.showLandmark = !this.showLandmark;
  }

  async capture() {
    this.renderer.setProperty(this.canvas.nativeElement, 'width', this.videoWidth);
    this.renderer.setProperty(this.canvas.nativeElement, 'height', this.videoHeight);

    const faceDetectionOptions = new faceapi.SsdMobilenetv1Options({ minConfidence })
    const results = await faceapi.detectAllFaces(this.videoElement.nativeElement, faceDetectionOptions)
      .withFaceLandMarks()
    
    this.out = faceapi.createCanvasFromMedia(this.videoElement.nativeElement) as any
    faceapi.draw.drawDetections(this.out, results.map(res => res.detection));
    if (this.showLandmark) {
      faceapi.draw.drawFaceLandmarks(this.out, results);
    }
    this.canvas.nativeElement.getContext('2d').drawImage(this.out, 0, 0);
  }
}
