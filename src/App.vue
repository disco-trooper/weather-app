<template>
  <v-app>
    <v-app-bar app color="deep-orange lighten-1">
      <v-toolbar-title class="display-1 font-weight-light"
        >Weather Forecast</v-toolbar-title
      >
    </v-app-bar>
    <v-content>
      <v-container>
        <v-card class="mx-auto mt-2" max-width="400">
          <app-search
            :type="type"
            :api-key="apiKey"
            :app-id="appId"
            :key="`${appId}-${apiKey}`"
            @change="getData($event.suggestion.name)"
          ></app-search>
        </v-card>
        <v-card class="mx-auto mt-1" max-width="400">
          <v-list-item two-line>
            <v-list-item-content class="mt-2">
              <v-list-item-title class="headline text-no-wrap">
                {{ weatherData.name }}
              </v-list-item-title>

              <v-list-item-subtitle
                >{{ formattedDate }},
                {{ weatherDescription }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <v-row align="center">
              <v-col class="ml-4" cols="7">
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title class="display-2"
                      >{{ roundedTemperature }}&deg;{{
                        isCelsius ? 'C' : 'F'
                      }}</v-list-item-title
                    >
                    <v-list-item-subtitle class="mt-3 subtitle-2"
                      >Feels like {{ feelsLikeTemperature }}&deg;{{
                        isCelsius ? 'C' : 'F'
                      }}</v-list-item-subtitle
                    >
                    <v-list-item-subtitle class="mt-3 subtitle-2"
                      >Min: {{ minTemperature }}&deg;{{
                        isCelsius ? 'C' : 'F'
                      }}
                      / Max: {{ maxTemperature }}&deg;{{
                        isCelsius ? 'C' : 'F'
                      }}</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-col cols="4" class="">
                <v-img
                  :src="
                    `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
                  "
                  alt="Weather Image"
                  width="122"
                ></v-img>
              </v-col>
            </v-row>
          </v-card-text>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-weather-windy</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle class="subtitle-2"
              >{{ windSpeed }} km/h</v-list-item-subtitle
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-water-percent</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle class="subtitle-2"
              >{{ weatherData.main.humidity }}%</v-list-item-subtitle
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn text @click="isCelsius = true">&deg;C</v-btn>/
            <v-btn text @click="isCelsius = false">&deg;F</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios';
import { parse, format } from 'date-fns';
import appSearch from './components/Search.vue';

export default {
  name: 'App',
  components: { appSearch },
  data() {
    return {
      appId: 'plDV9YZ8G0XP',
      apiKey: '69cd7249a1a110e76132da2541db49d6',
      type: 'city',
      isCelsius: true,
      currentDate: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      icon: '10d',
      weatherData: {
        main: { temp: null, feels_like: null, humidity: null },
        weather: [{ icon: '02d', description: 'Sunny' }],
        wind: { speed: null },
      },
    };
  },
  computed: {
    weatherDescription() {
      return (
        // eslint-disable-next-line prettier/prettier
        this.weatherData.weather[0].description.charAt(0).toUpperCase()
        // eslint-disable-next-line prettier/prettier
        + this.weatherData.weather[0].description.slice(1)
      );
    },
    minTemperature() {
      if (this.isCelsius) {
        return Math.round(this.weatherData.main.temp_min);
      }
      return Math.round((this.weatherData.main.temp_min * 9) / 5 + 32);
    },
    maxTemperature() {
      if (this.isCelsius) {
        return Math.round(this.weatherData.main.temp_max);
      }
      return Math.round((this.weatherData.main.temp_max * 9) / 5 + 32);
    },
    roundedTemperature() {
      if (this.isCelsius) {
        return Math.round(this.weatherData.main.temp);
      }
      return Math.round((this.weatherData.main.temp * 9) / 5 + 32);
    },
    feelsLikeTemperature() {
      if (this.isCelsius) {
        return Math.round(this.weatherData.main.feels_like);
      }
      return Math.round((this.weatherData.main.feels_like * 9) / 5 + 32);
    },
    windSpeed() {
      return Math.round(this.weatherData.wind.speed * 3.6);
    },
    formattedDate() {
      return format(
        parse(
          this.currentDate,
          'yyyy-MM-dd HH:mm:ss',
          // eslint-disable-next-line comma-dangle
          new Date()
        ),
        // eslint-disable-next-line prettier/prettier
        'iii, H:mm',
      );
    },
  },
  created() {
    this.getData('Prague');
  },
  methods: {
    async getData(city) {
      try {
        const weatherResponse = await axios.get(
          // eslint-disable-next-line comma-dangle
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5528d9bb37a327d3c11bcaa0d374750f`
        );
        this.weatherData = weatherResponse.data;
        const dateResponse = await axios.get(
          // eslint-disable-next-line comma-dangle
          `https://api.timezonedb.com/v2.1/get-time-zone?key=DKGJLVWEORBI&format=json&by=position&lng=${this.weatherData.coord.lon}&lat=${this.weatherData.coord.lat}`
        );
        this.currentDate = dateResponse.data.formatted;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
</script>
