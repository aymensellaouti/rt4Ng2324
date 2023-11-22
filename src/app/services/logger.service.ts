import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoggerService {
  constructor() {}

  loggerData(data: unknown) {
    console.log(data);
  }
}
