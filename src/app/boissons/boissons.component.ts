import { BoissonService } from './../boisson.service';
import { Component, OnInit } from '@angular/core';
import { Boisson } from '../model/boisson.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-boissons',
  templateUrl: './boissons.component.html',
  styleUrls: ['./boissons.component.css']
})
export class BoissonsComponent implements OnInit {
  boissons : Boisson[];
  ngOnInit(): void {
    
  }
  
  constructor(private boissonService: BoissonService ,
    public authService: AuthService) {
    this.boissons = boissonService.listeBoisson();   
}
supprimerBoisson(b: Boisson)
{
  let conf = confirm("Etes-vous sûr ?");
 if (conf)

  this.boissonService.supprimerBoisson(b);
}
}
