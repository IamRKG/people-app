import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { PeoplesService } from 'src/app/services/peoples.service';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit {
  peoples:any;
  peopleDetails:any;

  constructor(private dataSharingService:DataSharingService,private peoplesService:PeoplesService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.peoplesService.getPeoples().subscribe((data)=>{
      this.peoples = data
    })
  }

  getItem(url: string) {
    this.peoplesService.getPeopleDetails(url).subscribe((data)=>{
      this.peopleDetails = data
      if(this.peopleDetails !== undefined){
        
        this.dataSharingService.sendData(this.peopleDetails)
        this.router.navigate(['details'],{ relativeTo: this.route })
      }
    })
  }
}
