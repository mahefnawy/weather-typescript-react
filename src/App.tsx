import React from "react";
import { Input, Button, Row, Col } from 'antd';
import { AppContainer } from "./AppStyles";
// import ArrowLeft from '@ant-design/icons';

import logo from "./logo.svg";
import About from './components/partials/about/About';
import { API_URL, API_TOKEN, INITIAL_CITY } from "./components/utils/config";
import 'antd/dist/antd.css';

type Props = {};

const App: React.FC<Props> = () => {

  function fetchWeather() {
    const dailySixtenDays = `http://api.openweathermap.org/data/2.5/forecast/daily?q=berlin&appid=${API_TOKEN}`
    const hourlyForcastFiveDays = `http://api.openweathermap.org/data/2.5/forecast?q=berlin&appid=${API_TOKEN}`


    fetch(hourlyForcastFiveDays)
      .then(async response => {
        const data = await response.json();
        console.log(data)
      })
      .catch(error => { });
  };

  return (
    <AppContainer>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Logo</h1>
      </header>
      <About />
      <Input placeholder="Basic usage" />
      <Button onClick={fetchWeather}>Click me</Button>
    </AppContainer>
  );
}

export default App;
