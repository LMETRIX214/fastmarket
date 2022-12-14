import { useEffect, useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { collection, addDoc, getDocs } from "firebase/firestore";
import mydb from "../firebase/firebaseConfig";
import React, { Component } from 'react';

const HomeContent = () => {
  const [laptops, setLaptops] = useState([]);

  const obtenerDatos = async () => {
    const datos = await getDocs(collection(mydb, "laptops"));

    datos.map(doc => console.log(doc))
  
    // datos.forEach((doc) => {
    //   console.log(`${doc.id} => ${JSON.parse(doc.data())}`);
    //   setLaptops(datos.map((doc) => doc.data()));

    //   const newLaptops = [...laptops, doc.data()];
    //   setLaptops(newLaptops);
    //   console.log(doc.data());
    //   console.log(laptops);
    // });
  };



  useEffect(() => {
    console.log("use effect")
    
    obtenerDatos();
  }, []);

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/T.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/S.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/P.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <Container style={{ marginTop: 30, marginBottom: 30 }}>
        <Row>
          <Col md={6} lg={6} className="text-center mb-4">
            <img
              style={{ width: "100%", borderRadius: 10 }}
              src="./assets/left-promo.webp"
              alt="left-promo"
            />
          </Col>
          <Col md={6} lg={6} className="text-center mb-4">
            <img
              style={{ width: "100%", borderRadius: 10 }}
              src="./assets/right-promo.webp"
              alt="left-promo"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeContent;
