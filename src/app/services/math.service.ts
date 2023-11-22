import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable({
  providedIn: "root",
})
export class MathService {
  cache = new Map<{ x: number; y: number }, number>();
  computed: number[] = [];
  constructor(private loggerService: LoggerService) {}

  add(x: number, y: number): number {
    const result = x + y;
    this.computed.push(result);
    return result;
  }

  showComputed() {
    console.log(this.computed);
  }
}
