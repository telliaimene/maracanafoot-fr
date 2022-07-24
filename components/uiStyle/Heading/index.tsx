import React, { useState , useEffect,FC } from "react";
export interface PageHeadingProps {
    className?: string;
    title:string
  }
  
  const Heading: FC<PageHeadingProps> = ({ className, title }) => {
    return (
        <div className={`heading ${className ? className : ''}`}>
            <h2 className="widget-title">{title}</h2>
        </div>
    );
};

export default Heading;