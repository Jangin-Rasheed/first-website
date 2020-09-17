import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ImagesService} from '../services/images.service';
import {DialogComponent} from '../dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public image: any[];

  constructor(private router: Router, public imagesService: ImagesService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.imagesService.getJSON().subscribe(image => {
      this.image = image;
      console.log(this.image);
    });
  }

  public navigateTo(navigationPath: string, id: number): void {
    this.router.navigate([navigationPath, id]);
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
