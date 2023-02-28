import { createContext, useContext, useState } from "react";

const AudioPlayerContext = createContext({
  audioRef: null,
  setAudioRef: () => {},
  audioState: {
    quranData: null,
    currentAudioIndex: 0,
  },
  setAudioState: () => {},
});

export const AudioPlayerProvider = ({ children }) => {
  const [audioRef, setAudioRef] = useState(null);
  const [audioState, setAudioState] = useState({
    quranData: null,
    currentAudioIndex: 0,
  });

  return (
    <AudioPlayerContext.Provider
      value={{ audioRef, setAudioRef, audioState, setAudioState }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayer = () => useContext(AudioPlayerContext);
