import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-reservations-site',
  templateUrl: './reservations-site.component.html',
  styleUrls: ['./reservations-site.component.css']
})
export class ReservationsSiteComponent implements OnInit {

  public selected = 'Inbox';
  public items: Array<DrawerItem> = [
    { text: 'Inbox', icon: 'k-i-inbox', selected: true },
    { separator: true },
    { text: 'Notifications', icon: 'k-i-bell' },
    { text: 'Calendar', icon: 'k-i-calendar' },
    { separator: true },
    { text: 'Attachments', icon: 'k-i-hyperlink-email' },
    { text: 'Favourites', icon: 'k-i-star-outline' }
];
  
  constructor() { }

  ngOnInit() {
  }
  public onSelect(ev: DrawerSelectEvent): void {
    
}




}
