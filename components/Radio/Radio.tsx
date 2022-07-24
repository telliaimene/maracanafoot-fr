import React from "react";
export interface RadioProps {
  className?:string
  name: string;
  label?: string;
  id: string;
  value?:string|number
  checked?:boolean

}
const Radio: React.FC<RadioProps> = ({ name, label, id ,value,checked,className=""}) => {
  return (
    <div className={className+" flex items-center"}>
      <input
        id={id}
        name={name}
        type="radio"
        value={value}
        checked={checked}
        className="focus:ring-action-primary h-4 w-4 text-action-primary border-primary"
      />
      {label && (
        <label
          htmlFor={id}
          className="ml-3 block text-paragraph-small text-black dark:text-white"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Radio;
