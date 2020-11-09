import React, {useState, useEffect} from 'react';
import RadioButtonKysymys from './RadioButtonKysymys';

function FetchRadio(){

    const [kysymys, setKysymys] = useState ([]);
    const [msg, setMsg] = useState ('Searching...')
    const [vastaus, setVastaus] = useState ('');
    const [jsonKysymys, setJsonKysymys] = useState ('');
const fetchUrl = async () =>{
    try {
        const response = await fetch('https://saucesix.herokuapp.com/getkys');
        const json = await response.json();
        setKysymys(json);
        setVastaus(json.vastaukset.teksti)
        setJsonKysymys(JSON.stringify(json))
        setMsg('');
        } catch (error) {
            setMsg('No information was found!')
        }
}

useEffect( () => { fetchUrl() }, []);



return(
    <RadioButtonKysymys tiedot={kysymys} answer={kysymys} jiisoni={jsonKysymys}/>
    
);

}
export default FetchRadio;

