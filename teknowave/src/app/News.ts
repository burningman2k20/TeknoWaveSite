export class News {
  newsName : string = "";
  newsDate : string = "";
  newsText : string = "";
  newsURL : string = "";
  newsURLText : string = ""
  isLink : boolean = false;

  News(newsName : string, newsURL : string, isLink : boolean = false) : void {
    this.newsName = newsName;
    this.newsURL = newsURL;
    this.isLink = isLink;

  }
}
