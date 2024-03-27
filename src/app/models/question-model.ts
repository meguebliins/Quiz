import { ResponseModel } from "./response-model";

export interface QuestionModel {
    num: number;
    question: string;
    responses: Array<ResponseModel>;
    category: number;
    coeffitient: number;
}
