import {Container, Row} from "shards-react";

import PageTitle from "../Common/PageTitle";

const Home = () => {

  return (
    <Container fluid className="main-content-container">
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Just empty home page"
                   className="text-sm-left"/>
      </Row>
    </Container>
  );
};

export {Home};
