import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TambahDataComponent } from '../tambah-data/tambah-data.component';
import { ApiService } from '../api.service';
import { DetailDataComponent } from '../detail-data/detail-data.component';
import { DialogKonfirmasiComponent } from '../dialog-konfirmasi/dialog-konfirmasi.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public api: ApiService
    ) {this.getData() 
    }

    
  user:any=[]; 
  getData() {
    this.api.baca().subscribe(res => {
      this.user = res
    })
  }

  ngOnInit(): void {
  }
  buatData() {
    const dialogRef = this.dialog.open(TambahDataComponent, {
      width: '450px',
      data:null
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getData();
    });
  }
  detailData(item)
	  {
	    const dialogRef = this.dialog.open(DetailDataComponent, {
        width: '450px', 
        data:item      
	    });	
	    dialogRef.afterClosed().subscribe(result => {
	      console.log('The dialog was closed');     
	    });
    }

    editData(data)
    {
      const dialogRef = this.dialog.open(TambahDataComponent, {
        width: '450px',
        data:data
      });
      dialogRef.afterClosed().subscribe(result => {
        this.getData();    
      });
    }
    
    konfirmasiHapus(id)
 {
		const dialogRef = this.dialog.open(DialogKonfirmasiComponent, {
			width: '450px',      
		});
		dialogRef.afterClosed().subscribe(result => {
			if(result == true)
			{
        console.log('Menghapus data');
        this.api.hapus(id).subscribe(res=>{
          this.getData();
      })
			}
		});
 }
}
