import React ,{useState,useEffect} from "react";
 import NavigationItem from "./NavigationItem"
 import {
  MegamenuItem,
} from "../../components/Navigation/NavigationItem";
import ncNanoId from "../../utils/ncNanoId";
import __megamenu from "../../data/jsons/__megamenu.json";
import axios from "axios";
import { API_LINK ,TV_LINK,PODCAST_LINK } from "../../utils/constantes";
export interface NavItemType {
  id: string;
  name: string;
  href: string;
  targetBlank?: boolean;
  megaMenu?: MegamenuItem[];
  indice?:string;
  type?: "dropdown" | "megaMenu" | "none";

}
export interface TournoisItem {
  _id?: string;
  value: string;
  label: string;

}
export interface SportItem {
  _id: string;
  sport: string;
}

function Navigation() {
  const [topTournois,setTopTournois] = useState<MegamenuItem[]|undefined>(undefined) 
  const [sports,setSports] = useState<MegamenuItem[]|undefined>(undefined) 
  const [NavigationItems,setNavigationItems] = useState<NavItemType[]|undefined>(undefined)
  useEffect(()=>{
    getTopTournois()
    getSports()
  },[])
  useEffect(()=>{
    console.log("Hd topTournois",topTournois)
    if(topTournois && sports )
    {
      setNavigationItems([
        {
      id: ncNanoId(),
      href: "/sport/Football",
      name: "FOOTBALL",
      type: "megaMenu",
      megaMenu: topTournois,
      indice:"tournois",
     
    },
  
    {
      id: ncNanoId(),
      href: "/ComingSoon",
      name: "LIVE SCORES",

    },
    {
      id: ncNanoId(),
      href: "/fennecs",
      name: "FENNECS",
      type: "none",

    },

    {
      id: ncNanoId(),
      href: "/journal",
      name: "LE JOURNAL",

    },
    {
      id: ncNanoId(),
      href: "/ComingSoon",
      name: "TOUS LES SPORT",
      type: "megaMenu",
      megaMenu: sports,
      indice:"sport",

    },
      ])
    }

  },[topTournois,sports])
  const getTopTournois = ()=>{
    let URLGet= "v1/topTournois/";
    axios.get(API_LINK + URLGet)
    .then((response) => {
      const tournois=response.data
      var i=0
      var column =[]
      for ( i = 0; i < tournois.length; i += 3) {
        const part=tournois.slice(i,i+3)
        console.log("addcount", i,part)
        let table: NavItemType[] = part.map((tournois:TournoisItem)=> {
          return {
            id:tournois.value ,
            name: tournois.label,
            href: "/sport/Football/"+tournois.label,
          }
        })
      
          column.push({
            id:ncNanoId(),
            items:table
          })
      }
          setTopTournois(column)
     
    })
    .catch((err) => {
      console.log(err);
    });

  }
  const getSports = ()=>{
    let URLGet= "v1/sport/";
    axios.get(API_LINK + URLGet)
    .then((response) => {
      const sports=response.data.filter((s:SportItem)=>s.sport!="Football")
      var column =[]
      for ( var i = 0; i < sports.length; i += 6) {
        const part=sports.slice(i,i+6)
        console.log("sport count", i,part)
        let table: NavItemType[] = part.map((sport:SportItem)=> {
          return {
            id:sport._id ,
            name: sport.sport,
            href: "/ComingSoon"
          }
        })
          column.push({
            id:ncNanoId(),
            items:table
          })
      }
          setSports(column)
     
    })
    .catch((err) => {
      console.log(err);
    });

  }


  return (
    <ul className="nc-Navigation hidden lg:flex lg:flex-wrap lg:items-center  relative" >
      {NavigationItems?NavigationItems.map((item) => {
      console.log('item',item)
      return(
        <NavigationItem key={item.id} menuItem={item} />
        )}):null}
    </ul>
  );
}

export default Navigation;
