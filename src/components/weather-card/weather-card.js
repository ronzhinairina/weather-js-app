import './weather-card.css';
import { translations } from '../../utills/weather-translations';

export class WeatherCard extends HTMLElement {
    static selector = 'app-weather-card'

    constructor() {
        super();
        this.render();
        console.log(translations);
    }

    render() {
        this.innerHTML = `<section class="widget">
        <div class="widget__container">
            <div class="widget__container-top">
                <p class="widget__text-city">${this.data.place}</p>
                <p class="widget__text-degrees">${this.data.temperature}°</p>
            </div>

            <p class="widget__text-weather">${translations[this.data.description]}</p>

            <ul>
                <li>
                    <div class="widget__container-top">
                        <p class="widget__text-parameter">Ощущается как:</p>
                        <p class="widget__text-value">${this.data.feels_like}°</p>
                    </div>
                </li>
                <li>
                    <div class="widget__container-top">
                        <p class="widget__text-parameter">Давление, мм рт. ст:</p>
                        <p class="widget__text-value">${this.data.pressure}</p>
                    </div>
                </li>
                <li>
                    <div class="widget__container-top">
                        <p class="widget__text-parameter">Влажность:</p>
                        <p class="widget__text-value">${this.data.humidity}%</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>`;
    }

    static get observedAttributes() {
        return [ data ];
    }

    get data() {
        return JSON.parse(this.getAttribute('data'));
    }
}