import { useState } from "react";
import "./AlertDialog.scss";

type AlertDialogProps = {
    title: string,
    description: string,
    buttonText:string,
    agreeOnClick: any,
    disagreeOnClick: any
}

const AlertDialog = ({buttonText,title, description, agreeOnClick, disagreeOnClick}: AlertDialogProps) => {

    const [isDisplayed, setIsDisplayed] = useState<boolean>(false)

    function ShowAlert(){
        setIsDisplayed(!isDisplayed);
    }
    
    function HandlePropagation(e:any){
        e.stopPropagation();

    }

    function DisagreeTrigger(){
        disagreeOnClick();
        ShowAlert();
    }

    function AgreeTrigger(){
        agreeOnClick()
        ShowAlert();
    }

  return (
    <div className='AlertDialog'>
        <div className="AlertDialog_button AlertDialog_button--outlined" onClick={ShowAlert} >{buttonText}</div>
        <div className={`AlertDialog_background ${isDisplayed && "AlertDialog_background--displayed"}`} onClick={ShowAlert}  >
            <div className="AlertDialog_container" onClick={HandlePropagation} >
                <h3 className="AlertDialog_title" >{title}</h3>
                <p className="AlertDialog_description">{description}</p>
                <div className="AlertDialog_buttons"><div className="AlertDialog_button" onClick={DisagreeTrigger} >DISAGREE</div><div className="AlertDialog_button" onClick={AgreeTrigger}>AGREE</div></div>
            </div>
        </div>
    </div>
  )
}

export default AlertDialog