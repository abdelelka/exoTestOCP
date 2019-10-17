import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() title: string;
  @Input()  content: string;
  @Input()  loveIts: number;
  @Input()  created_at: Date;
  


  constructor() { 
      }

  ngOnInit() {
  }

  loveIt(){
    this.loveIts += 1;
    console.log(this.loveIts);

  }

  DontLoveIt(){
    this.loveIts -= 1;    

  }
  getColor() {
    if(this.loveIts > 0) {
      return 'green';
    } else if(this.loveIts < 0) {
      return 'red';
    } return 'black';


}
}
