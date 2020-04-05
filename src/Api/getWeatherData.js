import axios from "axios";

const getWeatherData = (city, lon, lat) => {
  if (city) {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=544e0bfedfe58d8f62fe6bad7f568553`
      )
      .then(
        result => {
          this.setState({
            isLoaded: true,
            temp: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  } else if (lon && lat) {
    console.log(lon, lat);
  }
};
export default getWeatherData;
