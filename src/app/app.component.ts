import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'DASHBOARD', url: '/folder/DASHBOARD', icon: 'assets/svgs/icon-1.svg' },
    { title: 'POS (POINT OF SALE)', url: '/folder/POS (POINT OF SALE)', icon: 'assets/svgs/icon-2.svg' },
    { title: 'USERS', url: '/folder/USERS', icon: 'assets/svgs/icon-3.svg' },
    { title: 'CODE ENGINE (DISCOUNT)', url: '/folder/CODE ENGINE (DISCOUNT)', icon: 'assets/svgs/icon-5.svg' },
    { title: 'SUB STORES', url: '/folder/SUB STORES', icon: 'assets/svgs/icon-6.svg' },
    { title: 'PURCHASE MODULE', url: '/folder/PURCHASE MODULE', icon: 'assets/svgs/icon-7.svg' },
    { title: 'GENERATE BAR2', url: '/folder/GENERATE BAR2', icon: 'assets/svgs/icon-8.svg' },
    { title: 'SALES MODULE', url: '/folder/SALES MODULE', icon: 'assets/svgs/icon-9.svg' },
    { title: 'ACCOUNTS', url: '/folder/ACCOUNTS', icon: 'assets/svgs/icon-10.svg' },
    { title: 'STOCK TRANSFER', url: '/folder/STOCK TRANSFER', icon: 'assets/svgs/icon-11.svg' },
    { title: 'CASH BOOK (IN / OUT)', url: '/folder/CASH BOOK (IN / OUT)', icon: 'assets/svgs/icon-12.svg' },
    { title: 'INVENTORY (PRODUCTS)', url: '/folder/INVENTORY (PRODUCTS)', icon: 'assets/svgs/icon-13.svg' },
    { title: 'REPORTS', url: '/folder/REPORTS', icon: 'assets/svgs/icon-14.svg' },
    { title: 'STORE LOCATOR', url: '/folder/STORE LOCATOR', icon: 'assets/svgs/icon-15.svg' },
  ];

  constructor() {}
}
