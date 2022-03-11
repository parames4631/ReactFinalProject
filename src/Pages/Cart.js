import React from "react";
import Table from '@mui/material/Table';
import { useSelector } from 'react-redux'
import Title from '../Components/Title'
import { MainLayout, InnerLayout } from "../styles/Layout"
import TableHead from '@mui/material/TableHead';
import styled from "styled-components";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
export default function CartPage() {
    const cart = useSelector((state) => state.cartReducer.cart)

  return (
    <ProductStyle>
    <MainLayout>
        <InnerLayout>
                <Title title={'Cart'} span={'cart'}/>
                </InnerLayout>
                <TableContainer className="ta">
                    <Table striped bordered hover>
                    
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead >
              <TableRow className="cl">
                <TableCell >ID</TableCell>
                <TableCell>ProductID</TableCell>
                <TableCell>ProductName</TableCell>
                <TableCell>ProductPrice</TableCell>
                <TableCell>qty</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="ci">
            {

                cart.map((c, index) => {
                    return (
                        <TableRow key={c.id}>
                            <TableCell>{++index}</TableCell>
                            <TableCell>{c.id}</TableCell>
                            <TableCell>{c.name}</TableCell>
                            <TableCell>{c.price}</TableCell>
                            <TableCell>{c.qty}</TableCell>
                            <TableCell>{c.price * c.qty}</TableCell>

                        </TableRow>
                    )

                })
            }
            </TableBody>
          </Table>
          
          </Table>
          </TableContainer>
          </MainLayout>
          </ProductStyle>
  )

}
const ProductStyle = styled.div`
.ta {
    width : 90%;
   
    margin-top: 1%;
    
  }
.cl{
    background-color : #1338be;
}
.ci{
    background-color : #0492c2;
}
`