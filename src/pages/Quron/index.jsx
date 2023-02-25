import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { instance } from "../../utils/AxiosInstance";
import q from "./style.module.scss";

export const Quron = () => {
  const [surahs, setSurahs] = useState([]);
  const { number } = useParams();
  console.log(number, "number");
  useEffect(() => {
    instance
      .get(`v1/surah`)
      .then((response) => {
        setSurahs(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Quran App</h1>
      <div className={q.card}>
        {surahs?.map((surah) => (
          <Link to={`/quron/${surah?.number}`} key={surah?.number}>
            <div key={surah.number} className={q.quron}>
              <h2>{surah?.number}</h2>
              <h3>Ayahs: {surah?.numberOfAyahs}</h3>
              <p>{surah?.name}</p>
              <p>{surah?.englishName}</p>
              <p>{surah?.englishNameTranslation}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
