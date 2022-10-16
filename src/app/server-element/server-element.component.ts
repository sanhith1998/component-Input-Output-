import { Component, OnInit,Input, OnChanges,SimpleChanges,DoCheck,AfterContentInit,ContentChild,ElementRef} from '@angular/core';
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements
  OnInit, OnChanges, DoCheck,
  AfterContentInit {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string
  @ContentChild('contentParagraph') paragraph:ElementRef;
  constructor() { 
    console.log("Constructor called");
  }
  ngOnChanges(changes: SimpleChanges)
  {
    console.log("ngOnchanges called");
    console.log(changes);
  }
  ngOnInit(): void {
    console.log("ngonIt called");
  }
  ngDoCheck()
  {
    console.log("docheck called");
  }
  ngAfterContentInit()
  {
    console.log("After content called");
  }
}
