import React, { useState } from 'react';
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
    button: {
        margin: theme.spacing(1),
        marginLeft: '250%'

    },
}));

function Kysely(props) {
   const url = props.lahetys





    return (
        
        <div>   
            {console.log(url)}
            {console.log("testi2")}
        <p>tekstiä</p>
        </div>
        /*<Container className={classes.root} maxWidth="sm">

            <Paper >
                {console.log(props.answer)}
                <form onSubmit={handleSubmit} >
                    {props.tiedot.map((t) => (
                        <FormControl component="fieldset">
                            <FormLabel className={classes.vastaus} component="legend"> {t.nimi} </FormLabel>
                            <Grid className={classes.root} container spacing={3}>
                                <RadioGroup aria-label="radiokysymys" name="radiokysymys1" value={value} onChange={handleChange}>
                                    {props.answer[0].vastaukset.map((v) => (
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
                                    */ 
    );

}


export default Kysely;