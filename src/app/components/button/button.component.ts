import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string | undefined;
  @Input() color: string | undefined;
  //output event on button click
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    /**
     * Don't mention the behaviour in button component since the component won't be generic.
     * Add the behaviour in parent component.
     */
    // console.log('Add');
    this.btnClick.emit();
  }
}
