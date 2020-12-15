import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RouteNavigateService {

  routeSubject = new Subject()

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  navigateTo(routePath){
    this.router.navigate([routePath], {relativeTo: this.activatedRoute});

    this.routeSubject.next(routePath);
  }
}
