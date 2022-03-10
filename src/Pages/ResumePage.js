import React from 'react'
import { MainLayout, InnerLayout} from "../styles/Layout"
import Title from '../Components/Title'
import ProgressBar from "@ramonak/react-progress-bar";
import styled from "styled-components";

const ResumePage = () => {
  return (
    <ResumeStyle>
    <MainLayout>
    <InnerLayout>
            <Title title={'Resume'} span={'Resume'}/>
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
`

export default ResumePage