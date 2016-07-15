import { Component, OnInit } from '@angular/core';
import { HeroDetailComponent } from './hero-detail.component';
// import { HEROES } from './mock-heroes'
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

export class Hero {
    id: number;
    name: string;
};


@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent],


})
export class HeroesComponent implements OnInit {

    public heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService, private router: Router) {

    }

    ngOnInit() {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }



    onSelect(hero: Hero) { this.selectedHero = hero; }

    gotoDetail() {
        let link = ["detail/" + this.selectedHero.id];
        this.router.navigate(link);
    }

};


