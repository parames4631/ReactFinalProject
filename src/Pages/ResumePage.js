import React from 'react'
import { MainLayout, InnerLayout } from "../styles/Layout"
import Title from '../Components/Title'
import ProgressBar from "@ramonak/react-progress-bar";
import styled from "styled-components";
import { DiVisualstudio } from "react-icons/di";
import { SiAdobepremierepro, SiAdobephotoshop } from "react-icons/si";
import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import logo from '../img/logo.jpg';
import robbers from '../img/robbers.jpg';
import sakura from '../img/sakura.jpg';
import it13 from '../img/it13.jpg';

const ResumePage = () => {
  return (
    <ResumeStyle>
      <MainLayout>
        <InnerLayout>
          <Title title={'My Skils'} span={'My Skils'}   />
        </InnerLayout>
        <p>React Js</p>
        <ProgressBar completed={50} animateOnRender customLabel="Basic" className='Progress' baseBgColor="#9897a9" bgColor="#2832c2" />
        <p>CSS</p>
        <ProgressBar completed={50} animateOnRender customLabel="Basic" className='Progress' baseBgColor="#9897a9" bgColor="#2832c2" />
        <p>WordPress</p>
        <ProgressBar completed={50} animateOnRender customLabel="Basic" className='Progress' baseBgColor="#9897a9" bgColor="#2832c2" />
        <p>SQL</p>
        <ProgressBar completed={60} animateOnRender customLabel="Basic" className='Progress' baseBgColor="#9897a9" bgColor="#2832c2" />
        <p>scripting</p>
        <ProgressBar completed={70} animateOnRender customLabel="intermediate" className='Progress' baseBgColor="#9897a9" bgColor="#2832c2" />
        <p>Acting</p>
        <ProgressBar completed={70} animateOnRender customLabel="intermediate" className='Progress' baseBgColor="#9897a9" bgColor="#2832c2" />
        <InnerLayout>
          <Title title={'Software Skils'} span={'Software Skils'} />
        </InnerLayout>
        <div className="center">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >

            <Grid item xs={3}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={4}>
                  <DiVisualstudio className="icons" size={"100%"} />
                </Grid>
                <Grid item xs={8}>
                  <p className="p">Visual Studio Code</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={4}>
                  <SiAdobephotoshop className="icons" size={"100%"} />
                </Grid>
                <Grid item xs={8}>
                  <p className="p">Adobe PhotoShop</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={4}>
                  <SiAdobepremierepro className="icons" size={"100%"} />
                </Grid>
                <Grid item xs={8}>
                  <p className="p">Adobe Premierepro</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>

        <InnerLayout>
          <Title title={'Work'} span={'Experienced'} />
        </InnerLayout>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia className='logo'
              component="img"
              height="140"
              image={logo}

              
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                P5TV and Production
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ได้เข้าฝึกงานที่บริษัท P5TV and Production
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <InnerLayout>
          <Title title={'Portfolio'} span={'Portfolio'} />
        </InnerLayout>
        <h1 className='font'>เด็กตื่นไฟ</h1>
        <br></br>
        <div className='center'>
        <iframe  width="560" height="315" src="https://www.youtube.com/embed/ioa3tiwUTKs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <br></br>
        <h1 className='font'>ภาพยนตร์โฆษณา The Robbers ปล้นไม่ได้ปล้น (DC)</h1>
        <br></br>
        <div className='center'>
        <img src={robbers} ></img>
        </div>
        <h1 className='font'>Mc Sakura Camp12 </h1>
        <br></br>
        <div className='center'>
        <img src={sakura} ></img>
        </div>
        <h1 className='font'>MC IT Freshy Camp13 </h1>
        <br></br>
        <div className='center'>
        <img src={it13} ></img>
        </div>
      </MainLayout>
    </ResumeStyle>
  )
}
const ResumeStyle = styled.div`
.Progress {
  width : 95%;
  margin-top: 1%;
  margin-bottom: 1%;

}
.p {
  margin-top : 15%;
}
.logo {
 width : 100%;
}
.font{
  font-family: 'Athiti', sans-serif ;
  font-weight : 100;
  font-size: 2rem;
  color : #00ebb3;
  font-weight : bold;
  

}
.center{
  display: flex;
  align-items: center;
  justify-content: center;
}

`

export default ResumePage