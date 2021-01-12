import { Component, OnInit } from '@angular/core';
import { AboutComponent } from './about/about.component';
import {NgxTypedJsComponent, NgxTypedJsModule} from 'ngx-typed-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'teknowave';

    constructor() { }

    ngOnInit(): void {

    }


}
