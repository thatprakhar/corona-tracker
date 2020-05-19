import React, { useState, useEffect } from "react";
import "./App.css";
import ChartView from "./components/ChartView/ChartView";
import NewsView from "./components/NewsView/NewsView";

function App() {
  const [deaths, setDeaths] = useState(0);
  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [timeline, setTimeline] = useState([]);

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://192.168.1.104:8000")
      .then(res => res.json())
      .then(data => {
        setDeaths(data.latest_data.deaths);
        setConfirmed(data.latest_data.confirmed);
        setRecovered(data.latest_data.recovered);
        setTimeline(data.timeline);
      })
      .catch(err => {
        console.log(err);
      });

    fetch("http://192.168.1.104:8000/news")
      .then(res => res.json())
      .then(data => setNews(data));
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <h1>Corona Statistics Tracker</h1>
      </nav>
      <div className="Stats">
        <div className="info-stats">
          <h5>Confirmed Cases: {confirmed.toLocaleString("en")}</h5>
          <br />
          <h5>Recoverd : {recovered.toLocaleString("en")}</h5>
          <br />
          <h5>Deaths : {deaths.toLocaleString("en")}</h5>
          <br />
        </div>

        {timeline.length === 0 ? null : (
          <ChartView
            timeline={timeline}
            confirmed={confirmed}
            recovered={recovered}
            deaths={deaths}
          />
        )}
      </div>
      <div className="news-view">
        <h2 className="title">Top News : </h2>
        <NewsView articles={news}></NewsView>
      </div>
    </div>
  );
}

export default App;
