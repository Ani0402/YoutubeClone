import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Box} from '@mui/material'
import './App.css';
import {Feed,VideoDetail,ChannelDetail,Navbar,SearchFeed} from './components/fileExport'
function App() {
  return (
    <BrowserRouter>
     <Box sx={{backgroundColor:"#000"}}>
      <Navbar/>
     <Routes>
        <Route exact path='/' element={<Feed/>}/>
        <Route path='/video/:id' element={<VideoDetail/>}/>
        <Route path='/channel/:id' element={<ChannelDetail/>}/>
        <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
     </Routes>
     </Box>
    </BrowserRouter>
  );  
} 

export default App;
