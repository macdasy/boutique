import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

// import { useSelector, useDispatch } from 'react-redux'
// import { addItem } from '../Redux/itemSlice'
import '../CollectionsPage.css';
import ProCard from "./ProCard";


export default function Products(props) {

  async function processData() {
    const res = await fetch("https://boutique-scpw.onrender.com/user/products");
    const data = await res.json();
    setData(data);
  }

  const [data, setData] = useState();

  useEffect(() => {
    if (!data) processData();
    else console.log(data);
  });

  return (
    <section id="products" style={{ marginBottom:"5%" }}>
        <Box sx={{ my: 2 }}>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={7}
              columnSpacing={{ xs: 1, sm: 2, md: 1 }}
            >
              {data === undefined ? (
                <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
                    <CircularProgress style={{ color: "gold" }} />
                </Grid>
              ) : (
                data.map((d, index) => (
                  <Grid item xs={6} sm={4} md={4} lg={3} style={{ textAlign: "center" }} className="h-100">
                    <ProCard
                      id={d._id}
                      title={
                        d.category === "1"
                          ? "Tops"
                          : d.category === "2"
                          ? "Kurta"
                          : "Kurta Set"
                      }
                      size={d.size}
                      price={d.price}
                      img={d.imgUrl}
                    />
                  </Grid>
                ))
              )}
            </Grid>
          </Box>
        </Box>
    </section>
  );
}
