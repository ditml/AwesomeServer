import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/CreateQuizDto';

@Controller('/')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Get('quiz')
  getQuiz() {
    return this.quizService.getAllQuiz();
  }

  @Post('quiz')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  creatQuiz(@Body() quizData: CreateQuizDto) {
    return { data: quizData };
  }
}
