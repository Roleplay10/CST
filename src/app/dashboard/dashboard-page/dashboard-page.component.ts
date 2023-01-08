import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  gameList = [
    {
      title: 'Dwarf Fortress',
      image:
        'https://cdn.cloudflare.steamstatic.com/steam/apps/975370/header.jpg?t=1670338868',
      description:
        "The deepest, most intricate simulation of a world that's ever been created.",
    },
    {
      title: 'Counter-Strike: Global Offensive',
      image:
        'https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1668125812',
      description:
        'Expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago',
    },
    {
      title: 'God of War Ragnarök',
      image:
        'https://image.api.playstation.com/vulcan/ap/rnd/202207/1117/4uH3OH4dQtHMe2gmdFuth02u.jpg?w=620',
      description:
        'Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToGamePage(gameEventData: any, gameListData: any) {
    console.log(gameEventData);
    console.log(gameListData);
    this.router.navigateByUrl('/game-page');
  }
}
