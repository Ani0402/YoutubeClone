import { Box,Stack } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'


const Videos = ({videos,direction}) => {
  if(!videos.length) return 'Loading...'
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={3}>
      
      {
        videos.map((item,ind)=>{
          return (
              <Box key={ind} >
                {item.id.videoId && <VideoCard video={item}/>}
                {item.id.channelId && <ChannelCard channelDetail={item}/>}
              </Box>
          )
        })
      }

    </Stack>
  )
}

export default Videos;
