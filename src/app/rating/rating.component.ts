import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.ratingsx)
    this.outer_width = this.ratingsx * this.outer_width
  }

  @Input() ratingsx: number = 0
  outer_width = 16

  @Output() to_parent = new EventEmitter<string>()
  send_to_parent() {
    this.to_parent.emit("Hello Parent")
  }


}
