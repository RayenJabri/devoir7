import { Injectable } from '@angular/core';
import { Boisson } from './model/boisson.model';
import { Type } from './model/type.model';

@Injectable({
  providedIn: 'root'
})
export class BoissonService {
  types! :Type[]
  boissons : Boisson[];
 
  boisson! : Boisson;
  constructor() {
    this.types = [ {idType : 1, nomType : "boisson chaude"},
{idType : 2, nomType : "boisson froide"}];
    this.boissons = [
      {idBoisson: 1, nomBoisson : "Express", prixBoisson : 3.5, dateServire: new Date("11/11/2023"),type : {idType : 1, nomType : "boisson choude"}},
      {idBoisson: 2, nomBoisson : "jus d'orange", prixBoisson : 6.0, dateServire: new Date("11/11/2023"),type : {idType :2 , nomType : "boisson froide"}},
      {idBoisson: 3, nomBoisson : "cafee au lait", prixBoisson : 3.0, dateServire: new Date("11/11/2023"),type : {idType : 1, nomType : "boisson choude"}},
    ];
    }
    
    listeBoisson():Boisson[] {
      return this.boissons;
    }
    ajouterBoisson( boi: Boisson){
      this.boissons.push(boi);
     }
  supprimerBoisson( b: Boisson){
   
    const index = this.boissons.indexOf(b, 0);
    if (index > -1) {
    this.boissons.splice(index, 1);
    } 
  }
  consulterBoisson(id:number): Boisson{
    this.boisson = this.boissons.find(p => p.idBoisson == id)!;
    return this.boisson;
    }
    
trierBoisson(){
  this.boissons = this.boissons.sort((n1,n2) => {
  if (n1.idBoisson! > n2.idBoisson!) {
  return 1;
  }
  if (n1.idBoisson! < n2.idBoisson!) {
  return -1;
  }
  return 0;
  });
  }
  updateBoisson(b:Boisson)
    {
     this.supprimerBoisson(b);
      this.ajouterBoisson(b);
     this.trierBoisson();
}
listeTypes():Type[] {
  return this.types;
  }
  consulterTypes(id:number): Type{
    return this.types.find(t => t.idType == id)!;
    }
}
