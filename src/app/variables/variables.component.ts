import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit {

  a: string = '';
  secret_msg = "There is no secret here!!";
  sponge1 = 'https://variety.com/wp-content/uploads/2019/06/spongebob-battle-remaster.png';
  sponge2 = 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w1920-q80/marquee/1037578/sbsp_sp_hero_landscape.jpg';


  constructor() { }

  ngOnInit(): void {
  }

  fun1() {
    this.a = "Leon S Kennedy";
    const b = 100;
  }

  getNumber(): number {
    return 754;
  }

  changeImg() {

    // alert('Button was clicked!!');
    this.sponge1 = 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2009/7/24/1248436779217/SpongeBob-SquarePants-10t-001.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=bbf7d527bcff3b90026362120b35cbb9';
  }

  

}
