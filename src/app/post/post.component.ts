import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postImage: string;
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreation: Date;

  public postloveIts : number = 0;

  constructor() { }

  ngOnInit() {
  }
  getBackground(){
    return this.postImage;
  }
  likeThis(){
    this.postloveIts += 1;
    alert('Votre avis à été pris en compte. Cet article à été liké ' + this.postloveIts + ' fois');
    console.log('J\'aime');
  }
  dontLikethis(){
    this.postloveIts -= 1;
    alert('Votre avis à été pris en compte. Cet article à été liké ' + this.postloveIts + ' fois');
    console.log('J\'aime pas');
  }
  removeThis(){
    alert('Ce bouton sera fonctionnel dans le chapitre suivant')
  }
  addNew(){
    alert('Un peu de patience bon sang :) ce bouton sera (également) fonctionnel dans le chapitre suivant')
  }

}
