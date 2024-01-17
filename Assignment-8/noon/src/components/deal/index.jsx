import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { BsCartPlus } from "react-icons/bs";


const Deal = () => {
    const data =[
        {
            img:'/img/deal1.jpg',
            name:'Switch Headboard - Twin Size Bed Glossy White Color - Size 934 X 2060 X 950 - Modern Home white 934*2060*950mm ',
            cutPrice:'939',
            Price:'289 AED',
            deal:"Bedroom Furnituredeals"
        },
        {
            img:'/img/deal2.jpg',
            name:'Comforter Set, Noon East & more',
            cutPrice:'',
            Price:'Up to 80% off',
            deal:'Comforters & Sets deals'
        },
        {
            img:'/img/deal3.jpg',
            name:'Switch Headboard - Twin Size Bed Glossy White Color - Size 934 X 2060 X 950 - Modern Home white 934*2060*950mm ',
            cutPrice:'399',
            Price:'199 AED',
            deal:'Kitchen & Dining deals'
        },
        {
            img:'/img/deal4.jpg',
            name:'Switch Headboard - Twin Size Bed Glossy White Color - Size 934 X 2060 X 950 - Modern Home white 934*2060*950mm ',
            cutPrice:'220',
            Price:'69 AED',
            deal:'Kitchen & Home Appliances deals'
        },
    ] 
  return (
   <Box sx={{backgroundColor:'#c6ebfc', padding:'20px 10px'}}>
    <Typography component='div' variant='h5' fontWeight={600} marginBottom='20px'>Deals only on noon</Typography>
    <Box sx={{display:'flex', gap:'20px', justifyContent:'space-between'}}>
        {data.map((li, i)=>{
            return(

    <Card key={i} sx={{width:'100%', maxWidth: 320 }}>
      <CardMedia sx={{display:'flex', position:'relative', justifyContent:'center', padding:'30px 0 0 0'}}>
            <Typography fontWeight={600} component="div" position='absolute' top='0px' right='0px' sx={{backgroundColor:'rgb(100, 118, 176)', color:'#fff', padding:'3px 5px', borderBottomLeftRadius:'5px' }}>
        {li.deal}
      </Typography>
            <Typography component="div" position='absolute' bottom='10px' right='10px' sx={{backgroundColor:'#fff', width:'36px',height:'36px', borderRadius:'50%', display:'flex', justifyContent:'center', alignItems:'center', boxShadow:'rgba(0, 0, 0, 0.15) 0px 2px 4px'}}>
        <BsCartPlus size={24}/>
      </Typography>
        <Box sx={{position:'relative',marginTop:'5px'}}>
            <img src={li.img} alt="CardImage" width='130px'/>
        </Box>
      </CardMedia>
      <CardContent sx={{backgroundColor:'#f7f7fa',paddingBottom:'16px!important',height:'100%'}}>
        <Typography gutterBottom variant="p" fontSize={18} component="div" sx={{display:'-webkit-box', WebkitLineClamp:'2', WebkitBoxOrient:'vertical',overflow:'hidden'}}>
          {li.name}
        </Typography>
        <Typography fontWeight={600} fontSize={18}>
         <span style={{textDecoration:'line-through'}}>{li.cutPrice}</span> {li.Price}
        </Typography>
      </CardContent>
 
    </Card>
            )
        })}

    </Box>
   </Box>
  )
}

export default Deal