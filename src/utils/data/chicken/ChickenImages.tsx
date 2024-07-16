import img1 from "../../../assets/images/chicken/img(9).png";

import img2 from "../../../assets/images/chicken/img(10).png";

import img3 from "../../../assets/images/chicken/img(11).png";

import img4 from "../../../assets/images/chicken/img(12).png";

import img5 from "../../../assets/images/chicken/img(13).png";

import img6 from "../../../assets/images/chicken/img(14).png";

import img7 from "../../../assets/images/chicken/img(15).png";

import img8 from "../../../assets/images/chicken/img(16).png";
import img10 from "../../../assets/images/chicken/img(8).png";

import img9 from "../../../assets/images/chicken/img(17).png";

import img11 from "../../../assets/images/chicken/img(18).png";

export interface ChickenImage {
  id: number;
  image: string;
  title: string;
  description: string;
  actualPrice: number;
  offerPrice: number;
  isFavourate: boolean;
  quantity: number;
  isAdded:boolean
}
const chickenImages: ChickenImage[] = [
  {
    id: 1,
    image: img1,
    title: "Chicken Boneless - Cube Cut",
    description: "we",
    actualPrice: 200,
    offerPrice: 173,
    isFavourate: false,
    quantity: 1,
    isAdded:false
  },
  {
    id: 2,
    image: img2,
    title: "Chicken Boneless - Cube Cut",
    description: "we",
    actualPrice: 200,
    offerPrice: 173,
    isFavourate: false,
    quantity: 1,
    isAdded:false
  },
  {
    image: img3,
    title: "Chicken Boneless - Cube Cut",
    description: "we",
    actualPrice: 200,
    offerPrice: 173,
    isFavourate: false,
    quantity: 0,
    id: 3,
    isAdded:false
  },
  {
    id: 4,
    image: img4,
    title: "Chicken Boneless - Cube Cut",
    description: "we",
    actualPrice: 200,
    offerPrice: 173,
    isFavourate: false,
    quantity: 1,
    isAdded:false
  },
  {
    id: 5,
    image: img5,
    title: "Chicken Boneless - Cube Cut",
    description: "we",
    actualPrice: 200,
    offerPrice: 173,
    isFavourate: false,
    quantity: 1,
    isAdded:false
  },
  {
    id: 6,
    image: img6,
    title: "Chicken Boneless - Cube Cut",
    description: "we",
    actualPrice: 200,
    offerPrice: 173,
    isFavourate: false,
    quantity: 1,
    isAdded:false
  },
  {
    id: 7,
    image: img7,
    title: "Chicken Boneless - Cube Cut",
    description: "we",
    actualPrice: 200,
    offerPrice: 173,
    isFavourate: false,
    quantity: 1,
    isAdded:false
  },
  {
    id: 8,
    image: img8,
    title: "Chicken Boneless - Cube Cut",
    description: "we",
    actualPrice: 200,
    offerPrice: 173,
    isFavourate: false,
    quantity: 1,
    isAdded:false
  },
  {
    id: 9,
    image: img9,
    title: "Chicken Boneless - Cube Cut",
    description: "we",
    actualPrice: 200,
    offerPrice: 173,
    isFavourate: false,
    quantity: 1,
    isAdded:false
  },
  {
    id: 10,
    image: img10,
    title: "Chicken Boneless - Cube Cut",
    description: "we",
    actualPrice: 200,
    offerPrice: 173,
    isFavourate: false,
    quantity: 1,
    isAdded:false
  },
  {
    id: 11,
    image: img11,
    title: "Chicken Boneless - Cube Cut",
    description: "we",
    actualPrice: 200,
    offerPrice: 173,
    isFavourate: false,
    quantity: 1,
     isAdded:false
  },
];
export default chickenImages;
