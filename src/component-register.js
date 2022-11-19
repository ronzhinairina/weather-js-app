import { CoordinatesForm } from './components/form/form';
import { Layout } from './components/layout/layout';
import { WeatherCard } from './components/weather-card/weather-card';

export const registerComponents = () => {
    customElements.define(Layout.selector, Layout);
    customElements.define(CoordinatesForm.selector, CoordinatesForm);
    customElements.define(WeatherCard.selector, WeatherCard);
}