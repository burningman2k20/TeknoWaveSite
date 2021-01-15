import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-graduation',
  templateUrl: './graduation.component.html',
  styleUrls: ['./graduation.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class GraduationComponent implements OnInit {

  public showNavigationArrows = true;
  public showNavigationIndicators = true;
  public images : string[] = ["./assets/images/2004Graduation/AfterGroup_1.jpg"];

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    config.interval = 0;
   }

  ngOnInit(): void {
    this.images.push("./assets/images/2004Graduation/Andrew.jpg");
    this.images.push("./assets/images/2004Graduation/AngelaStudentReflections.jpg");
    this.images.push("./assets/images/2004Graduation/GradsStanding.jpg");
    this.images.push("./assets/images/2004Graduation/Angela.jpg");
    this.images.push("./assets/images/2004Graduation/AnnaDan.jpg");

    this.images.push("./assets/images/2004Graduation/AnnaGREATrep.jpg");
    this.images.push("./assets/images/2004Graduation/TKWBoard.jpg");
    this.images.push("./assets/images/2004Graduation/AnnaPresentCardinal.jpg");
    this.images.push("./assets/images/2004Graduation/Chris.jpg");
    this.images.push("./assets/images/2004Graduation/Award.jpg");

    this.images.push("./assets/images/2004Graduation/ChrisJTNScholarship.jpg");
    this.images.push("./assets/images/2004Graduation/CardinalTKWPoster.jpg");
    this.images.push("./assets/images/2004Graduation/AnnaRick.jpg");
    this.images.push("./assets/images/2004Graduation/AWPIRickHansen.jpg");
    this.images.push("./assets/images/2004Graduation/HallwithPP.jpg");

    this.images.push("./assets/images/2004Graduation/GradsSitting.jpg");
    this.images.push("./assets/images/2004Graduation/GradsAll3.jpg");
    this.images.push("./assets/images/2004Graduation/GradsMingling.jpg");
    this.images.push("./assets/images/2004Graduation/DanBrant.jpg");
    this.images.push("./assets/images/2004Graduation/GrandfatherCommanda.jpg");

    this.images.push("./assets/images/2004Graduation/GREATTinaPhil.jpg");
    this.images.push("./assets/images/2004Graduation/IndustryCanada.jpg");
    this.images.push("./assets/images/2004Graduation/IceSculpture.jpg");
    this.images.push("./assets/images/2004Graduation/CliffDrum.jpg");
    this.images.push("./assets/images/2004Graduation/Jason.jpg");

    this.images.push("./assets/images/2004Graduation/JTNScholarshipWinners.jpg");
    this.images.push("./assets/images/2004Graduation/JoeAnnaTKWPoster.jpg");
    this.images.push("./assets/images/2004Graduation/TinaPhil.jpg");
    this.images.push("./assets/images/2004Graduation/JoeNorton.jpg");
    this.images.push("./assets/images/2004Graduation/Nicolas.jpg");

    this.images.push("./assets/images/2004Graduation/NicWithFamily.jpg");
    this.images.push("./assets/images/2004Graduation/Nora.jpg");
    this.images.push("./assets/images/2004Graduation/PhilStudentReflections.jpg");
    this.images.push("./assets/images/2004Graduation/Phil.jpg");
    this.images.push("./assets/images/2004Graduation/Tina.jpg");

    this.images.push("./assets/images/2004Graduation/WillisTable.jpg");
    this.images.push("./assets/images/2004Graduation/RimaAnna.jpg");
    this.images.push("./assets/images/2004Graduation/RimaAnnaFlowers.jpg");
    this.images.push("./assets/images/2004Graduation/RimaAnna3.jpg");
    this.images.push("./assets/images/2004Graduation/TKWBoardPresentRickHansen.jpg");

    this.images.push("./assets/images/2004Graduation/PMLetter.jpg");
    this.images.push("./assets/images/2004Graduation/GradswithPP.jpg");
  }
}
