import React, { FC } from 'react';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faChevronDown from "@fortawesome/fontawesome-free-solid/faChevronDown"
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faTwitter, faViber, faYoutube, faSnapchat} from "@fortawesome/fontawesome-free-brands";
import { faEnvelope, faMobile, faMobileAlt } from "@fortawesome/fontawesome-free-solid";
import faFacebook from "@fortawesome/fontawesome-free-brands/faFacebook"

export interface FollowUsProps {

    className?: string
    title?: string

}
const facebook = faFacebook as IconProp;
const instagram = faInstagram as IconProp;
const twitter = faTwitter as IconProp;
const envlope = faEnvelope as IconProp;
const viber = faViber as IconProp;
const snapchat = faSnapchat as IconProp;

const youtube = faYoutube as IconProp;
const FollowUs: FC<FollowUsProps> = ({ className = '', title }) => {
    return (
        <div className={`follow_box widget mb30 ${className}`}>
            <h2 className="widget-title">{title}</h2>
            <div className="social_shares">
                <Link href="https://www.facebook.com/journalmaracanaalgerie">
                    <>
                        <a href="https://www.facebook.com/journalmaracanaalgerie" className="single_social social_facebook" target="_blank">
                            <span className="follow_icon">      <FontAwesomeIcon icon={facebook}></FontAwesomeIcon>
                            </span>
                            34,456 <span className="icon_text">Fans</span>
                        </a>
                    </>
                </Link>
                <Link href="https://twitter.com/maracanafoot">
                    <>
                        <a href="https://twitter.com/maracanafoot" className="single_social social_twitter" target="_blank">
                            <span className="follow_icon"><FontAwesomeIcon icon={twitter}></FontAwesomeIcon>
                            </span>
                            34,456 <span className="icon_text">Followers</span>
                        </a>
                    </>
                </Link>
                <Link href="https://www.youtube.com/channel/UCuVphVU-nPfPZ36lV2SEXaQ">
                    <>
                        <a href="https://www.youtube.com/channel/UCuVphVU-nPfPZ36lV2SEXaQ" className="single_social social_youtube" target="_blank">
                            <span className="follow_icon">      <FontAwesomeIcon icon={youtube}></FontAwesomeIcon>
                            </span>
                            34,456 <span className="icon_text">Subscribers</span>
                        </a>
                    </>
                </Link>
                <Link href="https://invite.viber.com/?g2=AQAYWsUjanSkvUx9gz%2Fa3rd8h2yWJCzPxW5pYIC1mzUuvmTRjQ6nLTnoxLjdCW4%2F&lang=fr">
                    <>
                        <a href="https://www.instagram.com/maracanafoot/?igshid=x8eixs1wyob1" className="single_social social_instagram" target="_blank"> <span className="follow_icon">  
                            <FontAwesomeIcon icon={viber}></FontAwesomeIcon>
                        </span>
                            34,456 <span className="icon_text">Followers</span>
                        </a>
                    </>
                </Link>
                <Link href="https://www.instagram.com/maracanafoot/?igshid=x8eixs1wyob1">
                    <>
                        <a href="https://invite.viber.com/?g2=AQAYWsUjanSkvUx9gz%2Fa3rd8h2yWJCzPxW5pYIC1mzUuvmTRjQ6nLTnoxLjdCW4%2F&lang=fr"
                            className="single_social social_viber" target="_blank">
                            <span className="follow_icon">      <FontAwesomeIcon icon={instagram}></FontAwesomeIcon>
                            </span>
                            34,456 <span className="icon_text">Followers</span>
                        </a>
                    </>
                </Link>
                <Link href="">
                    <>
                        <a href="" className="single_social social_snapchat" target="_blank">
                            <span className="follow_icon"><FontAwesomeIcon icon={snapchat}></FontAwesomeIcon></span>
                            34,456 <span className="icon_text">Followers</span>
                        </a>
                    </>
                </Link>
            </div>
        </div>
    );
};

export default FollowUs;
