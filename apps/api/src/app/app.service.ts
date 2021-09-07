import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): any {
    return {
      token: 'fh8978hjvuhu6t6hchrtyeyr5'
    };
  }
}
