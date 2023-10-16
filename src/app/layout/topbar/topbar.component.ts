import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  constructor(public route: ActivatedRoute) {}

  links: any = [
    {
      title: 'List Employee',
      id: 1,
    },
    {
      title: 'Add Employee',
      id: 2,
    },
    {
      title: 'Detail Employee',
      id: 3,
    },
  ];

  ngOnInit(): void {}
}
