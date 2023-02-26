import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {tableService} from "../../services";


const initialState = {
  table: [],
  tableRow:null,
  loading: false,
  error: null,
};

const getTable = createAsyncThunk(
  'tableSlice/getTable',
  async ({company}, {rejectWithValue}) => {
    try {
      const {data} = await tableService.getTable(company)
      return data
    } catch (e) {
      return rejectWithValue(e.response.data)
    }
  }
);

const create = createAsyncThunk(
  'tableSlice/create',
  async ({tableRow}, {rejectWithValue}) => {
    try {
      const {data} = await tableService.create(tableRow)
      return data
    } catch (e) {
      return rejectWithValue(e.response.data)
    }
  }
);

const getById = createAsyncThunk(
  'tableSlice/getById',
  async ({id}, {rejectWithValue}) => {
    try {
      const {data} = await tableService.getById(id)
      return data
    } catch (e) {
      return rejectWithValue(e.response.data)
    }
  }
);

const update = createAsyncThunk(
  'tableSlice/update',
  async ({id,status}, {rejectWithValue}) => {
    try {
      const {data} = await tableService.update(id,status)
      return data
    } catch (e) {
      return rejectWithValue(e.response.data)
    }
  }
);

const deleteById = createAsyncThunk(
  'tableSlice/deleteById',
  async ({id}, {rejectWithValue}) => {
    try {
      await tableService.delete(id)
      return id
    } catch (e) {
      return rejectWithValue(e.response.data)
    }
  }
);


const tableSlice = createSlice({
  name: 'tableSlice',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getTable.fulfilled, (state, action) => {
        state.table = action.payload
        state.error = null
        state.loading = false
      })
      .addCase(getTable.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
      .addCase(getTable.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getById.fulfilled, (state, action) => {
        state.tableRow = action.payload
        state.error = null
        state.loading = false
      })
      .addCase(getById.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
      .addCase(getById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(create.fulfilled, (state, action) => {
        state.table.push(action.payload)
        state.tableRow = action.payload
        state.error = null
        state.loading = false
      })
      .addCase(create.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
      .addCase(create.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(update.fulfilled, (state, action) => {
        const find = state.table.find(row => row._id === action.payload._id)
        Object.assign(find, action.payload)
        state.error = null
        state.loading = false
      })
      .addCase(update.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
      .addCase(update.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deleteById.fulfilled, (state, action) => {
        const index = state.table.findIndex(row => row._id === action.payload)
        state.table.splice(index,1)
        state.error = null
        state.loading = false
      })
      .addCase(deleteById.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
      .addCase(deleteById.pending, (state) => {
        state.loading = true
        state.error = null
      })
});

const {reducer: tableReducer} = tableSlice;

const tableActions = {
  getTable,
  getById,
  create,
  update,
  deleteById
};

export {tableReducer, tableActions};
