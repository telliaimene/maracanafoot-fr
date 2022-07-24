import React, {FC} from "react";
import { ArticleDataType } from "../data/types";
export interface PageSportsNewsProps {
   
    data:ArticleDataType[],
  
   
  }

function mostViewSort(data:ArticleDataType[]) {
    let initial = 0;
    let secondFirst = Math.floor(data.length / 2) - 1;
    let results :ArticleDataType [] =  data.map((item, i) => {
        if (i % 2) {
            secondFirst += 1;
            return({...data[secondFirst], id: secondFirst + 1});
        } else {
            initial += 1;
           return({...data[initial], id: initial});
        }
    });
    return results;
}

export {
    mostViewSort
};