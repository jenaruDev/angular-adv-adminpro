import { Component } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent {
  constructor(){}

  ngOnInit(): void {

    //this.getUsuarios();

    this.getUsuarios().then(usuarios=>console.log(usuarios));


    /* const promesas= new Promise((resolve,reject)=>{

      if(false){
        resolve("Saludos");
      }else{
        reject("Algo salió mal");
      }
    });

    promesas.then((mensaje)=>{
      console.log(mensaje);// recoje lo que devuelve resolve
    })
    .catch(error => console.log("Error en mi promesa",error));

    console.log("Fuera de On Init"); */
  }

  getUsuarios(){

    const promesa = new Promise(resolve=>{
      fetch('https://reqres.in/api/users')
    .then(resp=>resp.json())
    .then(body=>resolve(body.data))
    })

  return promesa;

  }

}
