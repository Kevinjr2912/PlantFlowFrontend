import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-parcel-page',
  templateUrl: './parcel-page.component.html',
  styleUrl: './parcel-page.component.css'
})
export class ParcelPageComponent implements OnInit {

  userId: number | null = null;
  username: string | null = null;

  ngOnInit(): void {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      this.userId = user.id;
      this.username = user.username;
    }
  }

}
