import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items!: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Projets',
          items: [
            {label: 'Liste', icon: 'pi pi-fw pi-list'},
            {label: 'Ajouter ',icon: 'pi pi-fw pi-plus' },
               ]
      },
      {
          label: 'Clients',
          items: [
              {label: 'Liste', icon: 'pi pi-fw pi-list'},
              {label: 'Ajouter', icon: 'pi pi-fw pi-plus'}
          ]
      },
      {
        label: 'Status',
        items: [
            {label: 'Liste', icon: 'pi pi-fw pi-list'},
            {label: 'Ajouter', icon: 'pi pi-fw pi-plus'}
        ]
    },
    {
      label: 'Collaborateurs',
      items: [
          {label: 'Liste', icon: 'pi pi-fw pi-list'},
          {label: 'Ajouter', icon: 'pi pi-fw pi-plus'}
      ]
  }
  ];


  }

}
