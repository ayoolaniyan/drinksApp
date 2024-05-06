export abstract class AppConfiguration {
  title: string;
  drinksUrl: string;
  drinkUrl: string;

  constructor() {
    this.title = "Default";
    this.drinksUrl = "Default";
    this.drinkUrl = "Default";
  }

}
