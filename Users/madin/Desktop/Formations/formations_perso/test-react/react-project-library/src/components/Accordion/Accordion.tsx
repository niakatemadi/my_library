import "./Accordion.scss";
import { useState } from "react";
import iconRight from "../../assets/right-arrow.svg";
import iconDown from "../../assets/down-arrow.svg";

type AccordionProps = {
    items : Array<any>
}

const Accordion = (props : AccordionProps) => {
    const [itemTargeted, setItemTargeted] = useState<number>()
    
    function DisplayInformation(index: number){
        setItemTargeted(index);
        
    }

  return (
    <div className="Container">
        {
            props.items.map((element, index) => {
                
               return (
                   <section className="Accordion">
                   <div className='Accordion_title' onClick={() => DisplayInformation(index)}> <p>{ element.title }</p> <div>{index == itemTargeted ? <img src={iconDown} alt="" /> : <img src={iconRight} alt="" />}</div></div> 
                   <div className={`Accordion_description ${index == itemTargeted && "Accordion_description--open"}`}><p>{ element.description }</p></div>
                   </section>
                )
            })
        }
                 
    </div>
  )
}

export default Accordion