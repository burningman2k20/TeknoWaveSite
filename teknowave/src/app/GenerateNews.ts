import { Component } from '@angular/core';
import { News } from './News';

export class GenerateNews {

public  news: Array<News> = new Array<News>();

GenerateNews(name : string, url : string) : News {
  var news : News = new News();
  news.newsName = name;
  news.newsURL = url;
  return news;
}
}
