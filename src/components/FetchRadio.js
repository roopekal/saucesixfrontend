import React, {useState, useEffect} from 'react';
import KyselyTesti from './Kyselyt';
import RadioButtonKysymys from './RadioButtonKysymys';

function FetchRadio(){
    const [kysely, setKysely] = useState ([]);
    const [kysymys, setKysymys] = useState ([]);
    const [msg, setMsg] = useState ('Searching...')
    const [jsonKysymys, setJsonKysymys] = useState ('');
    
const fetchUrl = async () =>{
    try {
        const response = await fetch('https://saucesix.herokuapp.com/getkysely');
        const json = await response.json();
        setKysely(json);
        setKysymys(json.kysymykset[0])
        setJsonKysymys(JSON.stringify(json))
        setMsg('');
        } catch (error) {
            setMsg('No information was found!')
        }
}

/* const {kysely} = this.kysely.kysymykset
  kysely.map((item, index) =>{
      if(index === 0){
          return(<div>{item.nimi}</div>)
      }
  })*/

useEffect( () => { fetchUrl() }, []);



return(
    <RadioButtonKysymys 
    tiedot={kysymys} 
    answer={kysymys} 
    jiisoni={jsonKysymys}
    kysely={kysely}
    />
);

}
export default FetchRadio;

