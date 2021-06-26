import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  links: Record<string,any>[] = [
    {
      path:'/product',
      label:'Popular'
    },
    {
      path:'flash-sales',
      label:'Flash Sales'
    },
    { path:'/hygiene',label:'Hygiene'},
    { path:'/baby-care',label:'Baby Care'}
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  showInfo(link: string){
    console.log(link)
  }
}
