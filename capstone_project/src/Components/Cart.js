import React, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";

const Cart = () => {
    const baseAPI = 'https://fakestoreapi.com/carts?limit=5'

    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get(baseAPI)
            setData(response.data);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])
    return ( <Container fluid>
        <Row>
            {data.map((item) => (
                <Col key={item.id} xs={6} md={4} lg={3} xl={2} ><li 
                id={item.products.productId}
                title={item.quantity} 
                price={item.price} 
                description={item.description}
                category={item.category}
                image={item.image}
                ></li></Col>
            ))}
        </Row>
    </Container>)
}

export default Cart