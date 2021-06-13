import { AfterViewInit, Component, OnInit } from '@angular/core';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css', '../../../assets/styles/progress-circle.css']
})
export class AboutmeComponent implements OnInit, AfterViewInit {

  // Icons

  faGraduationCap = faGraduationCap;
  faBriefcase = faBriefcase;

  // Animated div booleans

  showFirstDiv = false;
  showSecondDiv = false;
  showThirdDiv = false;
  showFourthDiv = false;
  showFifthDiv = false;


  constructor() { }

  ngOnInit(): void {
    
  }

  // The animation will not start until the page is fully loaded 

  ngAfterViewInit() {
    document.getElementById("firstdiv").classList.add("disappear");
    document.getElementById("seconddiv").classList.add("disappear");
    document.getElementById("thirdddiv").classList.add("disappear");
    document.getElementById("fourthdiv").classList.add("disappear");
    document.getElementById("fifthdiv").classList.add("disappear");
    setTimeout(() => {
      document.getElementById("firstdiv").classList.remove("disappear");
      document.getElementById("seconddiv").classList.remove("disappear");
      document.getElementById("thirdddiv").classList.remove("disappear");
      document.getElementById("fourthdiv").classList.remove("disappear");
      document.getElementById("fifthdiv").classList.remove("disappear");
    }, 1500)
  }

}
