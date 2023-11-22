import { Component } from "@angular/core";
import { MathService } from "../../services/math.service";

@Component({
  selector: "app-first",
  templateUrl: "./first.component.html",
  styleUrls: ["./first.component.css"],
})
export class FirstComponent {
  constructor(private mathService: MathService) {}
  //state => attributes
  isHidden = true;
  message = "";
  name = "aymen";
  // behaviour => methods
  showHide() {
    this.isHidden = !this.isHidden;
  }

  test() {
    this.mathService.showComputed();
  }
}
