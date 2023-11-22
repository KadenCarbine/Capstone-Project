import React, { useState, useEffect} from "react";
import axios from "axios";
import Cards from "./Cards";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CardList = () => {
    const baseAPI = 'https://fakestoreapi.com/products'

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

        return(
        <>
        <Container fluid>
            <Row>
                {data.map((item) => (
                    <Col key={item.id} ><Cards 
                    id={item.id}
                    title={item.title} 
                    price={item.price} 
                    description={item.description}
                    category={item.category}
                    image={item.image}
                    ></Cards></Col>
                ))}
            </Row>
        </Container>
        </>
        )
    }
export default CardList