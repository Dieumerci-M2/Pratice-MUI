import './App.css'
import React,{useState} from 'react';
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Rightbar from '../components/Rightbar'
import Navbar from '../components/Navbar'
import { Box, createTheme, Stack } from '@mui/material'
import AddPost from '../components/AddPost'
import { ThemeProvider } from '@emotion/react';
import Drawer from '../components/Drawer';

function App() {
  const [ mode, setMode ] = useState( 'light' )
  
  const darkTheme = createTheme( {
    palette: {
      mode: mode,
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
      <Navbar /> 
      <Stack direction='row' spacing={2} sx={{justifyContent:'space-between'}}>
          <Sidebar setMode={ setMode } mode={ mode} />
        <Feed />
        <Rightbar />
      </Stack>
      <AddPost/>
      </Box>
      <Stack sx={{alignItems:'center'}}>
        <Drawer />
      </Stack>
      
  </ThemeProvider>
  )
}

export default App
