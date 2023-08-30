import { Injectable } from '@nestjs/common';
import { Cat } from './cat.interface';
// 开始设置cats
@Injectable()
export class CatsService {
  private readonly cats: Cat[] = []; // 默认赋值为空数组
  create(cat: Cat): Cat {
    this.cats.push(cat);
    return cat;
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
