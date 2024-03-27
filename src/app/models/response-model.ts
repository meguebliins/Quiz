import { QuestionModel } from "./question-model";

export interface ResponseModel {
    id: number;
    response: string;
    question_id: number;
    isCorrect: boolean;

}
