import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Link, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import Kysely from './Kysely';

function Kyselyt() {

    
    const [value, setValue] = useState([]);
    const [kyselyt, setKyselyt] = useState([]);
    const [lahetys, setLahetys] = useState('');
    const kyselyOptions = []

    useEffect(() => fetchData(), [])


    useEffect(() => {
        if (kyselyt !== '') {
            kyselyt.map(kysely => kyselyOptions.push({ 
                label: kysely.nimi, 
                value: kysely._links.self.href
            }))
        }
    })

    const handleCreation = () => {
        {console.log("testi")}
        return (<Kysely lahetys ={lahetys} />);
    };

    const handleExport = (event) => {
        setLahetys(event.target.value)
        {console.log(lahetys)}
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const fetchData = () => {
        fetch('https://saucesix.herokuapp.com/api/kyselies')
        .then(response => response.json())
        .then(data => {
            setKyselyt(data._embedded.kyselies)
        })
    }

   

    return (

        <FormControl>
            {console.log(kyselyt[0])}
           
            <InputLabel id="testi-paska" style={{ fontSize: 22 }} >Valitse Kysely</InputLabel>
            <Select
                labelId="testi-paska"
                id="testi-kusi"
                options={kyselyOptions}
                onChange={handleChange, handleExport}
                style={{ minWidth: 200 }}
            >
            
            {kyselyt.map((k) =>
                <MenuItem 
                value={k._links.kysymykset.href} 
                >
                {k.nimi}
                </MenuItem>
            )}
            </Select>
            <Button onClick={handleCreation} type="submit" variant="outlined" color="primary">
            Submit
        </Button>
        </FormControl>




    );

}
export default Kyselyt;
