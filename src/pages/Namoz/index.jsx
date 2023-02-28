import React, { useState, useEffect } from "react";
import { instance1 } from "../../utils/AxiosInstance";
import n from "./style.module.scss";

export const Namoz = () => {
  let [region, setRegion] = useState("Toshkent");
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
      .get(`api/present/day?region=${region} `)
      .then((response) => {
        setData(response.data.times);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [region]);
  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };
  const timeDiff = (prayerTime) => {
    const now = new Date();
    const prayer = new Date(now.toDateString() + " " + prayerTime);
    const diff = prayer - now;
    return diff / 60000;
  };

  return (
    <div className={n.card}>
      <h1>{currentTime}</h1>
      <h2>Today's Prayer Times in {region}</h2>
      <select value={region} onChange={handleRegionChange}>
        <option value="Toshkent">Toshkent</option>
        <option value="Samarqand">Samarqand</option>
        <option value="Buxoro">Buxoro</option>
        <option value="Andijon">Andijon</option>
        <option value="Namangan">Namangan</option>
        <option value="Farg'ona">Farg'ona</option>
        <option value="Guliston">Guliston</option>
        <option value="Jizzax">Jizzax</option>
        <option value="Qarshi">Qarshi</option>
        <option value="Navoiy">Navoiy</option>
        <option value="Buxoro">Buxoro</option>
        <option value="Xiva">Xiva</option>
        <option value="Nukus">Nukus</option>
      </select>
      {data ? (
        <div className={n.namoz}>
          <p
            className={
              timeDiff(data.tong_saharlik) <= 0 && !data.quyosh ? n.active : ""
            }
          >
            Bomdod: {data?.tong_saharlik}
          </p>
          <p
            className={
              timeDiff(data.quyosh) <= 0 && !data.peshin ? n.active : ""
            }
          >
            Quyosh: {data?.quyosh}
          </p>
          <p className={timeDiff(data.peshin) <= 0 ? n.active : ""}>
            Peshin: {data?.peshin}
          </p>
          <p className={timeDiff(data.asr) <= 0 ? n.active : ""}>
            Asr: {data?.asr}
          </p>
          <p className={timeDiff(data.shom_iftor) <= 0 ? n.active : ""}>
            Shom: {data?.shom_iftor}
          </p>
          <p className={timeDiff(data.hufton) <= 0 ? n.active : ""}>
            Xufton: {data?.hufton}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
