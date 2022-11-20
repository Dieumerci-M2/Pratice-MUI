import './App.css'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Rightbar from '../components/Rightbar'
import Navbar from '../components/Navbar'
import { Box, Stack } from '@mui/material'
import AddPost from '../components/AddPost'

function App() {

  return (
    <Box>
      <Navbar /> 
      <Stack direction='row' spacing={2} sx={{justifyContent:'space-between'}}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <AddPost/>
    </Box>
  )
}

export default App
