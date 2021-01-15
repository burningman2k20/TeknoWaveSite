import { Component, OnInit } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { GenerateNews } from '../GenerateNews';
import { News } from '../News'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public genNews : GenerateNews = new GenerateNews();


  constructor() { }

  ngOnInit(): void {
    var _news : News = new News();
    _news = this.genNews.GenerateNews("Wind Energy Technician Jobs On the Rise","./assets/documents/windenergytechniciajobs.pdf");
    _news.newsText = ""
    _news.newsURLText = "Read the article here"
    _news.newsDate = "Jan 15, 2021 @ 10am";
    this.genNews.news.push(_news)

    _news = this.genNews.GenerateNews("TeKnoWave PILOT PROGRAM & GRADUATION ENJOYS UNPARALLEL SUCCESS","/ceremony");
     _news.newsURLText = "Click here to see our TeKnoSuccess!"
    _news.newsDate = "Jan 15, 2021 @ 11am";
    _news.isLink = true;
    this.genNews.news.push(_news)

    _news = this.genNews.GenerateNews("CJOH and Canada AM News on TeKnoWave First Graduation Gala","./assets/video/NVEExport.mpg");
     _news.newsURLText =  "Click here to download movie! (17mgs)!";
    _news.newsDate = "Jan 15, 2021 @ 11:15am";
    //_news.isLink = true;
    this.genNews.news.push(_news)

    _news = this.genNews.GenerateNews("TeKnoWave STORY, AS UNIQUE AS THE INITIATIVE ITSELF","./assets/video/graduation_gala_RO_640x480.mpg");
     _news.newsURLText ="Click here to download TeKnoWave movie! (26mgs)";
    _news.newsDate = "Jan 15, 2021 @ 11:30am";
    //_news.isLink = true;
    this.genNews.news.push(_news)
  }

  public beforeChange($event: NgbPanelChangeEvent) {

  }

}
