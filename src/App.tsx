import './App.css';
import CustomButton from './components/CustomButton/CustomButton.tsx';
import TextField from './components/TextField/TextField.tsx';
import {useState} from "react";
import CustomCheckBtn from './components/CustomCheckBtn/CustomCheckBtn.tsx';
import Accordion from './components/Accordion/Accordion.tsx';
import AlertDialog from './components/AlertDialog/AlertDialog.tsx';

function App() {

  function UpdateText(){
    console.log("Added to cart");
  }

  const [form, setForm] = useState<object>({});
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);


 
function HandleForm (event : any){

  console.log("succeed !")

  const formUpdated = {...form, [event.target.name] : event.target.value}
  setForm(formUpdated);

}
function IsDarkMode(event:any){
  event.preventDefault();

  const currentMode = isDarkMode==false ? "darkMode": "lightMode";
  setIsDarkMode(!isDarkMode);
  setForm({...form, mode : currentMode});
  console.log({...form, mode : currentMode});
}

const [response, setResponse]=useState<string>("");

function Agreement(){
  setResponse("Acceptée");
}

function Disagreement(){
  setResponse("Refusée");
}

const listItems = [ { title : "Is it accessible ?", description: "Yes. It adheres to the WAI-ARIA design pattern."},
{ title : "Is it unstyled ?", description: "Yes. It's unstyled by default, giving you freedom over the look and feel."},
{ title : "Can it be animated ?", description: "Yes! You can animate the Accordion with CSS or JavaScript."}]

  return (
    <>
      <Accordion items={listItems} />
      <CustomButton text='Hello' onClick={UpdateText} variant='outlined' svgIcon={""} />
      <CustomButton text='Hello' onClick={UpdateText} variant='contained' svgIcon={""} />
      <TextField name="prenom" type='text' required = {true} title='Prénom:' onChange={HandleForm} placeholder='Prénom *'/>
      <TextField name="nom" type="text" title="Nom:" required={true} onChange={HandleForm} placeholder='Nom'/>
      <CustomCheckBtn id='darkMode' onClick={IsDarkMode} />
      <h1>{response}</h1>
      <AlertDialog title="Use Google's location service?" description="Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running." buttonText='Open alert dialog' agreeOnClick={Agreement} disagreeOnClick={Disagreement} />
    </>
  )
}


export default App
