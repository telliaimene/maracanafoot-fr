import React, {FC } from "react";
export interface PageNewsLetterProps {
    input_white?:string
    className?:string
    titleClass?:string
  }
  const NewsLetter: FC<PageNewsLetterProps> = ({className, input_white, titleClass}) => {
    return (
        <div className={`box widget news_letter mb30 ${className ? className : ''}`}>
            <h2 className={`widget-title ${titleClass}`}>NEWSLETTER</h2>
            <p>Inscrivez-vous ci-dessous pour recevoir notre lettre d’information et ne rien rater de l’actualité</p>
            <div className="space-20"/>
            <div className="signup_form">
                <form>
                    <input className={`signup ${input_white ? 'white_bg' : ''}`} type="email"
                           placeholder="Votre adresse email"/>
                    <button type="button" className="cbtn">S’inscrire</button>
                </form>
                <div className="space-10"/>
                {/* <p>We hate spam as much as you do</p> */}
            </div>
        </div>
    );
};

export default NewsLetter;