import React from 'react'
import { MainLayout, InnerLayout} from "../styles/Layout"
import Title from '../Components/Title'
import { FaFacebookF } from "react-icons/fa";
const ContactPage = () => {
  return (
    <MainLayout>
            <InnerLayout>
            <Title title={'Contact'} span={'Contact'}/>
            </InnerLayout>
            <a href="https://www.facebook.com/parames.sripeth/" target="_blank">
              <FaFacebookF className="icons" size={"5%"} /></a>
            </MainLayout>
  )
}

export default ContactPage