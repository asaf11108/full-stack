import { Injectable } from '@nestjs/common';
import { GenericResponse, Token } from '@full-stack/api-interfaces';

@Injectable()
export class AppService {
  getData(): GenericResponse<Token> {
    return {
      success: true,
      message: 'fh8978hjvuhu6t6hchrtyeyr5'
    };
  }
}
