import { Component, OnInit, Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapService } from '../service/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapService) {}

  ngOnInit() {
    this.buttonText = "I like"
  }
  onSnap() {
    if(this.buttonText==="I like") {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap')
      this.buttonText = "I liked";
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = "I like";
    }
  }
}
