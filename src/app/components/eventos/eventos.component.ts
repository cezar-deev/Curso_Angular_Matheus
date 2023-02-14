import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  show: boolean = false;
  aparecer: boolean = false;

  showMessage(): void {
    this.show = !this.show; //toggle
   }

   showNome(): void {
    this.aparecer = !this.aparecer;
   }

}
