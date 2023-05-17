import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {
  getAllQuiz(): Array<number> {
    return [1, 2, 3];
  }
}
