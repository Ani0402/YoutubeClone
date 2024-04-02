import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Paper,IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {

   const [searchTerm,setSearchTerm] = useState('')
   const navigate=useNavigate()


   const handleSubmit = (e) =>{
     e.preventDefault();
     if(searchTerm){
       navigate(`/search/${searchTerm}`)
     }
      setSearchTerm('')

   }
  return (
    <div>
      <Paper component="form" onSubmit={handleSubmit} sx={{borderRadius:20,border:'1px solid #e3e3e3',boxShadow:'none',mr:{sm:5}}}>
        <input value={searchTerm} className="search-bar" placeholder="Seaarch..." onChange={(e)=>setSearchTerm(e.target.value)}/>
        <IconButton type="submit" sx={{p:'10px',color:'red'}}>
          <SearchIcon/>
        </IconButton>
      </Paper>
    </div>
  )
}

export default SearchBar
