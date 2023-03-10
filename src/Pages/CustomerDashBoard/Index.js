import { Box, Grid } from "@mui/material";
import React from "react";
import DashBoardCard from "../../Components/DashBoardCard/DashBoardCard";
import CustomIcons from "../../Utils/Icons/Index";
import CustomTypography from "../../Components/Typography/Typography";
import CustomTab from "../../Components/Tab/Tab";
import BookingRequestsSend from "../../Components/Cards/BookingRequestsSend";

export const CustomerDashBoard = () => {
  const CardData = [
    {
      CustomerName: "John",
      petType: "Dog",
      totalCosts: "380",
      Status: "Pending",
      bookedDate: "20 Jun 2022",
      noOfDays: "5",
    },
    {
      CustomerName: "Britto",
      petType: "Dog",
      totalCosts: "380",
      Status: "Pending",
      bookedDate: "20 Jun 2022",
      noOfDays: "5",
    },
  ];
  const [value, setValue] = React.useState(0);

  const tabList = [
    {
      id: 1,
      tabText: "Pet Home Boarding",
      tabColor: "white",
    },
    {
      id: 2,
      tabText: "Pet Services",
      tabColor: "white",
    },
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container item xs={12}>
      <Grid
        item
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        flexWrap={"wrap"}
        gap={"30px"}
        pt={"30px"}
        xs={12}
      >
        <Grid item lg={2} md={3} sm={4} xs={12}>
          <DashBoardCard
            id="card1"
            tittle="Bookings Done"
            icon={CustomIcons.Building}
            number="5"
            MWidth="300px"
          />
        </Grid>
        <Grid item lg={2} md={3} sm={4} xs={12}>
          <DashBoardCard
            id="card2"
            tittle="Booking Requests Send"
            icon={CustomIcons.Building}
            number="5"
            MWidth="300px"
          />
        </Grid>
        <Grid item lg={2} md={3} sm={4} xs={12}>
          <DashBoardCard
            id="card3"
            tittle="Pets Added"
            icon={CustomIcons.Building}
            number="5"
            MWidth="300px"
          />
        </Grid>
      </Grid>
      <Grid item textAlign={"left"} xs={12} pt={"40px"}>
        <CustomTypography
          text="Booking Requests Send"
          type="subHeading"
          colorType="text"
        />
      </Grid>
      <Grid className="customTab" item pt={3} xs={12}>
        <CustomTab
          tabList={tabList}
          handleChange={handleChange}
          value={value}
          className="tabBar"
        />
        <Box pt={"20px"}>
          {value === 0 && <BookingRequestsSend Data={CardData} />}
          {value === 1 && <BookingRequestsSend Data={CardData} />}
        </Box>
      </Grid>
    </Grid>
  );
};
