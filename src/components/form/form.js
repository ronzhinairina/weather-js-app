import { WeatherApi } from "../../utills/weather-api"
import './form.css';

export class CoordinatesForm extends HTMLElement {
    static selector = 'app-form';

    constructor() {
        super();
        this.render();
        this.initEventListeners();
    }

    render() {
        this.innerHTML = `<section class="input">
        <form class="input__container">
            <h1 class="input__container__title">Введите данные</h1>
            <input id='lat' class="input__container__input" type="text" required placeholder="Широта">
            <input id='lon' class="input__container__input" type="text" required placeholder="Долгота">
            <button id='submit-button' class="input__container__input-submit" type="submit">Показать погоду</button>
        </form>
    </section>`;
    }

    initEventListeners() {
        document.querySelector('#submit-button').addEventListener('click', this.onSubmit);
    }

    onSubmit(e) {
        e.preventDefault();
        const lat = this.form.elements[0].value;
        const lon = this.form.elements[1].value;
        WeatherApi.getWeatherByCoordinates(lat, lon)
            .then((res) => {
                console.log('form');
                const event = new CustomEvent('weather-form-submit', {
                    bubbles: true,
                    detail: res
                });
                this.dispatchEvent(event);
            });
    }
}