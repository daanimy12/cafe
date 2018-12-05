import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','./resume.css','./resume.min.css']
})
export class HeaderComponent implements OnInit {
 
  constructor( private router:Router,private route:ActivatedRoute) { }
  
  ngOnInit() {     
  }
onAbout(){
  this.router.navigate(['about'],{relativeTo:this.route})
}

}
