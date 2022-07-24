import React ,{FC} from "react";
import { ClapSpinner } from "react-spinners-kit";
export interface SpinnerProps {

  loading?:boolean

}

const Spinner: FC<SpinnerProps> = ({ loading}) => {
  return (
    <div >

        <div className="m-2 p-2" style={{  position: "absolute" ,top: "15%", left: "50%", transform: "translate(-50%, -50%)"}}>
          <ClapSpinner size={30}   frontColor= "#4F46E5" backColor= "#4F46E5" loading={loading} />
        </div>
    </div>
  );
};
export default Spinner;
