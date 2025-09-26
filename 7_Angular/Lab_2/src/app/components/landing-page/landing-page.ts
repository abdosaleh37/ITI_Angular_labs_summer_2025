import { Component } from '@angular/core';
import { TodoWrapper } from "../todo-wrapper/todo-wrapper";


@Component({
  selector: 'app-landing-page',
  imports: [TodoWrapper],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {

}
