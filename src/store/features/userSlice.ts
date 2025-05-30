import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TableInfo {
  id: string;
  number: string;
  section: string;
}

interface UserState {
  name: string;
  table: TableInfo | null;
  isAuthenticated: boolean;
  role: 'user' | 'admin' | 'super_admin' | null;
}

const initialState: UserState = {
  name: '',
  table: null,
  isAuthenticated: false,
  role: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<{ name: string; role: UserState['role'] }>) => {
      state.name = action.payload.name;
      state.role = action.payload.role;
      state.isAuthenticated = true;
    },
    
    setTableInfo: (state, action: PayloadAction<TableInfo>) => {
      state.table = action.payload;
    },
    
    clearUserInfo: (state) => {
      state.name = '';
      state.table = null;
      state.isAuthenticated = false;
      state.role = null;
    },
  },
});

export const { setUserInfo, setTableInfo, clearUserInfo } = userSlice.actions;
export default userSlice.reducer; 