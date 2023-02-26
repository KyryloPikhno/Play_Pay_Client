import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";
import {
  createSearchParams,
  useNavigate,
} from "react-router-dom";

import { tableFilterValidator} from "../../validators";
import css from './TableFilter.module.css';

const TableFilter = () => {
  const {handleSubmit, register, formState: {errors, isValid}} = useForm({
    defaultValues: {
      "companyName": null,
    },
    resolver: joiResolver(tableFilterValidator),
    mode: 'all'
  });

  const navigate = useNavigate();

  const submit = ({companyName}) => {
    try {
      navigate({
        pathname: '/table',
        search: createSearchParams({company: companyName}).toString()
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)}
          className="main-navbar__search w-40 h-0 d-md-flex d-lg-flex pt-3">
      <select id="disabledSelect" {...register('companyName')}>
        <option value="">Choice company</option>
        <option value='Company 1'>Company 1</option>
        <option value='Company 2'>Company 2</option>
        <option value='Company 3'>Company 3</option>
        <option value='Company 4'>Company 4</option>
        <option value='Company 5'>Company 5</option>
      </select>
      <button className="btn btn-success btn-sm" disabled={!isValid}>Search
      </button>
      {errors.companyName &&
        <span className={css.error}>{errors.companyName.message}</span>}
    </form>
  );
};

export {TableFilter};
