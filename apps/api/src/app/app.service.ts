import { Injectable } from '@nestjs/common';
import { Token } from '@full-stack/interfaces';

@Injectable()
export class AppService {
  getData(): Token {
    return {
      token: 'fh8978hjvuhu6t6hchrtyeyr5'
    };
  }
}
