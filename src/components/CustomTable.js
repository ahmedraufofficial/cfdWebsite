import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const CustomTable = ({values, header}) => {
    const data = values
  return (
        <>
        <Typography sx={{marginTop: 3, marginBottom: 3}}>
            {header}
        </Typography>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                {data.map((row) => (         
                    <TableRow
                        key={Object.keys(row)+"table"}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {Object.keys(row)}
                        </TableCell>
                        <TableCell align="right">
                            {Object.values(row).join(', ')}
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
        </Table>
        </TableContainer>
        </>
  )
}

export default CustomTable