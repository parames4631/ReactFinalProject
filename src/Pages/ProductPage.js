import React from 'react'
import { Image, Badge, Spinner, Button } from "react-bootstrap"
import axios from 'axios';
import { BiDollarCircle } from "react-icons/bi"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MainLayout, InnerLayout } from "../styles/Layout"
import styled from "styled-components";
import Title from '../Components/Title'
import { addtoCart } from '../redux/actions/cartAction';
import { useDispatch, useSelector } from 'react-redux'
const ProductPage = () => {

    const [product, setProduct] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cartReducer.cart)
    const total = useSelector((state) => state.cartReducer.total)

    const getData = async () => {
        try {
            setLoading(true)
            const resp = await axios.get('https://api.codingthailand.com/api/course')
            // console.log(resp.data)
            setProduct(resp.data.data)
        } catch (error) {

            // console.log(error.response)
            setError(error)
        }
        finally {
            setLoading(false)
        }

    }

    React.useEffect(() => {

        getData()

    }, [])

    if (loading === true) {
        return (
            <div className="text-center mt-5">
                <Spinner animation="border" variant="info" />
            </div>
        )
    }

    if (error) {
        return (
            <div className="text-center mt-5 text-danger">
                <h4> Error form API, plese try again </h4>
                <p>{error.response.data.message}</p>
            </div>
        )
    }
    const addCart = (p) => {
        const product ={
            id: p.id,
            name: p.title,
            price: p.view, //สมมติ view = price
            qty: 1
        }

       // call action
       dispatch(addtoCart(product, cart))
       //console.log(p)
   }

    return (
        <ProductStyle>
        <MainLayout>
            
            <InnerLayout>
            <Title title={'Product'} span={'Product'}/>
                <TableContainer component={Paper} className="ta">


                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead >
                            <TableRow className="cl">
                                <TableCell >ID</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Detail</TableCell>
                                <TableCell>Created Date</TableCell>
                                <TableCell>View</TableCell>
                                <TableCell>Picture</TableCell>
                                <TableCell>Detail</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="ci">

                            {
                                product.map((p, index) => {
                                    return (
                                        <TableRow key={p.id}>
                                            <TableCell >{p.id}</TableCell>
                                            <TableCell >{p.title}</TableCell>
                                            <TableCell >{p.detail}</TableCell>
                                            <TableCell >{p.date}</TableCell>
                                            <TableCell > <Badge variant="dark">{p.view}</Badge>{' '}</TableCell>
                                            {/* <td >{p.picture}</td> */}
                                            <TableCell> <Image src={p.picture} rounded width={60} /></TableCell>
                                            <Button variant="outline-info" className="ml-2" onClick= { ()=> addCart(p) }>Buy <BiDollarCircle></BiDollarCircle> </Button>
                                            
                                        </TableRow>
                                    )
                                })
                            }

                        </TableBody>
                    </Table>
                </TableContainer>
            </InnerLayout>
        </MainLayout>
        </ProductStyle>
    )
}
const ProductStyle = styled.div`
.ta {
    width : 80%;
    margin-left: 7%;
    margin-right: 1%;
    margin-top: 10%;
    
  }
.cl{
    background-color : #1338be;
}
.ci{
    background-color : #0492c2;
}
`

export default ProductPage