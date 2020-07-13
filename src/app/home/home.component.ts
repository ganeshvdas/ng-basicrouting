import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
// import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount : number ;
  btnText : string = 'Add an item';
  goalText : string = 'My first goal';
  goals = [];

  constructor(private data : DataService) { }

  ngOnInit(): void {
    this.data.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;
    
  }

  addItem(){
    this.goals.push(this.goalText);
    this.goalText='';
    this.itemCount = this.goals.length;
    this.data.changeGoal(this.goals);
  }
}
