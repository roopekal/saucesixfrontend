import React, { useState, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  vastaus: {
    paddingLeft: 30,
    padding: theme.spacing(1),
      textAlign: 'center',
  },
  button:{
    margin: theme.spacing(1),
    marginLeft: '250%'
  
  },
  }));
  
  function RadioKysymysApi() {
   
    const classes = useStyles();
    const [vastattu, setVastattu] = useState(false);
    const [vastattu2, setVastattu2] = useState(false);
    const [value, setValue] = useState('');
    const [vastaus, setVastaus] = useState('');
    const [kysymys, setKysymys] = useState([]);
    const [msg, setMsg] = useState ('Searching...')

    const handleChange = (event) => {
      setValue(event.target.value);
      if (event.target.value === vastaus[0].teksti){
        setVastattu(true)
        setVastattu2(false)
        console.log("paskaaaaaaaaa")
      }else{
        setVastattu2(true)
        setVastattu(false)
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
          nimi: kysymys[0].nimi,
          vastaukset: [
          { teksti: vastaus[0].teksti, onko: vastattu },
          { teksti: vastaus[1].teksti, onko:  vastattu2 }]
        })})
    }
    const fetchKysymys = async () =>{
        try {
            const response = await fetch('https://saucesix.herokuapp.com/api/kysymyses');
            const json = await response.json();
            setKysymys(json);
            setMsg('');
            } catch (error) {
                setMsg('No information was found!')
            }
    }
    const fetchVastaus = async () =>{
        try {
            const response = await fetch('https://saucesix.herokuapp.com/api/vastauses');
            const json = await response.json();
            setVastaus(json);
            setMsg('');
            } catch (error) {
                setMsg('No information was found!')
            }
    }
    useEffect( () => { fetchKysymys() }, []);
    useEffect( () => { fetchVastaus() }, []);
  
  
  return (
    
    <Container className={classes.root} maxWidth="sm">
     
       <Paper >
       {console.log(kysymys)}
    <form onSubmit={handleSubmit} >
      {kysymys.map((k) => (
        <FormControl  component="fieldset">
          <FormLabel className={classes.vastaus} component="legend"> {k.nimi} </FormLabel>
          <Grid className={classes.root} container spacing={3}>
          <RadioGroup aria-label="radiokysymys" name="radiokysymys1" value={value} onChange={handleChange}>
            {vastaus.map((v) => (
              <Grid className={classes.vastaus} item xs>
              <Paper><FormControlLabel value={v.teksti} control={<Radio />} label={v.teksti} /></Paper>
              </Grid>
              ))}
          </RadioGroup>
          </Grid>
          
          <Button className={classes.button} type="submit" variant="outlined" color="primary">
            Submit
        </Button>
        
        </FormControl>
      
      ))}
    </form>
    </Paper> 
    </Container>
   
  );
  
  }

  export default RadioKysymysApi;