import React, { useState, useEffect, useContext } from "react";
import { instance1 } from "../../utils/AxiosInstance";
import { cityContext } from "../../utils/cityContext";

export const Namoz = () => {
  const { region, setRegion } = useContext(cityContext);
  const [data, setData] = useState(null);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    instance1
      .get(
        `api/present/day?region=${
          region.name === undefined ? "Toshkent" : region.name
        } `
      )
      .then((response) => {
        setData(response.data.times);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [region.name]);
  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  return (
    <div>
      <h1>The current time is {currentTime}.</h1>
      <h1>Today's Prayer Times in Tashkent</h1>
      <select value={region.name} onChange={handleRegionChange}>
        <option value="Tashkent">Tashkent</option>
        <option value="Samarkand">Samarkand</option>
        <option value="Bukhara">Bukhara</option>
        <option value="Andijan">Andijan</option>
      </select>
      {data ? (
        <div>
          <p>Bomdod: {data?.tong_saharlik}</p>
          <p>Quyosh: {data?.quyosh}</p>
          <p>Peshin: {data?.peshin}</p>
          <p>Asr: {data?.asr}</p>
          <p>Shom: {data?.shom_iftor}</p>
          <p>Xufton: {data?.hufton}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
