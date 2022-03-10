import React from 'react'
import { MainLayout, InnerLayout} from "../styles/Layout"
import Title from '../Components/Title'
import ProgressBar from "@ramonak/react-progress-bar";
import styled from "styled-components";
import { SiUnity } from "react-icons/si";
import { DiVisualstudio, DiPhotoshop } from "react-icons/di";
import { SiAdobepremierepro ,SiAdobephotoshop} from "react-icons/si";
import { Grid } from "@mui/material";
const ResumePage = () => {
  return (
    <ResumeStyle>
    <MainLayout>
    <InnerLayout>
            <Title title={'My Skils'} span={'My Skils'}/>
    </InnerLayout>
    <p>React Js</p>
    <ProgressBar completed={50} customLabel="Basic" className='Progress' baseBgColor="#9897a9" bgColor="#2832c2"/>
    <p>CSS</p>
    <ProgressBar completed={50} customLabel="Basic" className='Progress' baseBgColor="#9897a9" bgColor="#2832c2"/>
    <p>WordPress</p>
    <ProgressBar completed={50} customLabel="Basic" className='Progress'baseBgColor="#9897a9" bgColor="#2832c2"/>
    <p>SQL</p>
    <ProgressBar completed={60} customLabel="Basic" className='Progress'baseBgColor="#9897a9" bgColor="#2832c2"/>
    <p>scripting</p>
    <ProgressBar completed={70} customLabel="intermediate" className='Progress'baseBgColor="#9897a9" bgColor="#2832c2"/>
    <p>Acting</p>
    <ProgressBar completed={70} customLabel="intermediate" className='Progress'baseBgColor="#9897a9" bgColor="#2832c2"/>
    <InnerLayout>
            <Title title={'Software Skils'} span={'Software Skils'}/>
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
`

export default ResumePage