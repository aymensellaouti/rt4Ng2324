import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from "@angular/core";

@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective implements OnInit {
  @Input() in = "yellow";
  @Input() out = "red";
  @HostBinding("style.backgroundColor") bg = this.out;
  constructor(private el: ElementRef) {
    console.log("cc");
  }
  ngOnInit(): void {
    this.bg = this.out;
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.bg = this.in;
    this.el.nativeElement.innerHTML = "IN";
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.bg = this.out;
    this.el.nativeElement.innerHTML = "OUT";
  }
}
