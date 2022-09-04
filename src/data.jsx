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

  export const story = [
    {
      id: 1,
      img:"https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name:"Phitchy",
      alt:"story img"
    },
    {
      id: 2,
      img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name:"John doe",
      alt:"story img"
    },
    {
      id: 3,
      img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name:"Peter J",
      alt:"story img"
    },
    {
      id: 4,
      img:"https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name:"Jackson",
      alt:"story img"
    },
  ]

  import {BsGrid3X3,BsCameraReels} from 'react-icons/bs'
  import {VscBook} from 'react-icons/vsc'
  import {MdVideoLibrary} from 'react-icons/md'
  import {TiTags} from 'react-icons/ti'

export const navToggle = [
  {
    icons: <BsGrid3X3/>,
    name:"posts",
    hover:"hover:border-b border-black"
  },
  {
    icons: <VscBook/>,
    name:"guides",
    hover:"hover:border-b border-black"
  },
  {
    icons:<BsCameraReels/>,
    name:"reels",
    hover:"hover:border-b border-black"
  },
  {
    icons:<MdVideoLibrary/>,
    name:"videos",
    hover:"hover:border-b border-black"
  },
  {
    icons:<TiTags/>,
    name:"tagged",
    hover:"hover:border-b border-black"
  },
]

import {FaClone} from 'react-icons/fa'
export const imgPost = [
  {
    id:1,
    img:"https://images.unsplash.com/photo-1662204476672-a694f6245210?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80",
    alt:"postImg",
    icons:<FaClone/>
  },
  {
    id:2,
    img:"https://images.unsplash.com/photo-1662063750283-c9db3ef3bd3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    alt:"postImg",
    icons:<FaClone/>
  },
  {
    id:3,
    img:"https://images.unsplash.com/photo-1662128680429-a04fdd7e6b95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    alt:"postImg",
    icons:<FaClone/>
  },
  {
    id:4,
    img:"https://images.unsplash.com/photo-1662139944990-61738f12acc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    alt:"postImg",
    icons:""
  },
  {
    id:5,
    img:"https://images.unsplash.com/photo-1662107010717-8f698719b223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    alt:"postImg",
    icons:""
  },
  {
    id:6,
    img:"https://images.unsplash.com/photo-1659535907680-0e219b46c01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    alt:"postImg",
    icons:""
  },
  {
    id:7,
    img:"https://images.unsplash.com/photo-1662134703124-706f93f90eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    alt:"postImg",
    icons:""
  },
  {
    id:8,
    img:"https://images.unsplash.com/photo-1662196749713-d3cd484bd59c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    alt:"postImg",
    icons:""
  },
  {
    id:9,
    img:"https://images.unsplash.com/photo-1661983228625-f4619e57f66b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    alt:"postImg",
    icons:""
  },
]