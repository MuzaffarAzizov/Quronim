import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const [quranData, setQuranData] = useState(null);
  const { number } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.alquran.cloud/v1/surah/${number}/ar.alafasy`)
      .then((response) => {
        setQuranData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(quranData);
  return (
    <div>
      {quranData &&
        quranData?.data?.ayahs?.map((ayah, index) => (
          <div key={index}>
            <h2>{ayah?.name}</h2>
            <h2>{ayah?.text}</h2>
            <audio src={ayah?.audio} controls></audio>
          </div>
        ))}
    </div>
  );
};
