import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    const card =[
        "/img/card1.svg",
        "/img/card2.svg",
        "/img/card3.svg",
        "/img/card4.svg",
        "/img/card5.svg",
        "/img/card6.svg",
    ]
    const listItems =['Careers','Warranty Policy','sell with us','Terms of Use','Terms of Sale','Privacy Policy','Consumers Rights']
  return (
    <Box sx={{backgroundColor:'#f7f7fa', padding:'20px 20px 40px 20px', borderTop:'1px solid rgb(226, 229, 241)'}}>
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Typography variant='p' color='gray'>
            © 2024 noon. All Rights Reserved
            </Typography>
            <Box sx={{display:'flex', gap:'20px'}}>
            {card.map((li,i)=>{
                return(
                    <Typography key={i} component='div'>
            <img src={li} alt="Card" />
            </Typography>
                )
            })}
            </Box>

        </Box>
            <Box>
        <List sx={{display:'flex', padding:'0', gap:'20px'}}>
          {listItems.map((li,i)=>{
            return(
      <ListItem key={i} sx={{padding:'0', width:'fit-content',color:'GrayText', ":hover":{textDecoration:'underline',cursor:'pointer'}}}
     
        >
        <ListItemText sx={{ fontSize:'12px !important'}} primary={li}
         />
      </ListItem>
            )
          })}
      
    </List>
        </Box>

    </Box>
  )
}

export default Footer