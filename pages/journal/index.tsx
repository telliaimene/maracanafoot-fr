// Import Custom Component
import React, { useState, useEffect } from 'react'
import ProductTwelve from '../../components/product-twelve/product-twelve';
import ButtonPrimaryLogin from "../../components/Button/ButtonPrimaryLogin";
import axios from 'axios'
import moment from 'moment';
import Input from '../../components/Input/Input'
import { API_LINK } from '../../utils/constantes'
import HeaderContainer from '../../containers/HeaderContainer/HeaderContainer';
import { UserID } from "../../store/login/auth";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useRouter } from 'next/router';
import Spinner from '../../components/spinner';
import Pagination from '../../components/Pagination/Pagination';
export interface JournalI {
    _id: String | number
    numero: string
    state: string
    date: string
    publishedHour: string
    pdf: string
    image: string
    lng: string
}
function Journal() {
    const router = useRouter();
    const query = useRouter().query;
    const [totalCount, setTotalCount] = useState(0);
    const [startDate, setStartDate] = useState("");
    const [numero, setNumero] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const perPage = 20
    const [products, setProducts] = useState<JournalI[] | undefined>(undefined);
    const [productSearch, setProductSearch] = useState<JournalI | undefined>(undefined);
    useEffect(() => {
        if (router.isReady) {
            const page = query.page ? Array.isArray(query.page) ? query.page[0] : query.page : ""
            getNewsPaper(page ? parseInt(page) : 1, perPage)
        }
    }, [query.page, router.isReady])
    const getNewsPaper = async (page: number, limit: number) => {
        console.log('here in get')
        await axios.get(API_LINK + 'v1/Journalpaginationlangue/' + "FR/" + page + '/' + limit).then(res => {
            setProducts(res.data.journals)
            setTotalCount(res.data.totalPages)

        }).catch(err => {
            setProducts(undefined)
            setIsLoading(false)
            console.log('err', err)
        })
    }
    useEffect(() => {
        if (products) {
            setIsLoading(false)
        }
    }, [products])
    const userId = useAppSelector(UserID);

    const recherche = async () => {
        if (startDate !== '') {
            await axios.get(API_LINK + 'v1/GetJournalByDate/' + moment(startDate).format('YYYY-MM-DD') + '/' + 'FR' + '/'
            )
                .then(response => {
                    console.log('GetJournalByNum23555', response.data)
                    // let table :JournalI[] =[response.data]
                    setProductSearch(response.data),

                        setNumero("")
                    setProducts(undefined)

                })
                .catch(err => {
                    setProductSearch(undefined),
                        setProducts(undefined)
                }
                )
        } else if (numero != '') {
            await axios.get(API_LINK + 'v1/GetJournalByNum/' + numero + '/')
                .then(response => {
                    console.log('GetJournalByNum', response.data)
                    // let table :JournalI[] =[response.data]
                    setProductSearch(response.data),
                        setStartDate("")
                    setProducts([])
                })
                .catch(err => {
                    setProductSearch(undefined),
                        setProducts(undefined)
                }
                )
        }

    }
    const ChangeNum = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value !== "")
            setNumero(e.target.value),
                setStartDate("")

        else {
            getNewsPaper(1, perPage)
            setProductSearch(undefined)
            setStartDate(""),
                setNumero("")
        }

    }

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value !== "") {
            setStartDate(e.target.value),
                setNumero("")
        }
        else {
            getNewsPaper(1, perPage)
            setProductSearch(undefined)
            setStartDate(""),
                setNumero("")
        }

    }



    return (
        <>
            <HeaderContainer user={userId} />
            {isLoading ?
                //<></>:
                <Spinner loading={isLoading} /> :
                <div className="page-wrapper">

                    <div className="bestseller-products pt-5 pb-5 mb-5">
                        <div className="block">
                            <div className="block-wrapper">
                                <div className="container">

                                    <div className="heading heading-flex ">

                                        {/* <div className="col-xl-5col col-lg-4 col-md-3 col-6">  */}

                                        <div className="flex flex-col mt-12 lg:mt-16 space-y-5 md:space-y-0 md:space-x-3 md:flex-row md:justify-between md:items-center sm:mb-3 xs:mb-3">
                                            <div className="flex flex-col md:flex-row  sm:flex-row  space-y-5 sm:space-y-0 sm:space-x-3">
                                            <div className=" mt-2" >
                                                    <label dir='rtl'
                                                        htmlFor="search-input"
                                                        className="text-neutral-500 dark:text-neutral-300"
                                                    >
                                                        <Input
                                                        style={{backgroundColor:"rgb(6, 29, 165)"}}
                                                            value={startDate}
                                                            placeholder="MM/DD/YYYY"
                                                            className="shadow text-white rounded-xl border-opacity-0 "
                                                            type="date"
                                                            name="startDate"
                                                            id="startDate"
                                                            defaultValue={""}
                                                            onChange={handleDateChange}
                                                            sizeClass="pl-4 py-3 pr-2 md:pl-5"
                                                        />
                                                    </label>
                                                </div>

                                                <div className="relative mt-2" >
                                                    <label
                                                        htmlFor="search-input"
                                                        className="text-neutral-500 dark:text-neutral-300"
                                                    >
                                                        <span className="sr-only">Search all icons</span>
                                                        <Input
                                                        style={{backgroundColor:"rgb(6, 29, 165)"}}
                                                            id="numero"
                                                            type="search"
                                                            name="numero"
                                                            //value={numero}
                                                            onChange={ChangeNum}
                                                            placeholder="Entrez un numéro"

                                                            className="shadow rounded-xl text-white border-opacity-0"
                                                            sizeClass="pl-14 py-3 pr-2 md:pl-10"
                                                            defaultValue=""

                                                        />
                                                        <span className="absolute left-5 top-1/2 transform -translate-y-1/2 text-2xl  ">
                                                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                <path
                                                                    stroke="white"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="1.5"
                                                                    d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
                                                                ></path>
                                                            </svg>
                                                        </span>
                                                    </label>
                                                </div>

                                            </div>

                                            <div className="flex flex-row  sm:space-y-0 sm:space-x-3">
                                                <ButtonPrimaryLogin sizeClass="px-3 py-2 sm:px-2" fontSize="text-sm sm:text-base font-small" onClick={() => recherche()} >Rechercher <i className='ml-1 fa fa-search'></i></ButtonPrimaryLogin>
                                                &nbsp;&nbsp;
                                                <ButtonPrimaryLogin sizeClass="px-3 py-2 sm:px-2" fontSize="text-sm sm:text-base font-small" onClick={() => { getNewsPaper(1, perPage), setNumero(''), setStartDate(""), setProductSearch(undefined) }} >Réinitialiser<i className='ml-1 fa fa-refresh'></i></ButtonPrimaryLogin>

                                            </div>


                                        </div>



                                    </div>

                                    {/* <OwlCarousel adClass="carousel-equal-height owl-simple" options={productSlider}>
                                    
                                    {
                                        products.length > 0 ?
                                            products.slice(0,20).map((item, index) =>
                                            <div className='col-6 col-md-4 col-lg-4 col-xl-3'>
                                           
                                                <ProductTwelve product={item} key={"Latest:" + index} />
                                              </div>
                                            )
                                            :
                                            new Array(6).fill(1).map((item, index) => (
                                                <div className="skel-pro" key={"Skeleton" + index}></div>
                                            ))
                                    }
                           
                                </OwlCarousel> */}

                                    < div className="products mb-3">

                                        {(products?.length == 0 && !isLoading && productSearch == null) ?
                                            <p
                                                className="no-results"
                                            >Liste des journaux est vide!.</p>
                                            :
                                            productSearch ?
                                                <div className='col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12' >
                                                    <ProductTwelve product={productSearch} />
                                                </div>
                                                :
                                                <>


                                                    <div className="row">
                                                        {
                                                            isLoading ?
                                                                new Array(6).fill(1).map((item, index) => (
                                                                    <div className='col-6 col-md-4 col-lg-4 col-xl-3' key={index}>
                                                                        <div className="skel-pro"></div>
                                                                    </div>
                                                                ))
                                                                :
                                                                products?.map((item, index) => (
                                                                    moment().isAfter(moment(item.publishedHour)) ?
                                                                        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 pb-3' key={index}>
                                                                            <ProductTwelve product={item} key={"Latest:" + index} />
                                                                        </div>
                                                                        : null

                                                                ))
                                                        }
                                                    </div>


                                                </>
                                        }
                                    </div>


                                </div>


                            </div>

                        </div>

                        <div >
                            <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center align-items-center justify-content-center">
                                {totalCount > perPage && products?.length ? (
                                    <Pagination perPage={perPage} total={totalCount * perPage} />
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </div>


                </div>
            }
        </>
    )
}

export default Journal;
