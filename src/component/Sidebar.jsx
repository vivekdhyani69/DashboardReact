import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Groups2TwoToneIcon from "@mui/icons-material/Groups2TwoTone";
import SpaceDashboardTwoToneIcon from "@mui/icons-material/SpaceDashboardTwoTone";
import '../index.css'
import { useNavigate } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PercentIcon from '@mui/icons-material/Percent';
import { Grid } from "@mui/material";
 import InboxIcon from '@mui/icons-material/Inbox';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));




export default function Sidebar() {

  const theme = useTheme();

  const [open, setOpen] = React.useState(true);


  const navigate = useNavigate();


  

  return (

    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Box height={30} />
      <Drawer  variant="permanent" open={open}>
        <DrawerHeader>
        <DashboardIcon/>
<Grid container sx={{m:2}}>
    {open ? <Typography variant="h5"> Dashboard</Typography> : ''
            }
               </Grid>
          <IconButton 
             onClick={()=>setOpen(!open)}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* //Dashboard */}
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("/")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color:'white'
                }}
              >
                <SpaceDashboardTwoToneIcon />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                sx={{ opacity: open ? 1 : 0,p:1 }}
              />
            </ListItemButton>
          </ListItem>

          {/* //Patient List */}

          <ListItem
            disablePadding
            sx={{ display: "block" }}
          onClick={()=>navigate("/")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color:'white'
                }}
              >
                <ProductionQuantityLimitsIcon />
              </ListItemIcon>
            
              <ListItemText
                primary="Product"
                sx={{ opacity: open ? 1 : 0,p:1 }}
              />
              
             
            </ListItemButton>
          </ListItem>

         
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("/")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                color:'white'
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color:'white'
                }}
              >
                <Groups2TwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="Customer" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("/")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
               
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color:'white'
                }}
              >
                <InboxIcon />
              </ListItemIcon>
              <ListItemText
                primary="Income"
                sx={{ opacity: open ? 1 : 0 ,p:1}}
              />
            </ListItemButton>
          </ListItem>
          {/* Transaction */}
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                color:'white'
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color:'white'
                }}
              >
                <PercentIcon />
              </ListItemIcon>
              <ListItemText
                primary="Promote"
                sx={{ opacity: open ? 1 : 0 ,p:1}}
              />
            </ListItemButton>
          </ListItem>
          {/* Access-control */}

          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("/")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                color:'white'
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color:'white'
                }}
              >
                <AdminPanelSettingsIcon  />
              </ListItemIcon>

              <ListItemText primary="Help" sx={{ opacity: open ? 1 : 0 ,p:1}} />
            </ListItemButton>


          </ListItem>

          {/* DoctorList */}


    
        </List>
      </Drawer>
    </Box>
  );
}
