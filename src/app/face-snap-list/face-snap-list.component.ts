import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap [];
  constructor() { }

  ngOnInit(): void {
    this.faceSnaps = [
      {
        title: "Lion",
        description: "Le roi de la jungle",
        imgUrl: "https://cdn.pixabay.com/photo/2016/01/02/16/53/lion-1118467__340.jpg",
        createdDate: new Date(),
        snaps: 50,
        location: "zoo"
      },
      {
        title: "Penguin",
        description: "Big bird",
        imgUrl: "https://media.istockphoto.com/photos/emperors-picture-id147290529?b=1&k=20&m=147290529&s=170667a&w=0&h=TQbUkmXroNmyqz75gwvU0LxpXvguP1eekT2vUDItTIU=",
        createdDate: new Date(),
        snaps: 10,
        location: "Pack ice"
      },
      {
        title: "Orca",
        description: "Big fish",
        imgUrl: "https://media.istockphoto.com/photos/jumping-orca-in-prince-william-sound-alaska-picture-id1346460633?b=1&k=20&m=1346460633&s=170667a&w=0&h=pDB7O7XzxaThkmwONy1riE-lbP2Zrh_Q4WufZ6i1c78=",
        createdDate: new Date(),
        snaps: 20,
      }
      ]
  }

}
