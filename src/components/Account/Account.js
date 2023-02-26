import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row
} from "shards-react";

import PageTitle from "../common/PageTitle";
import {ScoreAdder} from "../ScoreAdder/ScoreAdder";
import React, {useState} from "react";

const Account = () => {
  const [active,      setActive] = useState(false);


  return (
    <Container fluid className="main-content-container">
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Company Tables" subtitle="User account"
                   className="text-sm-left"/>
      </Row>
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Cart</h6>
            </CardHeader>
            <CardBody className="p-0 pb-4">
              <table className="table mb-0">
                <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    idfff
                  </th>
                  <th scope="col" className="border-0">
                    Company
                  </th>
                  <th scope="col" className="border-0">
                    Game Name
                  </th>
                  <th scope="col" className="border-0">
                    Payment
                  </th>
                  <th scope="col" className="border-0">
                    Currency
                  </th>
                  <th scope="col" className="border-0">
                    Date
                  </th>
                  <th scope="col" className="border-0">
                    Date of payment
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>Ali</td>
                  <td>Kerry</td>
                  <td>Russian Federation</td>
                  <td>Gdańsk</td>
                  <td>107-0339</td>
                  <td>107-0339</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Clark</td>
                  <td>Angela</td>
                  <td>Estonia</td>
                  <td>Borghetto di Vara</td>
                  <td>1-660-850-1647</td>
                  <td>107-0339</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Jerry</td>
                  <td>Nathan</td>
                  <td>Cyprus</td>
                  <td>Braunau am Inn</td>
                  <td>214-4225</td>
                  <td>107-0339</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Colt</td>
                  <td>Angela</td>
                  <td>Liberia</td>
                  <td>Bad Hersfeld</td>
                  <td>
                    <button>Time</button>
                  </td>
                  <td>107-0339</td>
                </tr>
                </tbody>
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {
        active &&
        <ScoreAdder setActive={setActive}/>
      }
      {
        !active && <div className="d-table m-auto">
        <Button theme="primary" onClick={() => setActive(true)}>Add Score</Button>
      </div>
      }
    </Container>
  )
};

export {Account};
