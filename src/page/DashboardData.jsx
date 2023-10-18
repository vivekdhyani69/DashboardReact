import React, { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import {
  Box,
  Card,
  CardContent,
  Grid,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { Chart } from "react-google-charts";
const DashboardData = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectDays, setSelectDays] = useState(7);

  const data1 = [
    ["Label", "Value"],
    ["Filled", 65],
    ["Empty", 35],
  ]; // 65% filled with green, 35% empty (white)
  const options1 = {
    pieHole: 0.6, // Set pieHole to create a circle diagram
    pieSliceText: "none", // Disable pie slice text
    legend: "none", // Disable legend
    tooltip: { trigger: "none" }, // Disable tooltip
    colors: ["#4CAF50", "white"], // Set colors for the filled and empty portions
    pieStartAngle: 0, // Set start angle to make the circle start from the top
  };

  const chartData = [
    ["Month", "Value"],
    ["Jan", 0],
    ["Feb", 0],
    ["Mar", 0],
    ["Apr", 0],
    ["May", 0],
    ["Jun", 0],
    ["Jul", 0],
    ["Aug", 90],
    ["Sep", 0],
    ["Oct", 0],
    ["Nov", 0],
    ["Dec", 0],
  ];
  const options = {
    chart: {
      title: "Monthly Values",
      subtitles: "Sales, Expenses, and Profit: Jan-Dec",
    },
  };

  const products = [
    {
      id: 1,
      name: "Abstact 3D",
      stock: "32 in stock",
      price: "$ 45.99",
      totalSales: 20,
    },
    {
      id: 1,
      name: "Sarphens illustration",
      stock: "32 in stock",
      price: "$ 45.99",
      totalSales: 20,
    },
  ];

  return (
    <div>
      <Sidebar />

      <Box />
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Card>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Grid container spacing={2}>
                      <Grid item>
                        <CurrencyExchangeIcon
                          style={{
                            color: "#52BE80",
                            height: "100px",
                            width: "80px",
                          }}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <p>Earning</p>
                        <p>$189k</p>
                        <p>37.8% this month</p>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            {/* ... (Repeat the same structure for other Grid items) */}
            <Grid item xs={12} md={3}>
              <Card>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Grid container spacing={2}>
                      <Grid item>
                        <SpeakerNotesIcon
                          style={{
                            color: "#AF7AC5",
                            height: "100px",
                            width: "80px",
                          }}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <p>Earning</p>
                        <p>$189k</p>
                        <p>37.8% this month</p>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Grid container spacing={2}>
                      <Grid item>
                        <AccountBalanceWalletIcon
                          style={{
                            color: "#85C1E9",
                            height: "100px",
                            width: "80px",
                          }}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <p>Earning</p>
                        <p>$189k</p>
                        <p>37.8% this month</p>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={3}>
              <Card>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Grid container spacing={2}>
                      <Grid item>
                        <ReceiptIcon
                          style={{
                            color: "pink",
                            height: "100px",
                            width: "80px",
                          }}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <p>Earning</p>
                        <p>$189k</p>
                        <p>37.8% this month</p>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Grid sx={{ m: 2 }} container spacing={2}>
            <Grid item xs={12} md={8}>
              <Chart
                width={"100%"}
                height={"400px"}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={chartData}
                options={options}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <div style={{ textAlign: "center" }}>
                <h5>64% of data</h5>
                <Chart
                  chartType="PieChart"
                  data={data1}
                  options={options1}
                  graph_id="PieChart"
                  width="100%"
                  height="300px"
                  legend_toggle
                />
                <div
                  style={{
                    marginTop: "-150px",
                    position: "absolute",
                    width: "100%",
                    textAlign: "center",
                  }}
                ></div>
              </div>
            </Grid>
            {/* /table */}

            <Grid xs={12} md={12}>
              <Card>
                <CardContent>
                  <Box
                    sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}
                  >
                    <TextField
                      label="search"
                      variant="outlined"
                      size="small"
                      values={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      sx={{ m1: 2 }}
                    />
                    <TextField
                      label="Days"
                      variant="outlined"
                      size="small"
                      select
                      value={selectDays}
                      onChange={(e) => setSelectDays(e.target.value)}
                      sx={{ ml: 2 }}
                    >
                    <MenuItem value={7}>7 Days</MenuItem>
                    <MenuItem value={30}>30 Days</MenuItem>
                    <MenuItem value={90}>90 Days</MenuItem>
                    </TextField>
                  </Box>

                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Product Name</TableCell>
                          <TableCell>Stock</TableCell>
                          <TableCell>Price</TableCell>
                          <TableCell>Total Sales</TableCell>
                        </TableRow>
                        </TableHead>
                        {/* ///Body Of table */}
                        <TableBody>
                          {products &&
                            products
                              .filter((product) =>
                                product.name
                                  .toLocaleLowerCase()
                                  .includes(searchTerm.toLocaleLowerCase())
                              )

                              .map((product) => (
                                <TableRow key={product.id}>
                                  <TableCell>{product.name}</TableCell>
                                  <TableCell>{product.stock}</TableCell>
                                  <TableCell>{product.price}</TableCell>
                                  <TableCell>{product.totalSales}</TableCell>
                                </TableRow>
                              ))}
                        </TableBody>
                   
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default DashboardData;
