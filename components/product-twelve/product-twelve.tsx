import React, { useState, useEffect, FC } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { LazyLoadImage } from "react-lazy-load-image-component";
import moment from 'moment';
import { API_LINK, IMAGES_LINK } from '../../utils/constantes';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
    addNewUser, removeUser, UserID, UserType, authRedirectPath, onSetRedirectPath
} from "../../store/login/auth";
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
export interface PageProductProps {
    product: JournalI | undefined
}


const ProductTwelve: FC<PageProductProps> = ({ product }) => {
    const user = useAppSelector(UserID)
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [maxPrice, setMaxPrice] = useState(0);
    const [minPrice, setMinPrice] = useState(99999);

    // useEffect( () => {
    //     let min = minPrice;
    //     let max = maxPrice;
    //     product.variants.map( item => {
    //         if ( min > item.price ) min = item.price;
    //         if ( max < item.price ) max = item.price;
    //     }, [] );

    //     if ( product.variants.length == 0 ) {
    //         min = product.sale_price
    //             ? product.sale_price
    //             : product.price;
    //         max = product.price;
    //     }

    //     setMinPrice( min );
    //     setMaxPrice( max );
    // }, [] )

    // function onCartClick ( e ) {
    //     e.preventDefault();
    //     props.addToCart( product );
    // }

    // function onWishlistClick ( e ) {
    //     e.preventDefault();
    //     if ( !isInWishlist( props.wishlist, product ) ) {
    //         props.addToWishlist( product );
    //     } else {
    //         router.push( '/shop/wishlist' );
    //     }
    // }

    // function onCompareClick ( e ) {
    //     e.preventDefault();
    //     if ( !isInCompare( props.comparelist, product ) ) {
    //         props.addToCompare( product );
    //     }
    // }



    return (
        <div className="product w-100" style={{ border: "none" }}>
            {/* {
                product.new ?
                    <span className="product-label label-new">New</span>
                    : ""
            }

            {
                product.sale_price ?
                    <span className="product-label label-sale">Sale</span>
                    : ""
            }

            {
                product.top ?
                    <span className="product-label label-top">Top</span>
                    : ""
            }

            {
                product.stock == 0 ?
                    <span className="product-label label-out">Out of Stock</span>
                    : ""
            } */}

            <figure className="product-media">
                {user ?
                    <Link href={API_LINK + product?.pdf}>

                        <a style={{ textDecoration: "none" }} >
                            <LazyLoadImage
                                alt="product"
                                src={product?.image?.includes(".pdf") ? IMAGES_LINK + product?.image.replace("uploads", "pdf") : IMAGES_LINK + product?.image.replace("uploads", "image.php?size=300x370&f=")}
                                threshold={500}
                                effect="black-and-white"
                                wrapperClassName="product-image"
                            />
                        </a>

                    </Link>
                    :
                    <button onClick={() => { dispatch(onSetRedirectPath(API_LINK + product?.pdf)), router.push("/login") }}>
                        <LazyLoadImage
                            alt="product"
                            src={product?.image?.includes(".pdf") ? IMAGES_LINK + product?.image.replace("uploads", "pdf") : IMAGES_LINK + product?.image.replace("uploads", "image.php?size=300x370&f=")}
                            threshold={500}
                            effect="black-and-white"
                            wrapperClassName="product-image"
                        />
                    </button>
                }
            </figure>

            <div >
                <h3 style={{
                    textDecoration: "none", color: "#061da5",
                    fontWeight: "bold !important",
                    fontSize: "15px"
                }}>
                    {user ?
                        <Link href={API_LINK + product?.pdf} style={{ fontWeight: "bold" }}>
                            <a style={{
                                fontWeight: "bold !important",
                            }}>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {moment(product?.date).format('DD/MM/YYYY')}

                            </a>

                        </Link> :
                        <button  style={{
                            textDecoration: "none", color: " #061da5",
                            fontWeight: "bold",
                            fontSize: "15px"
                        }} onClick={() => { dispatch(onSetRedirectPath(API_LINK + product?.pdf)), router.push("/login") }} className="hover:text-red-500 dark:text-neutral-300 text-neutral-600">

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{moment(product?.date).format('DD-MM-YYYY')}

                        </button>}

                </h3>
                <div className="product-cat" >
                    {

                        <React.Fragment >
                            {user ?
                                <Link href={API_LINK + product?.pdf}>
                                    <a style={{
                                        textDecoration: "none", color: " #000",
                                        fontWeight: "bold",
                                        fontSize: "15px"
                                    }} >
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {"N°" + product?.numero}

                                    </a>

                                </Link>
                                :
                                <a style={{
                                    textDecoration: "none", color: " #000",
                                    fontWeight: "bold",
                                    fontSize: "15px"
                                }}> <button  style={{
                                    textDecoration: "none", color: " #000",
                                    fontWeight: "bold",
                                    fontSize: "15px"
                                }}onClick={() => { dispatch(onSetRedirectPath(API_LINK + product?.pdf)), router.push("/login") }} >
                                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"N°" + product?.numero}

                                    </button></a>
                            }

                        </React.Fragment>

                    }
                </div>




            </div>
        </div>
    )
}


export default (ProductTwelve);
