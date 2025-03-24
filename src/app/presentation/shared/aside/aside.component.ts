import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent implements OnInit {

  
  parcels: { id: number; name: string }[] = [];
  showUserOptions = false;
  showParcels = false;


  ngOnInit() {
    
    this.parcels = [
      { id: 1, name: 'Parcela 1' },
      { id: 2, name: 'Parcela 2' },
      { id: 3, name: 'Parcela 3' },
      { id: 4, name: 'Parcela 3' },
      { id: 5, name: 'Parcela 3' },
      { id: 6, name: 'Parcela 2' },
    ];
  }

  toggleUserOptions() {
    this.showUserOptions = !this.showUserOptions;
  }

  toggleParcels() {
    this.showParcels = !this.showParcels;
  }

}
