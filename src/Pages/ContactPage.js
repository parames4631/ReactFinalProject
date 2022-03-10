import React from 'react'
import { MainLayout, InnerLayout} from "../styles/Layout"
import Title from '../Components/Title'
import { FaFacebookF } from "react-icons/fa";
import {GrInstagram} from "react-icons/gr";
import {FiGithub} from "react-icons/fi";
import { Grid } from "@mui/material";
const ContactPage = () => {
  return (
    <MainLayout>
            <InnerLayout>
            <Title title={'Contact'} span={'Contact'}/>
            </InnerLayout>
            <div className="center">
         
            <Grid container spacing={24}>
          <Grid item md={4}>
            <a
              href="https://www.facebook.com/parames.sripeth/"
              target="_blank"
            >
              <FaFacebookF className="icons" size={"50%"}></FaFacebookF>
            </a>
          </Grid>
          <Grid item md={4}>
            <a href="https://www.instagram.com/ggnod.d/" target="_blank">
            <GrInstagram className="icons" size={"50%"}></GrInstagram>
            </a>
          </Grid>
          <Grid item md={4}>
            <a href="https://line.me/ti/p/NSev-lsBDc" target="_blank">
            <FiGithub className="icons" size={"65%"}></FiGithub>
            </a>
          </Grid>
        </Grid>
              </div>
            </MainLayout>
  )
}

export default ContactPage