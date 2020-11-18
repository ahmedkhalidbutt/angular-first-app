import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent implements OnInit {
  constructor() {}
  count = 0;
  inputCount = 0;
  ngOnInit(): void {}
  handleClick = (e: any): void => {
    const { innerText } = e.target;
    switch (innerText) {
      case '+':
        {
          this.inputCount
            ? (this.count = this.count + this.inputCount)
            : (this.count = this.count + 1);
        }
        break;
      case '-':
        {
          this.inputCount
            ? (this.count = this.count - this.inputCount)
            : (this.count = this.count - 1);
        }
        break;
      default:
        return;
    }
  };
}
