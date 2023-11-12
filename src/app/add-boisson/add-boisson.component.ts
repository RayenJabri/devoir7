import { Boisson } from './../model/boisson.model';
import { Component, OnInit } from '@angular/core';

import { BoissonService } from '../boisson.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Type } from '../model/type.model';
@Component({
  selector: 'app-add-boisson',
  templateUrl: './add-boisson.component.html',
  styleUrls: ['./add-boisson.component.css']
})
export class AddBoissonComponent implements OnInit{

  types! :Type[];
  newIdtype! : number;
  newType! : Type;
  
  newBoisson = new Boisson();
  constructor(private boissonService: BoissonService,
    private router :Router,
    private activatedRoute: ActivatedRoute,) { }
  ngOnInit(): void {
    this.types = this.boissonService.listeTypes();

  }
  addBoisson(){
    this.newType =
    this.boissonService.consulterTypes(this.newIdtype);
    this.newBoisson.type = this.newType;
    this.boissonService.ajouterBoisson(this.newBoisson);
    this.router.navigate(['boissons']);
    }
    
}
