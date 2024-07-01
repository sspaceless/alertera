import { ImageSourcePropType } from "react-native";

import alarm from "./assets/images/alarm.png";
import brawlStars from "./assets/images/brawl-stars.png";
import fortunateSon from "./assets/images/fortunate-son.png";
import pesPatron from "./assets/images/pes-patron.png";
import stalkerImg from "./assets/images/stalker.png";

type SoundData = {
  title: string;
  description: string;
  imgSrc: ImageSourcePropType;
  fileSrc: string;
};

export const SOUNDS: SoundData[] = [
  {
    title: "S.T.A.L.K.E.R.",
    description: "Класика, що ніколи не старіє",
    imgSrc: stalkerImg,
    fileSrc: "",
  },
  {
    title: "Пес Патрон",
    description: "Хто тримає повітряний простір?",
    imgSrc: pesPatron,
    fileSrc: "",
  },
  {
    title: "Стандартна сирена",
    description: "Звук початку матчу",
    imgSrc: alarm,
    fileSrc: "",
  },
  {
    title: "Brawl Stars",
    description: "Для поціновувачів ПТСР",
    imgSrc: brawlStars,
    fileSrc: "",
  },
  {
    title: "Fortunate Son",
    description: "Запах напалму в смартфоні",
    imgSrc: fortunateSon,
    fileSrc: "",
  },
];
