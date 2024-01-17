import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, CardHeader } from '@mui/material';
import { green } from '@mui/material/colors';
import { MdOutlineLockClock } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { BsCartPlus } from "react-icons/bs";
import { FaStar } from 'react-icons/fa';

export default function ProductCard(props) {
  return (
    <Card sx={{ maxWidth: 250, border:'1px solid #ccc' }}>
        <CardMedia >

        <Box sx={{position:'relative', display:'inline-block', margin:'10px', marginBottom:'0'}}>
            <Box sx={{position:'absolute', top:'0', left:'0', width:'100%', height:'100%', backgroundColor:'#f7f7fa', mixBlendMode:'multiply', borderRadius:'10px'}}></Box>
      <img src={props.img} alt="Card" width='100%' style={{display:'block', height:'auto'}}/>
      <Typography position='absolute' top='10px' right='10px' sx={{backgroundColor:'#fff', width:'36px',height:'36px', borderRadius:'50%', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <CiHeart size={24}/>
      </Typography>
      
      <Typography component="div" position='absolute' bottom='10px' left='10px' fontSize={12} fontWeight={600} sx={{backgroundColor:'#fff', padding:'5px 10px', borderRadius:'10px'}}>
        {props.rating} <FaStar color='green' size={12}/> <span style={{fontSize:'12px', color:'gray',marginLeft:'5px'}}>{props.lrating}</span>
        </Typography>
        <Typography component="div" position='absolute' bottom='10px' right='10px' sx={{backgroundColor:'#fff', width:'36px',height:'36px', borderRadius:'50%', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <BsCartPlus size={24}/>
      </Typography>
     
        </Box>
        </CardMedia>
      <CardContent sx={{paddingTop:'0',paddingBottom:'16px!important'}}>
        <Typography gutterBottom variant="p" component="div" fontSize={14} fontWeight={600}>
          {props.name}
        </Typography>
        <Typography gutterBottom variant="p" component="div" fontSize={14} fontWeight={600}>
          {props.desc}
        </Typography>
        <Box sx={{display:'flex', gap:'10px'}}>
        <Typography gutterBottom variant="p" component="div" fontWeight={700}>
         <span style={{fontSize:'12px'}}>AED</span> {props.price} 
        </Typography>
        <Typography gutterBottom variant="p" component="div" fontSize={14} sx={{textDecoration:'line-through', color:'gray'}}>
          {props.cutPrice} 
        </Typography>
        <Typography gutterBottom variant="p" component="div" color={green[900]} fontSize={14}>
          9% 
        </Typography>
        </Box>
        <Typography gutterBottom variant="p" component="div" fontSize={14} margin='5px 0px'>
        <MdOutlineLockClock color='darkorange'/> {props.sell} 
        </Typography>
       
          <img src={props.market} alt="market" width={60}/>
      
        
      </CardContent>
      
    </Card>
  );
}