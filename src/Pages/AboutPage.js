import React from 'react'
import Title from '../Components/Title'
import { MainLayout, InnerLayout} from "../styles/Layout"
import avatar from '../img/eiei.jpg';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import LaptopMacIcon from '@mui/icons-material/LaptopMac';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';



const AboutPage = () => {
  return (
    <>
        <MainLayout>
            <InnerLayout>
            <Title title={'About me'} span={'About me'}/>
            </InnerLayout>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6} marginBottom={2} marginRight={"3%"}>
            <div style={{ paddingLeft: "10%" }}>
            <img src={avatar} ></img>
            </div>
            </Grid>
            <Grid item xs={5} marginBottom={2}>
              <div>
            <p>Name : Parames Sripeth</p>
            <p>NickName : Dong</p>
            <p>Dath of birth : 10 MAY 2000</p>
            <p>University : Thai-Nichi Institute of Technology</p>
            <p>Faculty : Information Technology</p>
            </div>
            </Grid>
            </Grid>
            <InnerLayout>
            <Title title={'Education'} span={'History'}/>
            </InnerLayout>
            <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HistoryEduIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          Junior High School 2013 - 2015
          </Typography>
          <Typography>Thairath Wittaya 75 School</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          High School 2015 - 2018
          </Typography>
          <Typography>Rattanakosin Bangkhen School</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HistoryEduIcon />
          </TimelineDot>
          <TimelineConnector  />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          College 2019 - 2022
          </Typography>
          <Typography>Thai-Nichi Institute of Technology</Typography>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>
        </MainLayout>
       
      
    </>
  )
}



export default AboutPage