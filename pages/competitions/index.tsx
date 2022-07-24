// <!--STANDING TABLE WRAP BEGIN-->
import React, { FC, ReactNode, useEffect, useState } from "react";
import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
import { Tournois } from "../../data/types";
import { UserID } from "../../store/login/auth";
import { Helmet } from 'react-helmet'
import { useAppDispatch, useAppSelector } from "../../store/hooks";
//import Script from "next/script"
import Header from "../../components/Foot/header";
import axios from "axios";
import { API_LINK, TV_LINK, PODCAST_LINK } from "../../utils/constantes";
// const paysList = []
// export function transformepaysTopaysAR(value) {
//     if (paysList.length > 0) {
//         let country = paysList[0].filter(country => country.pays == value)
//         return (country[0].paysAR)
//     }

// }

const PageSingleStanding = () => {
    const userId = useAppSelector(UserID);
    const [tournoisLoaded, setTournoisLoaded] = useState(false)
    const [tournoisData, setTournoisData] = useState<Tournois[]| undefined>(undefined)
    const [tournoisCountryData, setTournoisCountryData] = useState<Tournois[]| undefined>(undefined)
    const [countryData, setCountryData] = useState<String[]| undefined>(undefined)
    const getTournois = () => {
        axios.get(API_LINK + 'v1/tournois' + '/')
            .then((response) => {
                setTournoisData(response.data)
                setTournoisLoaded(true)
            })
    }
    // const getCountry = async () => {

    //     await axios.get(API_LINK + 'v1/Country')
    //         .then(response => {
    //             paysList.push(response.data)
    //         })
    //         .catch(err => { console.log(err) })
    // }
    const getTournoisByCountry = () => {

        axios.get(API_LINK + 'v1/tournoisByCountry')
            .then((response) => {
                console.log("counriess", response.data)
                setTournoisCountryData(response.data.tournois)
                setCountryData(response.data.pays)
                setTournoisLoaded(true)
            })
    }
    useEffect(() => {
        getTournois()
        getTournoisByCountry()

    }, [])

    return (
        <>
            <HeaderContainer user={userId} />


            <div className="foot-container mt-5 mb-5">
                <h3 style ={{fontWeight:"bold", fontSize:"22px", color: "#ea2027"}}> TOUTES LES COMPÉTITIONS </h3>

                <h4 className=" mt-4 pb-2" id="afrique" style={{fontWeight:"bold", fontSize:"18px", color: "#061da5"}}>  COMPÉTITIONS NATIONALES</h4>

                {tournoisLoaded && countryData ? countryData.length ? countryData.map((data, key) => {
                    return (

                        <div className="col-md-12 mt-2" key={key} >
                            <h5 className="border-bottom mt-4 pb-2 font-weight-bold" style={{color:"#000"}}>{data} </h5>
                            <br></br> <h6 className=" text-muted">Championnats nationales</h6>
                            <div className="row">

                                {tournoisLoaded && tournoisCountryData ? tournoisCountryData.length ? tournoisCountryData.map((tournoi, key) => {
                                    return (
                                        (tournoi.type === 'Championnat' && data === tournoi.pays) ?
                                            <div key={key} className="col-md-6 mt-2" >
                                                <a href="/" className="text-dark"> {tournoi.entitled} </a>
                                            </div>
                                            :
                                            <></>)

                                }) : <></> : <></>}
                            </div>
                            <br></br>

                            {tournoisCountryData?tournoisCountryData.filter(x => (x.type === 'Coupe' && x.pays === data)).length > 0 ?

                                <h6 className=" text-muted">  Coupes nationales</h6> : null:null}
                            <div className="row">

                                {tournoisLoaded && tournoisCountryData ? tournoisCountryData.map((tournoi, key) => {
                                    return (
                                        (tournoi.type === 'Coupe' && data === tournoi.pays) ?
                                            <div key={key} className="col-md-6 mt-2" >
                                                <a href="/" className="text-dark"> {tournoi.entitled} </a>
                                            </div>
                                            :
                                            <></>)

                                }) : <></>}
                            </div>
                        </div>)
                })
                    : <></> : <></>}
                <br /><br />
                <h4 className=" mt-4 pb-2" id="afrique" style={{fontWeight:"bold", fontSize:"18px", color: "#061da5"}}>  COMPÉTITIONS INTERNATIONALES </h4>
                <div className="col-md-12 mt-2" >
                    <h4 className="border-bottom mt-4 pb-2 font-weight-bold" id="afrique"> Afrique </h4>

                    <div className="row">
                        {tournoisLoaded && tournoisData  ? tournoisData.map((data, key) => {
                            return (
                                (data.continent === 'Afrique' && data.type === 'Compétition') ?
                                    <div className="col-md-6 mt-2" key={key} >
                                        <a href="/" className="text-dark"> {data.entitled} </a>
                                    </div>
                                    :
                                    <></>
                            );
                        }) : <></>}
                    </div>
                </div>
                <br></br>
                <div className="col-md-12 mt-2" >
                    <h4 className="border-bottom mt-4 pb-2 font-weight-bold" id="amn"> Am. du Nord et Centrale </h4>
                    <div className="row">
                        {tournoisLoaded && tournoisData ? tournoisData.map((data, key) => {
                            return (
                                (data.continent === 'Amérique du nord & centrale' && data.type === 'Compétition') ?
                                    <div className="col-md-6 mt-2" key={key} >
                                        <a href="/" className="text-dark"> {data.entitled} </a>
                                    </div>
                                    :
                                    <></>
                            );
                        }) : <></>}
                    </div>
                </div>
                <br></br>
                <div className="col-md-12 mt-2" >
                    <h4 className="border-bottom mt-4 pb-2 font-weight-bold" id="ams">Amérique du Sud</h4>
                    <div className="row">
                        {tournoisLoaded && tournoisData ? tournoisData.map((data, key) => {
                            return (
                                (data.continent === 'Amérique du sud' && data.type === 'Compétition') ?
                                    <div key={key} className="col-md-6 mt-2">
                                        <a href="/" className="text-dark"> {data.entitled} </a>
                                    </div>
                                    :
                                    <></>
                            );
                        }) : <></>}
                    </div>
                </div>
                <br></br>
                <div className="col-md-12 mt-2" >
                    <h4 className="border-bottom mt-4 pb-2 font-weight-bold" id="asie">Asie</h4>
                    <div className="row">
                        {tournoisLoaded && tournoisData ? tournoisData.map((data, key) => {
                            return (
                                (data.continent === 'Asie' && data.type === 'Compétition') ?
                                    <div key={key} className="col-md-6 mt-2">
                                        <a href="/" className="text-dark"> {data.entitled} </a>
                                    </div>
                                    :
                                    <></>
                            );
                        }) : <></>}
                    </div>
                </div>
                <br></br>
                <div className="col-md-12 mt-2" >

                    <h4 className="border-bottom mt-4 pb-2 font-weight-bold" id="europe">Europe</h4>
                    <div className="row">
                        {tournoisLoaded && tournoisData ? tournoisData.map((data, key) => {
                            return (
                                (data.continent === 'Europe' && data.type === 'Compétition') ?
                                    <div key={key} className="col-md-6 mt-2">
                                        <a href="/" className="text-dark"> {data.entitled} </a>
                                    </div>
                                    :
                                    <></>
                            );
                        }) : <></>}
                    </div>
                </div>
                <br></br>
                <div className="col-md-12 mt-2" >
                    <h4 className="border-bottom mt-4 pb-2 font-weight-bold" id="monde">Monde</h4>
                    <div className="row">
                        {tournoisLoaded && tournoisData ? tournoisData.map((data, key) => {
                            return (
                                (data.continent === 'Monde' && data.type === 'Compétition') ?
                                    <div key={key} className="col-md-6 mt-2">
                                        <a href="/" className="text-dark"> {data.entitled} </a>
                                    </div>
                                    :
                                    <></>
                            );
                        }) : <></>}
                    </div>
                </div>
                <br></br>
                <div className="col-md-12 mt-2" >
                    <h4 className="border-bottom mt-4 pb-2 font-weight-bold" id="oceanie">Océanie</h4>
                    <div className="row">
                        <div className="col-md-6 mt-2">
                            <a href="/" className="text-dark">Qualif. Coupe du Monde - OFC</a>
                        </div>
                    </div>

                </div>

            </div>

        </>



    )
}
export default PageSingleStanding;
