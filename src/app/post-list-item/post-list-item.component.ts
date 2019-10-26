import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle : string;
  @Input() postContent : string;
  @Input() postLoveIts : number;
  @Input() postDate : number;
  constructor() { }

  addLoveIts(){
    this.postLoveIts = this.postLoveIts+1;
    //console.log(this.postLoveIts);
  }
  removeLoveIts(){
    this.postLoveIts = this.postLoveIts-1;
    //console.log(this.postLoveIts);
  }
  changeClass(){
    if(this.postLoveIts > 0){
      return "list-group-item-success";
    }
    else if(this.postLoveIts < 0){
      return "list-group-item-danger";
    }
    else{
      return "list-group-item";
    }
  }

  ngOnInit() {
  }

}
