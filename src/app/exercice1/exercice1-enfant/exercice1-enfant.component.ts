import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() compteur: number;
  @Output() public changementCompteur: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  incrementer() {
    this.compteur = this.compteur + 1;
    this.changementCompteur.emit({value: this.compteur});
  }

  decrementer() {
    this.compteur = this.compteur - 1;
    this.changementCompteur.emit({value: this.compteur});
  }
}
