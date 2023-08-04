import React from "react";
import "./TextField.scss";
type TextFieldProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const TextField = (props : TextFieldProps) => {
  
  return (
    <div className="TextField">
        <label>
            <input className="TextField_input" {...props} />
        </label>
    </div>
  )
}

export default TextField;