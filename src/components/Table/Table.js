import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row
} from "shards-react";

import {TableRowAdder} from "../TableRowAdder/TableRowAdder";
import {tableActions} from "../../redux/slices/table.slice";
import {TableBody} from "../TableBody/TableBody";
import PageTitle from "../Common/PageTitle";

const Account = () => {
  const [active, setActive] = useState(false);

  const [query] = useSearchParams({});

  const {table} = useSelector(state => state.tableReducer);

  const dispatch = useDispatch();

  const statusChanger = (id) => {
    try {
      dispatch(tableActions.update({id, status: true}));
    } catch (e) {
      console.log('error');
    }
  };

  const deleter= (id) => {
    try {
      dispatch(tableActions.deleteById({id}));
    } catch (e) {
      console.log('error');
    }
  };

  useEffect(() => {
    try {
      dispatch(tableActions.getTable({company: query.get('company')}));
    } catch (e) {
      console.log('error');
    }
  }, [dispatch, query]);


  return (
    <Container fluid className="main-content-container">
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Company table"
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
                  <th scope="col" className="border-0 ">№</th>
                  <th scope="col" className="border-0">Company</th>
                  <th scope="col" className="border-0">Name of game</th>
                  <th scope="col" className="border-0">Price</th>
                  <th scope="col" className="border-0">Currency</th>
                  <th scope="col" className="border-0">Date</th>
                  <th scope="col" className="border-0">Date of payment</th>
                </tr>
                </thead>
                <tbody>
                {
                  !!table.length &&
                  table.map(row => <TableBody key={row._id} row={row} statusChanger={statusChanger}deleter={deleter}></TableBody>)
                }
                </tbody>
              </table>
            </CardBody>
          </Card>
        </Col>
      {active && <TableRowAdder setActive={setActive}/>}
      </Row>
      {!active && <div className="d-table m-auto pb-3">
        <Button theme="success" onClick={() => setActive(true)}>Add table row</Button>
      </div>}
    </Container>
  )
};

export {Account};
