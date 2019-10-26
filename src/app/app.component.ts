import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Blog';
  posts = [
    {
      title: "Mon premier post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec lectus nisi. Aliquam nisl ipsum, fermentum vel tortor laoreet, sollicitudin volutpat ipsum. Cras semper condimentum posuere. Proin laoreet rutrum erat.",
      loveIts: 0,
      created_at: Date()
    },
    {
      title: "Mon deuxième post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec lectus nisi. Aliquam nisl ipsum, fermentum vel tortor laoreet, sollicitudin volutpat ipsum. Cras semper condimentum posuere. Proin laoreet rutrum erat.",
      loveIts: 0,
      created_at: Date()
    },
    {
      title: "Mon dernier post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec lectus nisi. Aliquam nisl ipsum, fermentum vel tortor laoreet, sollicitudin volutpat ipsum. Cras semper condimentum posuere. Proin laoreet rutrum erat.",
      loveIts: 0,
      created_at: Date()
    }
  ]
}
