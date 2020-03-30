import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /***
   * dake properties
   */
  newWho: string = 'Niekto Fasar';
  newWat: string = 'is cool rocker';

  @ViewChild('inputWho', {static: false}) inputWho: ElementRef;

  // characters: string[] = ['Finnthe Human', 'Jake the Dog'];
  characters: object[] = [
    { id: 1, cool: 1, who : 'Finnthe Human', wat: 'kokos daco'},
    { id: 2, cool: 22, who : 'Jake the Dog', wat: 'daco ine druhe'},
    { id: 3, cool: 66, who : 'Jake the Dog2', wat: 'daco ine druhe'}
  ];


  remove(dude){
    this.characters = this.characters.filter(dude1 => dude1 !== dude );
  }

  /**
   * Adding dude
   * @param event daco
   */
  addDude(){


    // event.preventDefault();

    // alert(this.newWho === '' || this.newWat === '');
    //
    if ( this.newWho === '' || this.newWat === '') {
      return;
    }

    this.characters.push({id: this.characters.length, who: this.newWho, wat: this.newWat, cool: Math.ceil(Math.random() * 100 )});

    // clean
    this.resetForm();
    this.inputWho.nativeElement.focus();

  }

  resetForm(){
    this.newWat = '';
    this.newWho = '';
  }

}
