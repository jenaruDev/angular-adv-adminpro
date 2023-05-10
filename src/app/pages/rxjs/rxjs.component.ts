import { Component, OnDestroy } from '@angular/core';
import { Observable,interval, retry, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription = new Subscription;

  constructor(){


  /* this.retornaObservable().pipe(
    retry()
  ).subscribe(
    {
      next: (valor) => console.log("Subs:",valor),
      error: (err) => console.error("Error:", err),
      complete: () => console.info('Completado')
  }
  ); */

  this.intervalSubs = this.retornaIntervalo()
  .subscribe({
    next: (valor) => console.log("Subs:",valor),
  })

  }
  ngOnDestroy(): void {
  this.intervalSubs.unsubscribe();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


  }


  retornaIntervalo():Observable<number>{

    return interval(100).pipe(
      //take(10),
      map( valor =>  valor+1),
      filter( valor => valor % 2 === 0),

    );


  }
  retornaObservable(){

    let i =-1;

    const obs$ = new Observable<number>(observer => {


      const intervalo = setInterval(()=>{

        i++;
        observer.next(i);

        if(i===4){
          clearInterval(intervalo);
          observer.complete();
        }
        if(i===2){
          observer.error("Error");

        }

      },1000)
    });
    return obs$;
  }
}
