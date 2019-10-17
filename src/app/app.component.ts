import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  
  posts = [
    {
      title: 'Mon premier post',
      content: 'le contenue du mon premier post des test',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon deuxieme post',
      content: 'le contenue du mon deuxieme post des test',
      loveIts: 4,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'le contenue du troisieme post des test',
      loveIts: -2,
      created_at: new Date()
    }
  ];

  constructor(){

  }

  
}
