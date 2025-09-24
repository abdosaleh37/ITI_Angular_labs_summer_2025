import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { HeroSection } from "../hero-section/hero-section";
import { Footer } from "../footer/footer";
import { About } from "../about/about";
import { Skills } from "../skills/skills";
import { Portfolio } from "../portfolio/portfolio";

@Component({
  selector: 'app-landing-page',
  imports: [Navbar, HeroSection, Footer, About, Skills, Portfolio],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {

}
