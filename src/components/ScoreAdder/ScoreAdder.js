import {useForm} from "react-hook-form";
import {
  Card,
  Form,
  ListGroup,
  ListGroupItem,
} from "shards-react";
import React from "react";
import InputGroups from "../components-overview/InputGroups";
import SeamlessInputGroups from "../components-overview/SeamlessInputGroups";

import css from './ScoreAdder.module.css';

const ScoreAdder = ({setActive}) => {

  const {handleSubmit, register, reset} = useForm()

  const submit = async ({text}) => {
    try {
      console.log(text);
    } catch (e) {
      console.error('Error', e)
    }
    reset()

    setActive(false)
  };

  return (
    <div className={css.popup}>
      <Card small>
        {/*<div className="d-flex justify-content-end">*/}
        {/*  <Button theme="secondary"*/}
        {/*          onClick={() => setActive(false)}>Close</Button>*/}
        {/*</div>*/}
        {/*<button onClick={() => setActive(false)} className="close" data-dismiss="modal"*/}
        {/*        aria-label="Close">*/}
        {/*  <span aria-hidden="true" >&times;</span>*/}
        {/*</button>*/}
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Create order</h5>
          <button className="close " data-dismiss="modal"
                  aria-label="Close">
            <span aria-hidden="true" onClick={() => setActive(false)}>&times;</span>
          </button>
        </div>
        {/*<CardHeader className="border-bottom">*/}
        {/*  <h6 className="m-0">Groups</h6>*/}
        {/*</CardHeader>*/}
        <ListGroup flush>
          <ListGroupItem className="px-3">
            <Form>
              <strong className="text-muted d-block mb-2">
                Input Groups
              </strong>
              <InputGroups/>

              <strong className="text-muted d-block mb-2">
                Seamless Input Groups
              </strong>
              <SeamlessInputGroups/>
            </Form>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};

export {ScoreAdder};
