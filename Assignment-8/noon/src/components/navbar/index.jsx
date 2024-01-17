import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { Divider, Input, List, ListItem, ListItemText } from '@mui/material';
import { FaAngleDown, FaCaretDown, FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';

const listItems = ['ELECTRONIC', 'MEN', 'WOMEN', 'HOME', 'BEAUTY&FRAGRANCE', 'BABY', 'TOYS', 'SPORTS', 'HEALTH&NUTRITION', 'BESTSEL' ];


export default function Navbar() {
 
  return (
    <Box>
      <AppBar position="static" sx={{ background: "rgb(254, 238, 0)", color:'#000', padding:'15px 10px'}}>
        <Box sx={{display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center'}}>
        
            <Box sx={{display:'flex', gap:'20px'}}>
            <img src="/img/logo.svg" alt="Logo" width={100}/>
            <Box sx={{display:'flex', gap:'10px', alignItems:'center'}}>
                <img src="/img/uae-flag.svg" alt="Flag" width={40} />
                <Box  sx={{ fontSize:'12px'}}>
                
                    <p>Deliver to  <FaAngleDown fontSize={15}/></p>
                    <p>Dubai</p>
                </Box>
            </Box>
            </Box>
         
          <Box sx={{width:'50%'}}>
          <Input disableUnderline fullWidth  placeholder='What are you looking for?' type='text'  sx={{width:'100%', background:'#fff', border:'none', padding:'5px 10px',borderBottom:'none', borderRadius:'5px', outline:'none', ":focus":'none'}}/>
              </Box>
              <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <Box sx={{borderRight:'1px solid #ccc', marginRight:'10px'}}>
                    <p style={{marginRight:'10px'}}>
                العربية
                    </p>
                </Box>
                <Box sx={{borderRight:'1px solid #ccc',  marginRight:'10px'}}>
                    <p style={{marginRight:'10px'}}>
                Log in
                <span style={{marginLeft:'5px'}}><IoPersonOutline color='gray' size={20}/></span>
                    </p>
                </Box>
                <Box sx={{borderRight:'1px solid #ccc',  marginRight:'10px'}}>
                    <p style={{marginRight:'10px'}}>
                Wishlist
                <span style={{marginLeft:'5px'}}><FaRegHeart color='gray' size={20}/></span>
                    </p>
                </Box>
                <Box>
                    <p style={{marginRight:'10px'}}>
                Cart
                <span style={{marginLeft:'5px'}}><IoCartOutline color='gray' size={20}/></span>
                    </p>
                </Box>
              </Box>
        </Box>
      </AppBar>

      <Box sx={{display:'flex', alignItems:'center',margin:'0'}}>
        <Box sx={{width:'200px', height:'100%', display:'flex', justifyContent:'space-between',marginRight:'10px'}}>
          <p style={{marginLeft:'20px', color:'blue'}}>ALL CATEGORIES </p>
          <FaCaretDown color='blue' />
          
        </Box>
        <Box>
        <List sx={{display:'flex', padding:'0',borderLeft:'1px solid #ccc'}}>
          {listItems.map((li,i)=>{
            return(
      <ListItem key={i} sx={{padding:'10px 8px', textAlign:'center', ":hover":{boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',cursor:'pointer'}}}
     
        >
        <ListItemText sx={{ fontSize:'12px !important'}} primary={li}
         />
      </ListItem>
            )
          })}
      
    </List>
        </Box>
        
      </Box>

  
        <img src="/img/banner11.avif" alt="BannerImage" width='100%'/>
    
    </Box>
  );
}