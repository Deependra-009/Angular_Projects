import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  step=1;
  title = 'stepper';

  changeStep(newstep:number){
    if(newstep<1) return;
    else if(newstep>4) return;
    else{
      this.step=newstep;
    }
  }
}
