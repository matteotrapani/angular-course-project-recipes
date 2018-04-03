import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() pageSelected = new EventEmitter<string>();
  selectedPage: string = 'recipes';

  constructor() { }

  ngOnInit() {
  }

  onPageSelected(pageName: string) {
    this.selectedPage = pageName;
    this.pageSelected.emit(pageName);
  }

  checkPageSelected(pageName: string) {
    return this.selectedPage === pageName;
  }

}
