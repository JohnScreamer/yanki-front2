import ps5 from "./../../public/img/ps5.webp";
import ps4 from "./../../public/img/ps4.webp";
import comp from "./../../public/img/comp.webp";
import xboxone from "./../../public/img/xboxone.webp";
import seriax from "./../../public/img/seriesx.jpg";
import switchnin from "./../../public/img/switch.jpg";

export const categoriesList = [
    {
        name: "PlayStation 4",
        url: "/catalog",
        img: ps4,
        categories: "PlayStation 4",
    },
    {
        name: "PlayStation 5",
        url: "/catalog",
        categories: "PlayStation 5",
        img: ps5,
    },
    { name: "PC", url: "/catalog", categories: "PC", img: comp },
    { name: "Xbox One", url: "/catalog", categories: "Xbox One", img: xboxone },
    {
        name: "Xbox seria X",
        url: "/catalog",
        categories: "Xbox One",
        img: seriax,
    },
    {
        name: "Nintendo switch",
        url: "/catalog",
        img: switchnin,
        categories: "Nintendo Switch",
    },
];
