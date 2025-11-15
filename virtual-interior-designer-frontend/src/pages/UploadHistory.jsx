// src/pages/UploadHistory.jsx
import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import DesignerCard from "../components/DesignerCard";

export default function UploadHistory() {
  const [items, setItems] = useState([]);

  useEffect(()=> {
    const mock = [
      { id: 'a1', title: 'Living Upload', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAUrTGCM8yyMst5QHzADT-qeQmgE-nUg6_Gic3FSKo2wlZZPhyqaVVTG3X1FkEPJvZ23Q&usqp=CAU', aiSuggestions: { palette: ['#fff'] } },
      { id: 'a2', title: 'Bedroom Upload', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4EZW9SCGILpG46ScLYD7ostZfearZoaBoLFaZ7cNxXW0a3pCeHjgoWoZrUg2Hp9_T50A&usqp=CAU', aiSuggestions: { palette: ['#ddd'] } }
    ];
    setItems(mock);
  },[]);

  return (
    <Box sx={{ p: { xs: 3, md: 6 } }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Upload History</Typography>
      <Grid container spacing={3}>
        {items.map(it => (
          <Grid item key={it.id} xs={12} sm={6} md={4}>
            <DesignerCard design={it} onOpen={() => window.location.href = `/designer?id=${it.id}`} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
