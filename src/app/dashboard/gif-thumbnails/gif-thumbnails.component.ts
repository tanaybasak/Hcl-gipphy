import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
declare var $: any;

@Component({
  selector: 'app-gif-thumbnails',
  templateUrl: './gif-thumbnails.component.html',
  styleUrls: ['./gif-thumbnails.component.css']
})
export class GifThumbnailsComponent implements OnInit, OnChanges {

  subscription: Subscription;
  searchTextChanged = new Subject<string>();
  previewSrc: string;
  staticImage :boolean = true;
  viewSrc: string;
  selectedIndex  : number;
  @Input() searchItemData: string;
  

  constructor(public ds: DashboardService) { }
  giphies  = [];





  ngOnChanges(changes: SimpleChanges) {
    this.searchTextChanged.next(this.searchItemData);
  }

  ngOnInit() {
   
    
    //get giffy data

    this.searchTextChanged.pipe(debounceTime(1000), distinctUntilChanged()).subscribe((text: string) => {
      this.ds.getGiffyData(text).subscribe((res: any) => {
         this.giphies =  [...res.data];

      })
    })



  }


  previewImage(id : string,i : number) {

      this.selectedIndex = i;

    var filteredData = this.giphies.filter((item) => {
      return item.id == id;
    })

    this.previewSrc = filteredData[0].images.preview_gif.url;
    this.viewSrc =  filteredData[0].images.original_mp4.mp4;

  }

  playVideo() {
     $("#myModal").modal();
    
  }



  


  modalClosed() {
    this.selectedIndex = -1;
  }


}



