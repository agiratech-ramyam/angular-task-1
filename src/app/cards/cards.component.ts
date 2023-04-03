// import { Component } from '@angular/core';
// import { SearchFilterPipe } from '../search-filter.pipe';
// import { Observable } from 'rxjs';
import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
 // providers: [SearchFilterPipe]
})
export class CardsComponent {


   term!: string;
  filterData = [
    {
      firstName: 'Celestine',
      description: 'Lorem ramya Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    },
    {
      firstName: 'Johan',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    },
    {
      firstName: 'Lizzie',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    },
    {
      firstName: 'Gavin',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    },
    {
      firstName: 'John',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    },
    {
      firstName: 'Ramya',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    },
    {
      firstName: 'Gavinnn',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    },
  ]
  public pageSlice = this.filterData.slice(0,3);
  OnPageChange(event: PageEvent){
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    let  endIndex = startIndex + event.pageSize;
    if(endIndex > this.filterData.length) {
      endIndex = this.filterData.length;
    }
    this.pageSlice = this.filterData.slice(startIndex,endIndex);
  }
}
