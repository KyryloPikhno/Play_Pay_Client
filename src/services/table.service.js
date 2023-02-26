import {axiosService} from "./axios.service";
import {urls} from "../config";

const tableService = {
  getTable: (company) => axiosService.get(urls.table, {
    params: {
      company
    }
  }),
  create: (tableRow) => axiosService.post(urls.table, tableRow),
  getById: (id) => axiosService.get(`${urls.table}/${id}`),
  update: (id, status) => axiosService.put(`${urls.table}/${id}`, {status}),
  delete: (id) => axiosService.delete(`${urls.table}/${id}`)
};

export {tableService};
