import React from 'react';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '../data/data.js';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText,
    Row,
    Col,
  } from "reactstrap";

const customers = () => {
  return (
    <div className='bg-black min-h-screen'>
       <div className='flex justify-between px-4 pt-4 bg-black text-white font-bold'>
        <h2>Publisher Dashboard</h2>
        <h2>Welcome Back, Publisher</h2>
    </div>
      <div className=' w-[800px] h-full'>
      </div>
    </div>
  );
};

export default customers;
