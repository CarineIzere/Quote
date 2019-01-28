import { Component } from "@angular/core";
import { Quote } from "./quote";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  quotes = [new Quote(1, "", "", "", 1, 0, new Date(2019, 26, 1))];
}
