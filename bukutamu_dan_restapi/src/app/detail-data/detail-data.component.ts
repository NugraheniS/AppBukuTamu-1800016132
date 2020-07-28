import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-detail-data',
  templateUrl: './detail-data.component.html',
  styleUrls: ['./detail-data.component.css']
})
export class DetailDataComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<DetailDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data :any) { }

  ngOnInit(): void {
  }

}
