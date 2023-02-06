import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';


import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';

export interface History {
  name?: string;
  id?: number
}

const yeah: History[] = [{
  name: "edwin",
  id: 2
}]

@Component({
  selector: 'app-campaign-summary',
  templateUrl: './campaign-summary.component.html',
  styleUrls: ['./campaign-summary.component.scss']
})



export class CampaignSummaryComponent implements OnInit, AfterViewInit {
  
  
  constructor(private http: HttpClient){}
  
  ngOnInit(): void {
     this.getCampaignDetails();
    console.log("my name is ritika")
  }

  dataSource = new MatTableDataSource();

  displayedColumns: string[] = [
    "name",
    "id",
    "url",
    "upload-sheet",
    "res-sheet",
    "date",
    "refresh"
  ];
  name: any;


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() { 
    this.dataSource.paginator=this.paginator;
  }

  getCampaignDetails(){
    this.http.get("http://localhost:6001/bot/campaign-details").subscribe((response:any)=>{
    if(response){
    const campaignHistory = response?response :[];
    this.dataSource = new MatTableDataSource(campaignHistory);
    console.log("hi")
    }
    this.dataSource.paginator=this.paginator;
    })
  }

  downloadFile(){
    console.log("downloading");
    this.http.get("http://localhost:6001/bot/download", {responseType: 'text'}).subscribe((response:any)=>{
      if(response){
        console.log(response);
      }
      else{
        console.log("no");
      }
    })
  }

  refresh(data:any){
    console.log('12313',data)
    console.log("Refereshing the responses");
    let params = new URLSearchParams();
    params.append('name',data);
    this.http.get(`http://localhost:6001/bot/campaignRefresh`,{params:{ name: data},responseType: 'text'}).subscribe((response:any)=>{
      if(response){
        console.log(response);
      }
      else{
        console.log("no");
      }
    })
  }






}





