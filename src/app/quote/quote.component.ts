import { Component, OnInit } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"]
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(
      1,
      "When you want to make your life feel better and your thoughts more positive the grass is greener where you water it.",
      "barringham",
      "Neil",
      0,
      0,
      new Date(2019, 1, 26)
    ),
    new Quote(
      2,
      "But man is not made for defeat. A man can be destroyed but not defeated.",
      "Hemingway",
      "Ernest",
      0,
      0,
      new Date(2019, 1, 26)
    ),
    new Quote(
      3,
      "When you reach the end of your rope, tie a knot in it and hang on.",
      "Franklin D.",
      "Roosevelt",
      0,
      0,
      new Date(2019, 1, 26)
    )
  ];
  toggleDetails(index) {
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
    this.quotes[index].showFan = !this.quotes[index].showFan;
  }
  upvote(index) {
    this.quotes[index].upvotes++;
  }
  downvote(index) {
    this.quotes[index].downvotes++;
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].name}`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  addNewQuote(quote) {
    this.quotes.push(quote);
  }
  constructor() {}

  ngOnInit() {}
}
