

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Boisson } from '../model/boisson.model';
import { BoissonService } from '../boisson.service';
import { Type } from '../model/type.model';
@Component({
  selector: 'app-update-boisson',
  templateUrl: './update-boisson.component.html',
  styleUrls: ['./update-boisson.component.css']
})
export class UpdateBoissonComponent implements OnInit {
  currentBoisson = new Boisson();
  types! : Type[];
  updatedtyid! : number;
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
  private boissonService: BoissonService) { }
  ngOnInit(): void {
    this.types = this.boissonService.listeTypes();
this.currentBoisson =
this.boissonService.consulterBoisson(this.activatedRoute.snapshot.params['id']);
this.updatedtyid!=this.currentBoisson.type?.idType;

  
  } 
  updateBoisson()
  { 
    this.currentBoisson.type=this.boissonService.consulterTypes(this.updatedtyid);
  this.boissonService.updateBoisson(this.currentBoisson);
  this.router.navigate(['boissons']);
  }

}
 