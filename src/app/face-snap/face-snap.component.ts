import { Component, OnInit, Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  buttonText!: string;

  ngOnInit() {
    this.buttonText = "I like"
  }
  onSnap() {
    if(this.buttonText==="I like") {
      this.faceSnap.snaps++;
      this.buttonText = "I liked";
    } else {
      this.faceSnap.snaps--;
      this.buttonText = "I like";
    }
  }
}
