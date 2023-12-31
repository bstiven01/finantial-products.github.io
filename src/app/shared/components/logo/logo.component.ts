import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  @Input()
  text: string | undefined;

  constructor() { }

  ngOnInit(): void {

    this.text = this.text?.slice(0, 2).toLocaleUpperCase();

  }

}
