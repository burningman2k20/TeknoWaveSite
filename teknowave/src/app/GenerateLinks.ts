import { Component } from '@angular/core';

class link {
  linkName : string = "";
  linkURL : string = "";
  isLink : boolean = false;

  link(linkName : string, linkURL : string, isLink : boolean) : void {
    this.linkName = linkName;
    this.linkURL = linkURL;
    this.isLink = isLink;
  }
}

export class GenerateLinks{

  public  links: Array<link> = new Array<link>();
  private count : number = -1;

  GenerateLinks(){
  }

  public resetCount() : void{
    this.count = -1;
  }

  public addLink( linkName:string,  linkURL:string, isLink : boolean) : void{
    let newLink : link = new link();
    newLink.linkName = linkName;
    newLink.linkURL = linkURL;
    newLink.isLink = isLink;
    this.links.push(newLink);
  }

  public getNextLink() : link {
      this.count++;
      return this.links[this.count];
  }
}
