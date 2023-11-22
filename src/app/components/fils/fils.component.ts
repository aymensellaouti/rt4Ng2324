import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-fils",
  templateUrl: "./fils.component.html",
  styleUrls: ["./fils.component.css"],
})
export class FilsComponent {
  // JE dois créer un event
  @Output()
  sendDataToDad = new EventEmitter<string>();

  // Je crée une méthode qui déclenche l'event avec les datas
  sendData() {
    this.sendDataToDad.emit("cc papa");
  }
  // Quand déclencher l'event
}
