import CircularProgress, {
    CircularProgressProps,
  } from '@mui/material/CircularProgress';
  import Typography from '@mui/material/Typography';
  import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
export default function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number,label:string,colorOfPrograss:string },
  ) {
    const [progress,setProgress] = useState(0);
    useEffect(()=>{
      setTimeout(()=>{
        setProgress(props.value);
      },800);
    },[]);
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" sx={{color:props.colorOfPrograss }} size={100} value={progress}  />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            flexDirection:"column",
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="text.secondary"
          >{`${Math.round(props.value)}%`}</Typography>
          <Typography variant="caption"
            component="div"
            color="text.secondary">
                {props.label}
            </Typography>
        </Box>
      </Box>
    );
  }