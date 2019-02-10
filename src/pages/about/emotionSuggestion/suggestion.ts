import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
import { AboutService } from '../about.service';
import { DatabaseService } from '../../../services/database';


@Component({
  selector: 'emotion-suggestion',
  templateUrl: 'suggestion.html',
  providers: [AboutService, DatabaseService]
})

export class EmotionSuggestion {

  score: number;
  suggestion: string;

  // score -1 ~ 0.5  : negative 
  // score 0.5 ~ 1    : positive
  // if score is lower than -0.5, a notification 
  // can be sent to the relative or vulunteers
  suggestionNegative: string[] = ['適當的體能活動對生理和心理都有好處，你可以根據自身狀況將體能活動融入日常生活。例如步行、遠足、太極等。伸展及肌肉鍛煉運動可改善健康和體能。你可以向醫護人員查詢適合你的體能活動。',
                          '訂立小目標、計劃一天的活動，或安排未來數週的活動，俱可為你帶來成就感和動力，例如閱讀書本的一章、散步、執拾房間、打電話給朋友、為家庭聚會安排活動等。',
                          '多參與和享受休閒活動，並將之培養成嗜好，例如聽唱戲曲、繪畫、演奏樂器等。益智活動更有助保持頭腦靈活，例如閱讀書報、下棋、編織等。',
                          '發現心情緊張時，停下來休息一下並和朋友傾訴。'];
  suggestionPositive: string[] = ['把你的快樂分享給他人吧~']

  constructor(public service: AboutService, public dbservice: DatabaseService) {
    let begin = this.service.getDateRange()[0];
    let end = this.service.getDateRange()[1];
    this.score = this.dbservice.getAvgScore(begin, end);
  }

  refreshSuggestion() {
    let suggestionList: string[];
      if (this.score > 0.5) {
        suggestionList = this.suggestionPositive;
      } else if (this.score > -0.5) {
        suggestionList = this.suggestionNegative;
      } else {
        suggestionList = this.suggestionNegative;
        // TODO: send notification (sms or email) to relative
      }

      // pick one suggestion randomly from the suggestion list
      this.suggestion = suggestionList[Math.floor(Math.random() * suggestionList.length)];
      console.log(this.suggestion);
  }
}
