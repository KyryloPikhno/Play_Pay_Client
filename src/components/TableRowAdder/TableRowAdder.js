import {useDispatch} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";
import {
  Button,
  Card, CardBody, CardHeader,
  ListGroup,
  ListGroupItem,
} from "shards-react";

import {tableActions} from "../../redux/slices/table.slice";
import {newTableRowValidator} from "../../validators";
import css from './TableRowAdder.module.css';

const TableRowAdder = ({setActive}) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: {errors, isValid}
  } = useForm({
    defaultValues: {
      "companyName": null,
      "gameName": null,
      "currency": null,
      "totalPrice": null,
      "confirm": null
    },
    resolver: joiResolver(newTableRowValidator),
    mode: 'all'
  });

  const dispatch = useDispatch();

  const submit = async (tableRow) => {
    try {
      tableRow.status = false;

      dispatch(tableActions.create({tableRow}));
    } catch (e) {
      console.error('Error', e);
    }
    reset();

    setActive(false);
  };

  return (
    <div className={css.popup}>
      <Card small className="mb-11 p-2">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Add payment</h6>
        </CardHeader>
        <CardBody className="p-0">
          <ListGroup flush>
            <form onSubmit={handleSubmit(submit)}>
              <ListGroupItem className="p-3">
                <div className="input-group">
                  <select id="disabledSelect" className="form-control" {...register('companyName')}>
                    <option value="">Choice company</option>
                    <option value='Company 1'>Company 1</option>
                    <option value='Company 2'>Company 2</option>
                    <option value='Company 3'>Company 3</option>
                    <option value='Company 4'>Company 4</option>
                    <option value='Company 5'>Company 5</option>
                  </select>
                  {errors.companyName && <span>{errors.companyName.message}</span>}
                </div>

                <div className="input-group pt-2">
                  <input type="text" className="form-control"
                         id="validationDefaultUsername"
                         aria-describedby="inputGroupPrepend2"
                         placeholder={'Name of game'} {...register('gameName')}/>
                  {errors.gameName && <span>{errors.gameName.message}</span>}
                </div>

                <div className="form-row pt-2">
                  <div className="col-md-8 mb-3">
                    <input type="number" className="form-control" placeholder={'Price'} {...register('totalPrice')}/>
                    {errors.totalPrice && <span>{errors.totalPrice.message}</span>}
                  </div>

                  <div className="col-md-4 mb-3">
                    <select id="disabledSelect" className="form-control" placeholder={'Currency'} {...register('currency')}>
                      <option defaultValue='USD'>USD</option>
                      <option value='EU'>EU</option>
                    </select>
                    {errors.currency && <span>{errors.currency.message}</span>}
                  </div>

                </div>
                <div className="form-group">
                  <div className="form-check pl-5">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" placeholder={'Confirm'} {...register('confirm')}/>
                    {errors.confirm && <span>{errors.confirm.message}</span>}
                    <label className="form-check-label" htmlFor="invalidCheck">
                      Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem className="d-flex px-3 border-0">
                <Button disabled={!isValid} size="ml">Submit</Button>
                <Button onClick={() => setActive(false)} theme="warning" size="sm" className="ml-auto">Cansel</Button>
              </ListGroupItem>
            </form>
          </ListGroup>
        </CardBody>
      </Card>
    </div>
  );
};


export {TableRowAdder};
