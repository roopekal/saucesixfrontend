import React, { useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuList from '@material-ui/core/MenuList';
import InfoIcon from '@material-ui/icons/Info';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import Drawer from '@material-ui/core/Drawer';
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';
import CreateIcon from '@material-ui/icons/Create'
import ListIcon from '@material-ui/icons/List'
import { Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    toolbar: {
      minHeight: 128,
      alignItems: 'flex-start',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
    },
  }));

function MenuMUI() {
    const classes = useStyles();
    const [anchorMenu, setMenuOpen] = useState(null);

    const handleMenu = (event) => { setMenuOpen(event.currentTarget); }

    const handleClose = () => { setMenuOpen(null);  }

    const [open, setOpen ] = useState(false);

    const handleOpen = () => { 
      setOpen(true); 
    }
  
    const handleCloseDrawer = () => { 
      setOpen(false); 
    }
    const [value, setValue] = useState(0);
const handleChange = (event, val) => {
setValue(val);
}

    return(
    <div>   
        <AppBar position='static'>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
    <Tab label="Vastaa kysymykseen" component={Link} to='/'/>
    <Tab label="testiradio" component={Link} to='/radio'/>
    <Tab label="kyselyt" component={Link} to='/kyselyt' />
    <Tab label="WIP" component={Link} to='/RadioKysymysApi'/>
   
    
   
    
  </Tabs>
            </AppBar>
        <MenuList>
            <Menu
                anchorEl={ anchorMenu }
                open={ Boolean(anchorMenu) }
                onClose={ handleClose }
                anchorOrigin={ {vertical: 'bottom', horizontal: 'left'} }
                getContentAnchorEl={null}
                onClose={handleClose}>
            <MenuItem onClick={ handleClose } component={Link} to='/'>
                <ListItemIcon><CreateIcon /></ListItemIcon>                          
                <ListItemText primary='Etusivu' />
            </MenuItem>
            <MenuItem onClick={ handleClose } component={Link} to='/radio'>
                <ListItemIcon><CreateIcon /></ListItemIcon>                          
                <ListItemText primary='Etusivu' />
            </MenuItem>
            <MenuItem onClick={ handleClose } component={Link} to='/kyselyt'>
                <ListItemIcon><CreateIcon /></ListItemIcon>                          
                <ListItemText primary='Etusivu' />
            </MenuItem>
            <MenuItem onClick={ handleClose } component={Link} to='/fasd'>
                <ListItemIcon><CreateIcon /></ListItemIcon>                          
                <ListItemText primary='Etusivu' />
            </MenuItem>
            
            </Menu>
        </MenuList>
    </div>
    )
}

export default MenuMUI;