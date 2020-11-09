import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


function RadioButtonsKysymys(props) {
  const [vastattu, setVastattu] = useState(false);
  const [vastattu2, setVastattu2] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === props.answer[0].vastaukset[0].teksti){
      setVastattu(true)
      console.log("paskaaaaaaaaa")
    }else{
      setVastattu2(true)
    console.log("kustaaaaaaaaaa")
  };

};

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://saucesix.herokuapp.com/postaus', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nimi: props.tiedot[0].nimi,
        vastaukset: [
        { teksti: props.answer[0].vastaukset[0].teksti, onko: vastattu },
        { teksti: props.answer[0].vastaukset[1].teksti, onko:  vastattu2 }]
      })})
  }



return (
  <form onSubmit={handleSubmit} >
    {console.log(props.jiisoni)}
    {props.tiedot.map((t) => (
      <FormControl component="fieldset">
        <FormLabel component="legend"> {t.nimi} </FormLabel>
        <RadioGroup aria-label="radiokysymys" name="radiokysymys1" value={value} onChange={handleChange}>
          {props.answer[0].vastaukset.map((v) => (
            <FormControlLabel value={v.teksti} control={<Radio />} label={v.teksti} />
          ))}
        </RadioGroup>
        <button type="submit" variant="outlined" color="primary">
          Submit
      </button>
      </FormControl>
    ))}
  </form>
);
}

export default RadioButtonsKysymys;
// <FormControlLabel value="testi2" control={<Radio />} label="Male" />
