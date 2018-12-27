import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {
   public score: number;
   public data: any;

   constructor() {}

  setScore(score: number) {
      this.score = score;
  }
  getScore() {
      return this.score;
  }

  setData(data: any) {
      this.data = data;
  }
  getData() {
      return this.data;
  }
}