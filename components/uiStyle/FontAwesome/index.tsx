import React, {FC} from 'react';
export interface PageFontAwesomeProps {
    name: string;
    color?:string
    rest? : string
  
  }
  
const FontAwesome: FC<PageFontAwesomeProps> = ({name ,color, ...rest }) => {

    return (
        <i {...rest} className={`fa fa-${name}`} color ={color}/>
    );
};

export default FontAwesome;
