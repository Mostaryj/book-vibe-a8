import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

// const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const PagesToRead = () => {

    const pages = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const detail = pages.find(detail => detail.Id === idInt);

     console.log(pages, detail)

    return (
        <div>
            <h1>pages to read:{pages.length} </h1>
      
        </div>
    );
};

export default PagesToRead;