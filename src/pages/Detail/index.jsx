import React, { useState, useEffect, useRef } from "react";
import { instance } from "../../utils/AxiosInstance";
import { useParams, Link, useNavigate } from "react-router-dom";
import d from "./style.module.scss";
import { Button } from "antd";

export const Detail = () => {
  const [quranData, setQuranData] = useState();
  const [st, setSt] = useState();
  const { number } = useParams();
  const nav = useNavigate();
  const handleGoBack = () => {
    nav(-1);
  };
  const audioRef = useRef(null);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

  useEffect(() => {
    instance.get(`/surah/${number}/uz.sodik`).then((res) => setSt(res.data));
    instance
      .get(`/surah/${number}/ar.alafasy`)
      .then((response) => setQuranData(response.data));
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = quranData?.data?.ayahs[currentAudioIndex]?.audio;
      audioRef.current.play();
    }
  }, [quranData, currentAudioIndex]);

  const handleNextAudio = () => {
    setCurrentAudioIndex((index) => index + 1);
  };

  return (
    <div className={d.detail}>
      <Link onClick={handleGoBack}>
        <Button type="primary">Back</Button>
      </Link>
      <h1>{quranData?.data?.englishName}</h1>
      <audio ref={audioRef} controls onEnded={handleNextAudio}></audio>
      {st?.data?.ayahs?.map((s, i) => (
        <div key={i} className={d.card}>
          <h2>{quranData?.data?.ayahs[i]?.text}</h2>
          <p>
            {i + 1} {s?.text}
          </p>
          <audio src={quranData?.data?.ayahs[i]?.audio} controls></audio>
        </div>
      ))}
    </div>
  );
};
