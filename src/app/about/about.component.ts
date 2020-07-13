import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals:any = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private data : DataService) { 
    this.activatedRoute.params.subscribe(res => console.log(res.id));
  }

  ngOnInit(): void {
    this.data.goal.subscribe(res => this.goals = res);
  }

  sendMeHome(){
    this.router.navigate[''];
  }

}
