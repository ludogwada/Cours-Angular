import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapService } from '../service/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  buttonText!: string;

  constructor( private faceSnapsService: FaceSnapService,
               private route: ActivatedRoute) {}

  ngOnInit() {
    this.buttonText = "I like"
    const faceSnapId = +this.route.snapshot.params['id']
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId)
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