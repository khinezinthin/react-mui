import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight: "400px"}}>
        <Table aria-label="simple table" stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>first name</TableCell>
                    <TableCell>last name</TableCell>
                    <TableCell align="center">email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tableData.map(data => (
                    <TableRow key={data.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell>{data.id}</TableCell>
                        <TableCell>{data.first_name}</TableCell>
                        <TableCell>{data.last_name}</TableCell>
                        <TableCell align="center">{data.email}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  );
};

export default MuiTable;

const tableData = [
  {
    id: 1,
    first_name: "Eldin",
    last_name: "Jury",
    email: "ejury0@ucla.edu",
    gender: "Male",
    ip_address: "197.174.160.64",
  },
  {
    id: 2,
    first_name: "Fabian",
    last_name: "Sumshon",
    email: "fsumshon1@blog.com",
    gender: "Male",
    ip_address: "48.146.68.133",
  },
  {
    id: 3,
    first_name: "Rhodie",
    last_name: "Nuzzti",
    email: "rnuzzti2@loc.gov",
    gender: "Female",
    ip_address: "0.94.96.67",
  },
  {
    id: 4,
    first_name: "Spenser",
    last_name: "Gammack",
    email: "sgammack3@icio.us",
    gender: "Male",
    ip_address: "156.237.232.209",
  },
  {
    id: 5,
    first_name: "Corrina",
    last_name: "Antonio",
    email: "cantonio4@msu.edu",
    gender: "Female",
    ip_address: "238.34.114.156",
  },
  {
    id: 6,
    first_name: "Lynnett",
    last_name: "Farquharson",
    email: "lfarquharson5@mysql.com",
    gender: "Female",
    ip_address: "149.3.177.10",
  },
  {
    id: 7,
    first_name: "Rickey",
    last_name: "Seaborn",
    email: "rseaborn6@pagesperso-orange.fr",
    gender: "Male",
    ip_address: "227.198.93.163",
  },
  {
    id: 8,
    first_name: "Ingar",
    last_name: "Gaynes",
    email: "igaynes7@gnu.org",
    gender: "Male",
    ip_address: "74.211.147.228",
  },
  {
    id: 9,
    first_name: "Dion",
    last_name: "Keld",
    email: "dkeld8@discovery.com",
    gender: "Female",
    ip_address: "115.85.39.194",
  },
  {
    id: 10,
    first_name: "Roxy",
    last_name: "Dufton",
    email: "rdufton9@cisco.com",
    gender: "Bigender",
    ip_address: "150.70.54.14",
  },
];
