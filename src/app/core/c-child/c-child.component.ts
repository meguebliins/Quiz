import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuestionModel } from '../../models/question-model';
import { FormsModule } from '@angular/forms';
import { log } from 'console';


@Component({
  selector: 'qz-c-child',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './c-child.component.html',
  styleUrl: './c-child.component.css'
})
export class CChildComponent {
  isChecked1:boolean=false;
  isChecked2:boolean=false;
  isChecked3:boolean=false;
  resId:number=0;
  @Input() currentQuestion!:QuestionModel;
  @Output() currentScore: EventEmitter<number>=new EventEmitter();
  score: number=0;
  async onResponse(b:any){
    await this.onChange()
   
    
     this.currentScore.emit(this.score);
     this.resId=b;
     switch (b) {
      case 1:
        this.isChecked1=!this.isChecked1;
       
        break;
      case 2:
        this.isChecked2=!this.isChecked2;
        break;
      case 3:
        this.isChecked3=!this.isChecked3;
        break;
       
     
      default:
        break;
     }
  }
   onChange(){
   
    
    switch (this.resId) {
      case 1:
     
        this.isChecked1=!this.isChecked1;
        
        if(this.currentQuestion.responses[0].isCorrect===true){
          this.score+=this.currentQuestion.coeffitient;
        }
        break;
      case 2:
        this.isChecked2=!this.isChecked2;
        if(this.currentQuestion.responses[1].isCorrect===true){
          this.score+=this.currentQuestion.coeffitient;
        }
        break;
      case 3:
        this.isChecked3=!this.isChecked3;
        if(this.currentQuestion.responses[2].isCorrect===true){
          this.score+=this.currentQuestion.coeffitient;
        }
        break;
       
     
      default:
        break;
     }
   
    
  }
 

}
