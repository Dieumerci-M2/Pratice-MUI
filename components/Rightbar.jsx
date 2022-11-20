import { Box, Typography, Avatar, AvatarGroup, ImageList, ImageListItem } from '@mui/material'
import React from 'react'



const Rightbar = () => {
  return (
   <Box sx={ { display: { xs: 'none', sm: 'block' } } } flex={ 2 } p={ 2 }>
      <Box position='fixed'>
        <Box mt={2} sx={{borderButtom:'1px solid black'}}>
          <Typography fontWeight={ 200 }>Online Friends</Typography>
        </Box>
        <Box mt={1}>
          <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="../src/assets/b.jpg" />
          <Avatar alt="Travis Howard" src="../src/assets/c.jpg" />
          <Avatar alt="Cindy Baker" src="../src/assets/d.jpg" />
          <Avatar alt="Agnes Walker" src="../src/assets/e.jpg" />
          <Avatar alt="Trevor Henderson" src="../src/assets/f.jpg" />
          </AvatarGroup>
        <Box mt={2} sx={{borderButtom:'1px solid black'}}>
          <Typography fontWeight={ 200 }>Latest Pictures</Typography>
        </Box>
        <Box mt={2}>
          <ImageList sx={{width:200, height:200}} cols={3} rowHeight={100} >
            <ImageListItem>
                <img
                  src='../src/assets/f.jpg'
                  alt=""
                />  
            </ImageListItem>
            <ImageListItem>
                <img
                  src='../src/assets/e.jpg'
                  alt=""
                />  
            </ImageListItem> 
            <ImageListItem>
                <img
                  src='../src/assets/d.jpg'
                  alt=""
                />  
            </ImageListItem>  
          </ImageList>
        </Box>  
        </Box>
      </Box>
    </Box>
  )
}


export default Rightbar