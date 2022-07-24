import Header from "../../components/Header/Header";
import SubHeader from "../../components/Header/SubHeader";
import React, { FC } from "react";
import { useAppSelector } from "../../store/hooks";
import { selectCurrentPageData } from "../../store/pages/pages";
import {useRouter} from "next/router"
export interface HeaderContainerProps {
  className?: string;
  user:string|number;
  data?:string []
}

const HeaderContainer: FC<HeaderContainerProps> = ({ className = "" ,user,data}) => {
  const router=useRouter()
  const currentPage = useAppSelector(selectCurrentPageData);
  const sport=data?data[0]:router.query.id?router.query.id[0]:""
  const competition=data?data[1]:router.query.id?router.query.id[1]:""
  
  console.log("router header",sport)
  return<>
  <Header currentPage={currentPage} user={user} />
{sport==="Football" && competition?
    <SubHeader currentPage={currentPage} user={user} competition={competition} />
    :null
}

  </> 
};

export default HeaderContainer;
