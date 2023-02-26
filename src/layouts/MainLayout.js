import MainSidebar from "../components/Layout/MainSidebar/MainSidebar";
import React from "react";
import {Col, Container, Row} from "shards-react";
import MainNavbar from "../components/Layout/MainNavbar/MainNavbar";
import MainFooter from "../components/Layout/MainFooter";
import {Outlet} from "react-router-dom";

const MainLayout = () => {


  return (
    <Container fluid>
      <Row>
        <MainSidebar/>
        <Col
          className="main-content p-0"
          lg={{size: 10, offset: 2}}
          md={{size: 9, offset: 3}}
          sm="12"
          tag="main"
        >
          <MainNavbar/>
          <Outlet/>
          <MainFooter/>
        </Col>
      </Row>
    </Container>
  );
};

export {MainLayout};
