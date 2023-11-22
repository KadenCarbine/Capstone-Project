import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import Card from 'react-bootstrap/Card';
import './Card.css'

const Cards = ({id, title, price, description, category, image}) => {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
      <>
        <Card className={category} style={{ width: '16rem', height: '40rem' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>${price}</Card.Text>
          <Button variant="primary" onClick={handleShow}>See More</Button>
          </Card.Body>
        </Card>
        <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {description}
          <div><img src={image} style={{width: '20rem' }}/></div>
          <hr/><div className="Cards-category">{category}</div>
          <div className="Cards-price">${price}</div>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </>
      );
    }
export default Cards