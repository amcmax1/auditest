import React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
  { 
    id: 1, 
    col1: '2022-02-01T16:06:00Z', 
    col2: 'Feature/ngrok tests',
    col3: 'amcmax1',
    col4: '0150722c8680e0ae90df7f1e3641f8407d937fec',
    col5: 'feature/ngrok-tests',
    col6: 'amcmax1/silver-octo',
    col7: '6da4f0b7c93dbda9291a65f9216913a54dc79ee5',
    col8: 'open',
    col9: 'https://api.github.com/repos/amcmax1/silver-octo/pulls/1'
  },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Last Updated', width: 150 },
  { field: 'col2', headerName: 'Title', width: 150 },
  { field: 'col3', headerName: 'User', width: 150 },
  { field: 'col4', headerName: 'Head SHA', width: 150 }, 
  { field: 'col5', headerName: 'Head Ref', width: 150 },
  { field: 'col6', headerName: 'Repository', width: 150 },
  { field: 'col7', headerName: 'Merge Commit SHA', width: 150 },
  { field: 'col8', headerName: 'Status', width: 150 },
  { field: 'col9', headerName: 'URL', width: 150 }
];

export default function App() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}