import React, { useState } from 'react';
import './style.css'
import DiamondJosnData from "../Data/DiamondData.json"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, IconButton, Paper, TablePagination, Box, Grid, Card, CardContent, Slider, TextField } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { GiCrystalEarrings } from "react-icons/gi";
import { GiNecklace } from "react-icons/gi";
import { FaRing } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { GiGoldShell } from "react-icons/gi";


const iconStyle = {
  fontSize: '2rem',
  margin: '0px 16px 60px 0px',
};

const DiamondTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleCompareChange = (event, index) => {
    // Handle checkbox change
  };

  const handleWishlistToggle = (index) => {
    // Handle wishlist toggle
  };

  return (
    <div>
      <div className="container">
      <div className="left">
        <div className="left-part" style={{ backgroundColor: 'lightblue' }}>
          Left Part 1
        </div>
        <div className="left-part" style={{ backgroundColor: 'lightcoral' }}>
          Left Part 2
        </div>
        <div className="left-part" style={{ backgroundColor: 'lightgreen' }}>
          Left Part 3
        </div>
      </div>
      <div className="right" style={{ backgroundColor: 'lightgrey' }}>
        Right Content
      </div>
    </div>
      <TableContainer component={Paper} style={{ background: '#FDF8F0' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center"></TableCell>
              <TableCell align="center">Shape</TableCell>
              <TableCell align="center">Carat</TableCell>
              <TableCell align="center">Color</TableCell>
              <TableCell align="center">Clarity</TableCell>
              <TableCell align="center">Cut</TableCell>
              <TableCell align="center">Cert</TableCell>
              <TableCell align="center">Polish</TableCell>
              <TableCell align="center">Symmetry</TableCell>
              <TableCell align="center">Depth</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Compare</TableCell>
              <TableCell align="center">Wishlist</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {DiamondJosnData?.diamonds?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((diamond, index) => (
              <TableRow key={index}>
                <TableCell align="center">Images</TableCell>
                <TableCell align="center">{diamond.shape}</TableCell>
                <TableCell align="center">{diamond.carat}</TableCell>
                <TableCell align="center">{diamond.color}</TableCell>
                <TableCell align="center">{diamond.clarity}</TableCell>
                <TableCell align="center">{diamond.cut}</TableCell>
                <TableCell align="center">{diamond.cert}</TableCell>
                <TableCell align="center">{diamond.polish}</TableCell>
                <TableCell align="center">{diamond.symmetry}</TableCell>
                <TableCell align="center">{diamond.depth}</TableCell>
                <TableCell align="center">{diamond.price}</TableCell>
                <TableCell align="center">
                  <Checkbox
                    checked={diamond.compare}
                    onChange={(event) => handleCompareChange(event, index)}
                  />
                </TableCell>
                <TableCell align="center">
                  <IconButton onClick={() => handleWishlistToggle(index)}>
                    {diamond.wishlist ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  </IconButton>
                </TableCell>
                <TableCell align="center">Details</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={DiamondJosnData?.diamonds?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default DiamondTable;
