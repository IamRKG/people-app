import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {

  details: any;
  subscription: Subscription;

  constructor(private dataSharingService:DataSharingService) {
      this.subscription = this.dataSharingService.getData().subscribe(details => {
        if (details) {
          this.details = details
        } else {
          this.details = [];
        }
      });
  }
  ngOnInit(): void {
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  

}
