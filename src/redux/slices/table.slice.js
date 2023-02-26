import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {tableService} from "../../services";


const initialState = {
  table: [],
  TableRow:null,
  loading: false,
  error: null,
};

const getTable = createAsyncThunk(
  'tableSlice/getTable',
  async (_, {rejectWithValue}) => {
    try {
      const {data} = await tableService.getTable()
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

const update = createAsyncThunk(
  'tableSlice/update',
  async ({status}, {rejectWithValue}) => {
    try {
      const {data} = await tableService.update(status)
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
      const {data} = await tableService.delete(id)
      return data
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
      .addCase(create.fulfilled, (state, action) => {
        state.TableRow = action.payload
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
        state.TableRow = action.payload
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
  create,
  update,
  deleteById
};

export {tableReducer, tableActions};
