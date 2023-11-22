import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-hello",
  templateUrl: "./hello.component.html",
  styleUrls: ["./hello.component.css"],
})
export class HelloComponent {
  acr = inject(ActivatedRoute);

  constructor() {
    console.log({ acr: this.acr });
  }
}
