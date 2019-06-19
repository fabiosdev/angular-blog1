import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {

  dateCreation = new Date();

  posts = [
    {
      image: 'assets/img/ferrari.jpg',
      title: '1. Ferrari 250 GTO (1962 – 1964)',
      content: 'Enfin, à la première place de ce Top 3 des plus belles voitures de collection : La Ferrari 250 GTO. Produit à seulement 36 exemplaires entre 1962 et 1964, ce modèle a rencontré un succès sportif incroyable durant ces années grâce à son fameux moteur V12 de 3L. En plus de cela, son esthétique est tout simplement magnifique avec des courbes et un style unique évoquant à la fois puissance et finesse.',
      loveIts: '0',
      created_at: this.dateCreation
    },
    {
      image: 'assets/img/lamborghini.jpg',
      title: '2. Lamborghini Miura (1966 – 1973)',
      content :'À la deuxième position on retrouve la célèbre Lamborghini Miura. La marque concurrente historique de Ferrari nous livra entre 1966 et 1973 une des plus belles sportives de tous les temps. Les courbes et les lignes semblent épouser la forme de la voiture, et surtout rien ne semble avoir vieilli, même aujourd’hui cette Miura est d’une beauté sensationnelle.',
      loveIts: '0',
      created_at: this.dateCreation
    },
    {
      image: 'assets/img/bugatti.jpg',
      title: '3. Bugatti Type 57 (1934 – 1939)',
      content :'Nous avons décidé d’accorder la 3ème place du podium à la mythique Bugatti Type 57, ici en version SC Altantic. Ce modèle ne plaira pas à tout le monde mais nous il nous plaît beaucoup ! Que dire ? L’image parle pour elle-même, le design est tout simplement révolutionnaire tout comme l’étaient en plus les performances à l’époque. Il s’agit d’une voiture vintage particulièrement prestigieuse et élégante au style totalement avant-gardiste au niveau des formes et du concept. Merci à Jean Bugatti pour cette réalisation hors normes, un véritable bijou en avance sur son temps.',
      loveIts: '0',
      created_at: this.dateCreation
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
