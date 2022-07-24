// <!--STANDING TABLE WRAP BEGIN-->
import React, { FC, ReactNode, useEffect, useState } from "react";
import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
import { useRouter } from "next/router";
import { UserID } from "../../store/login/auth";
import { Helmet } from 'react-helmet'
import { useAppDispatch, useAppSelector } from "../../store/hooks";
//import Script from "next/script"
import Header from "../../components/Foot/header";
import axios from "axios";
import { API_LINK, TV_LINK, PODCAST_LINK } from "../../utils/constantes";
import Link from "next/link";
export interface OneSport  {
  _id: String | number;
  page: []
  sport: string
  sportAR: string
}
export interface SPORTI {
  alphabet:string,
 data : OneSport[]
}
const PageSingleStanding = () => {
  const userId = useAppSelector(UserID);
  const router = useRouter();
  const [sports, setSports] = useState<SPORTI[]|undefined>(undefined);
  const [Loading, setLoading] = useState(true);
  const [countSports, setCountSports] = useState(0);
  const [sportsAlp, setSportAlp] = useState(false)
  const [alphabet, setAlphabet] = useState<string[]|undefined>(undefined)
  const getSports = () => {
    let URLGet = "v1/sport/";
    axios.get(API_LINK + URLGet)
      .then((response) => {
        var table :OneSport[] = response.data.sort((a:OneSport, b:OneSport) => a.sport.localeCompare(b.sport));
        console.log("tablee", table)
        setCountSports(table.length);
       var table2 :SPORTI[]|undefined = getSections(table);
        setSports(table2);
      })
      .catch((err) => {
        console.log(err);
      });

  }

  function getSportsbyAlphbet(e:number, alpt: string) {
    alphabet?.map((alp, id) => {
      document.getElementById(`auteur-${id}`)?.classList.remove("active")
    })
    document.getElementById(`auteur-${e}`)?.classList.add("active");
    let URLGet = "v1/sport/";
    axios.get(API_LINK + URLGet)
      .then((response) => {
        var table :OneSport[]= response.data
        const filterTable = table.filter(s => s.sport.charAt(0) == alpt)
        setCountSports(filterTable.length);
        let tableAfter:SPORTI[]|undefined = getSections(filterTable);
        setSports(tableAfter);
        setSportAlp(!sportsAlp)
      })
      .catch((err) => {
        console.log(err);
      });
    return
  }

  function getSections(table:OneSport[]) {
    if (table.length === 0) {
      return undefined;
    } else {
      var tableresult = table.sort().filter(function (el) {
        return el.sport != "";
      });
      return Object.values(
        tableresult.reduce((acc : { [key: string]: SPORTI }, sport) => {
          let firstLetter = sport.sport[0].toLocaleUpperCase();
          if (!acc[firstLetter]) {
            acc[firstLetter] = { alphabet: firstLetter, data: [sport] };
          } else {
            acc[firstLetter].data.push(sport);
          }
          return acc;
        }, {})
      );
    }
  }

  useEffect(() => {
    var alp = []

    alp = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ]
    setAlphabet(alp)
    getSports()
  }, []);


  useEffect(() => {
    if (sports) setLoading(false);
    console.log("autesportsurs", sports);
  }, [countSports, sports, sportsAlp]);

  return (
    <>
      <HeaderContainer user={userId} />

      <div className="foot-container mt-5 mb-5">

        <div>
          <div className="row justify-content-center mb-5 ">

            {alphabet?alphabet.map((alp, id) => {
              return (
                <div className="alphabet">
                  <a

                    id={`auteur-${id}`} style={{
                      fontFamily: "Poynter,Georgia,serif", cursor: "pointer"

                    }}
                    className="mr-2 alphabet-link" onClick={function (e) { getSportsbyAlphbet(id, alp) }}>{alp}</a>

                </div>
              );
            }):null}
          </div>
          <div className="row">

            {sports?.length? sports.length> 0
              ? sports.map((listSports) => {
                if (listSports.alphabet)
                  return (
                    <div
                      className="col-4"
                    >
                      <ul className=" auteur-item mb-5">
                        <h1
                          className="font-weight-bold"
                          style={{
                            fontFamily: "Poynter,Georgia,serif",
                          }}
                        >
                          {listSports.alphabet}
                        </h1>
                        {listSports.data.length
                          ? listSports.data.map((sport) => {
                            return (
                              <li>
                                <Link
                                  href={{
                                    pathname: "/sport/" + sport.sport || undefined,
                                  }}

                                >
                                  <a href={"/sport/" + sport.sport}>
                                    {sport.sport}
                                  </a>
                                </Link>

                              </li>
                            );
                          })
                          : null}

                      </ul>
                    </div>
                  );
              })
              : !Loading ? <p
                className="no-results"
              >La liste est vide</p>
                : null:null
            }
          </div>
        </div>





      </div>

    </>



  )
}
export default PageSingleStanding;
