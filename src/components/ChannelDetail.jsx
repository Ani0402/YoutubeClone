import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import Videos from './Videos'
import ChannelCard from './ChannelCard';
import { fetchFromAPI, fetchFromApi } from "../utils/fetchFromApi";


function ChannelDetail() {
 
  const [channelDetail,setChannelDetail]=useState(null)
  const [videos,setVideos] = useState([])


  const {id}=useParams();
  useEffect(()=>{
     fetchFromApi(`channels?part="snippet&id=${id}`)
     .then((data)=>setChannelDetail(data?.items[0]))

     fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
     .then((data)=>setVideos(data?.items))
  },[id])

  return (

    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,90,1) 42%, rgba(0,212,255,1) 100%",
          zIndex:10,
          height:'300px'
        }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-120px" />
      </Box>
      <Box display="flex" p="3" >
       <Box sx={{mr:{sm:'100px'}}}/>
        <Videos videos={videos}></Videos>
      </Box>
    </Box>
  )
}

export default ChannelDetail
