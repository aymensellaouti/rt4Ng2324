import { Component, inject } from "@angular/core";
import { LoggerService } from "../../services/logger.service";
import { MathService } from "../../services/math.service";
import { Router } from "@angular/router";
import { APP_ROUTES } from "../../config/routes.config";

@Component({
  selector: "app-pere",
  templateUrl: "./pere.component.html",
  styleUrls: ["./pere.component.css"],
  providers: [MathService],
})
export class PereComponent {
  x: number = 0;
  y: number = 0;
  constructor(
    private loggerService: LoggerService,
    private mathService: MathService,
    private router: Router
  ) {
    loggerService.loggerData("cc from logger service in pere component");
  }
  // loggerService = inject(LoggerService);
  getMessage(message: string) {
    alert(message);
  }
  calcul() {
    return this.mathService.add(this.x, this.y);
  }
  goToFils() {
    this.router.navigate([APP_ROUTES.fils]);
  }
}
