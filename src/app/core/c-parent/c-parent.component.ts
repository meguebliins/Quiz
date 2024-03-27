import { Component } from '@angular/core';
import { QuestionModel } from '../../models/question-model';
import { CChildComponent } from '../c-child/c-child.component';

@Component({
  selector: 'qz-c-parent',
  standalone: true,
  imports: [CChildComponent],
  templateUrl: './c-parent.component.html',
  styleUrl: './c-parent.component.css',
})
export class CParentComponent {

  // question en cours
  question!: QuestionModel;

  // numero de question en cours
  numQ: number = 1;
  // total de questions par categorie ou examen
  totalQ: number = 1;
  // score obtenu
  score: number = 0;
  // coeffitient score
  scoreTotal: number = 0;
  questions: Array<QuestionModel> = [
    {
      num: 1,
      category: 1,
      question: "C'est quoi Angular ?",
      coeffitient: 10,
      responses: [
        {
          id: 1,
          isCorrect: true,
          response: 'FrameWork',
          question_id: 1,
        },
        {
          id: 2,
          isCorrect: false,
          response: 'Library',
          question_id: 1,
        },
        {
          id: 3,
          isCorrect: false,
          response: 'Site Web',
          question_id: 1,
        },
      ],
    },
    {
      num: 2,
      category: 2,
      question: 'Observable ?',
      coeffitient: 10,
      responses: [
        {
          id: 4,
          isCorrect: false,
          response: 'injection',
          question_id: 2,
        },
        {
          id: 5,
          isCorrect: true,
          response: 'flux de donnes ',
          question_id: 2,
        },
        {
          id: 6,
          isCorrect: false,
          response: 'singleton',
          question_id: 2,
        },
      ],
    },
    
    {
      num: 3,
      category: 2,
      question: 'RXJS ?',
      coeffitient: 10,
      responses: [
        {
          id: 4,
          isCorrect: false,
          response: 'injection',
          question_id: 2,
        },
        {
          id: 5,
          isCorrect: true,
          response: 'flux de donnes ',
          question_id: 2,
        },
        {
          id: 6,
          isCorrect: false,
          response: 'singleton',
          question_id: 2,
        },
      ],
    },
  ];
  ngOnInit() {
    for (let index = 0; index < this.questions.length; index++) {
      this.scoreTotal += this.questions[index].coeffitient;
    }

    this.totalQ = this.questions.length;
    this.question = this.questions[0];
    console.log(this.question);
  }
  nextQuestion() {
    if(this.numQ<=this.totalQ-1){
    this.question=this.questions[this.numQ];
    this.numQ++;
    }
  }
  previousQuestion() {
    if(this.numQ>1){
      
      this.numQ--;
      this.question=this.questions[this.numQ-1];
      
      }
  }
  calculScore(valeur: any) {
    console.log(valeur);
    this.score=valeur
    }
}
