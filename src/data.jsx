import { HiHome } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { BsPlusSquare } from "react-icons/bs";
import { AiOutlineCompass, AiOutlineHeart } from "react-icons/ai";

export const Logo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png";

export const profile =
  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80";


  export const iconsList = [
    {
        icons:  <HiHome />,
        hover:"hover:text-yellow-400"
    },
    {
        icons:  <RiMessengerLine />,
        hover:"hover:text-cyan-400"
    },
    {
        icons:  <BsPlusSquare />,
        hover:"hover:text-fuchsia-500"
    },
    {
        icons: <AiOutlineCompass />,
        hover:"hover:text-green-400"
    },
    {
        icons:  <AiOutlineHeart />,
        hover:"hover:text-rose-500"
    },
  ]