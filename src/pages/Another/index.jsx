// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// export const Another = () => {
//   const [quranData, setQuranData] = useState(null);
//   const [text, setText] = useState([]);
//   const { number } = useParams();
//   // console.log(number, "number");

//   useEffect(() => {
//     axios
//       .get(`https://api.alquran.cloud/v1/surah/${number}/ar.alafasy`)
//       .then((response) => {
//         setQuranData(response.data);
//         setText(response.data.data);
//       })

//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
//   console.log(text);
//   return (
//     <div>
//       {/* {console.log(quranData)} */}

//       {quranData &&
//         quranData?.data?.ayahs?.map((ayah, index) => (
//           <div key={index}>
//             <h2>{ayah?.text}</h2>
//             <div key={index}></div>
//             <audio src={ayah?.audio} controls></audio>
//           </div>
//         ))}
//     </div>
//   );
// };
