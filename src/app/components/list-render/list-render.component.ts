import { ListService } from './../../services/list.service';
import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';



@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = [
    { name:'Turca', type:'Dog', age: 4},
    { name:'Tom', type:'Cat', age: 10},
    { name:'Frida', type:'Dog', age: 5},
    { name:'Bob', type:'House', age: 1},
  ];
  animalDetails = ''

  constructor (private listService: ListService) {}

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal (animal: Animal) {
    console.log ("Removendo animal...")
    this.animals = this.listService.remove(this.animals, animal)
  }

}
