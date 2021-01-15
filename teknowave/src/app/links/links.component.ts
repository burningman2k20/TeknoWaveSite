import { Component, OnInit } from '@angular/core';
import { GenerateLinks } from '../GenerateLinks';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  public genLinks : GenerateLinks = new GenerateLinks();

  show : boolean = false;

  constructor() {
    // School Link generation
    this.genLinks.addLink("Education & Training (See other links throughout site)","", false);
    this.genLinks.addLink("Carleton University","http://www.carleton.ca/", true);
    this.genLinks.addLink("First Nations University","http://www.firstnationsuniversity.ca/",true);
    this.genLinks.addLink("Queens University","http://www.queensu.ca/", true);
    this.genLinks.addLink("University of Ottawa","http://www.ottawa.edu/", true);
    this.genLinks.addLink("University of Winnipeg","http://www.uwinnipeg.ca/", true);
    this.genLinks.addLink("Willis College of Business & Technology","http://www.williscollege.com/", true);
    // Aboriginal link generation
    this.genLinks.addLink("Aboriginal","", false);
    this.genLinks.addLink("Aboriginal Canada Portal","http://www.aboriginalcanada.gc.ca/abdt/interface/interface2.nsf/engdocBasic/0.html", true);
    this.genLinks.addLink("Aboriginal Human Resource Development Council of Canada","http://www.ahrdcc.com/", true);
    this.genLinks.addLink("Assembly of First Nations", "http://www.afn.ca/", true);
    this.genLinks.addLink("Congress of Aboriginal Peoples", "http://www.abo-peoples.org/en/", true);
    this.genLinks.addLink( "G.R.E.A.T", "http://www.greatsn.com/", true);
    this.genLinks.addLink( "Metis National Council", "http://www.metisnation.ca/", true);
    this.genLinks.addLink("National Aboriginal Achievement Foundation", "http://www.naaf.ca/", true);
    this.genLinks.addLink("National Association of Friendship Centres", "https://nafc.ca/", true);
    this.genLinks.addLink("Native Women's Association of Canada", "https://www.nwac.ca/", true);
    this.genLinks.addLink("Ogwehoweh Skills and Trades Training Centre", "http://www.osttc.com/", true);
    this.genLinks.addLink("Media", "", false);
    this.genLinks.addLink("Aboriginal Peoples Television Network", "http://www.aptn.ca/", true);
    this.genLinks.addLink("Alberta Native News", "https://www.albertanativenews.com/", true);
    this.genLinks.addLink("CTV Ottawa (Formally CJOH)", "https://ottawa.ctvnews.ca/", true);
    this.genLinks.addLink("Eastern Door", "http://www.easterndoor.com/", true);
    this.genLinks.addLink("First Perspective News", "https://www.commonword.ca/ResourceView/6/16608", true);
    this.genLinks.addLink("The Hill Times", "http://www.hilltimes.com/", true);
    this.genLinks.addLink("Ottawa Citizen", "http://www.ottawacitizen.com/", true);
    this.genLinks.addLink("SAY Magazine", "http://www.saymag.com/", true);
    this.genLinks.addLink("Wawatay News", "https://wawataynews.ca/", true);
    this.genLinks.addLink("Wind Speaker", "http://www.windspeaker.com/", true);

    this.genLinks.addLink("Technology Firms", "", false);
    this.genLinks.addLink("Cisco - Leader in Telecommunications Equipment", "http://cisco.com/", true);
    this.genLinks.addLink("Donna Cona Inc.", "http://donnacona.com/", true);
    this.genLinks.addLink("IBM", "http://www.ibm.com", true);
    this.genLinks.addLink("Adobe (Including former Macromedia Software)", "http://www.adobe.com", true);
    this.genLinks.addLink("Microsoft", "http://www.microsoft.com", true);
    this.genLinks.addLink("Mohawk Internet Technologies", "https://tewa.ca/mohawk-internet-technoligies/", true);
    this.genLinks.addLink("Oracle (Distributers of Java, mySQL among others)", "http://www.oracle.com/", true);
    this.genLinks.addLink("Rouge Data Corp.", "http://www.roguedata.com/", true);

    this.genLinks.addLink("Useful Job Links", "", false);
    this.genLinks.addLink("Employment and Social Development Canada", "https://www.canada.ca/en/employment-social-development.html", true);
    this.genLinks.addLink("JobBank", "https://www.jobbank.gc.ca/", true);
    this.genLinks.addLink("Public Service Commission", "https://www.canada.ca/en/public-service-commission.html", true);
    this.genLinks.addLink("Monster Job Bank", "https://www.monster.ca/", true);
    this.genLinks.addLink("Workopolis Job Bank", "https://www.workopolis.com/en/", true);

    this.genLinks.addLink("Communities & Organizations", "", false);
    this.genLinks.addLink("Volunteer Canada", "https://www.volunteer.ca/", true);
    this.genLinks.addLink("Earth Restoration Corps.", "https://www.earthcorps.org/", true);
    //this.genLinks.addLink("Media", "", true);
  }

  ngOnInit(): void {
  }
}
