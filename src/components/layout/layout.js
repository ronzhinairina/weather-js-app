import { WeatherApi } from "../../utills/weather-api"
import './layout.css';

export class Layout extends HTMLElement {
  static selector = 'app-layout'

  weatherCards = [];

  weatherCardsToRender = () => {
    return this.weatherCards.map(card => {
      const data = JSON.stringify(card);
      return `<app-weather-card data=${data}></app-weather-card>`
    }).join('\n')
  }

  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `<main>
        <div class="main__container">
            <div class="main__container-left">
                <app-form id='coordinates-form'></app-form>
            </div>
            <div class="main__container-right">
                ${this.weatherCardsToRender()}
            </div>

        </div>
    </main>`;

    this.initListeners();
  }

  initListeners() {
    document.querySelector('#coordinates-form').addEventListener('weather-form-submit', (event) => {
      document.body.classList = [event.detail.description]
      if (event.detail) {
        if (this.weatherCards.length == 2) {
          this.weatherCards.pop();
        }
        this.weatherCards.unshift(event.detail);
        this.render();
      }
    })
  }
}