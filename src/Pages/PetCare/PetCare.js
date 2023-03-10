import { Grid, CardActionArea } from "@mui/material";
import React from "react";
import customImages from "../../Utils/Images";
import CustomIcons from "../../Utils/Icons/Index";
import GroomModal from "./Model";
import ImageList from "../../Components/ImageList/ImageList";
import MealCard from "../../Components/Cards/MealCard";
import "./PetCare.css";
import CustomTypography from "../../Components/Typography/Typography";
import AboutBoardingService from "../../Components/AboutBoardingService/AboutBoardingService";
// import ServicePackagesCards from "../../Components/Cards/ServicePackagesCard";

const PetCare = () => {
  const [Modal, setModal] = React.useState(false);

  const modalOpen = () => {
    setModal(true);
  };

  const packageData = [
    {
      price: "₹ 1999",
      offeredPrice: "₹ 999",
      service1: "Bath with Shampoo and conditioner",
      service2: "Blow Dry",
      service3: "Nail Clipping",
      service4: "Ear Cleaning",
      service5: "Paw Massage",
      service6: "Combing/Brushing",
    },
  ];
  const imageList = [
    {
      image: CustomIcons.BoardingArea,
      text: "Dedicated Boarding Area",
    },
    {
      image: CustomIcons.PlayArea,
      text: "Dedicated Play Area",
    },
    {
      image: CustomIcons.Service,
      text: "A/C-Pet Sleeping Area",
    },
    {
      image: CustomIcons.Service,
      text: "Pets Allowed on Beds",
    },
    {
      image: CustomIcons.Service,
      text: "Pets Allowed on Furniture",
    },
    {
      image: CustomIcons.PeriodicUpdate,
      text: "Periodic update-Photos/Videos",
    },
    {
      image: CustomIcons.CuddleTime,
      text: "Cuddle Time",
    },
    {
      image: CustomIcons.Playtime,
      text: "Play Time",
    },
    {
      image: CustomIcons.PetSitter,
      text: "Dedicated Pet Sitter",
    },
    {
      image: CustomIcons.OutdoorSpace,
      text: "Outdoor Space/Open Space",
    },
    {
      image: CustomIcons.Cctv,
      text: "CCTV (@ Boarding area)",
    },
  ];
  const CardData = [
    {
      mealImage:
        "https://static.onecms.io/wp-content/uploads/sites/19/2019/02/19/apple-quinoa-bowl-with-cinnamon-ricotta-1809-p102-2000.jpg",
      meal1: "Scrambled Egg 1 Nos",
      meal2: "Boiled Rice - 1 Bowl",
      meal3: "Steamed Carrot - 60 gms",
      meal4: "Chicken Breast - 60 gms",
      price: "₹ 450",
    },
  ];
  return (
    <Grid className="container">
      <Grid container md={12} lg={12} sm={12} xs={12}>
        <Grid item md={5} lg={5} sm={12} xs={12} m={1} className="leftImage">
          <img src={customImages.Service} alt="" />
        </Grid>
        <Grid
          item
          md={3.5}
          lg={3.5}
          sm={12}
          xs={12}
          m={1}
          className="centerImage"
        >
          <img src={customImages.PetImage} alt="" />
        </Grid>
        <Grid item md={3} lg={3} sm={12} xs={12}>
          <Grid item m={1} className="rightTop">
            <img src={customImages.Service} alt="" />
          </Grid>
          <Grid m={1} className="rightBottom">
            <CardActionArea onClick={modalOpen}>
              <img
                src={customImages.PetImage}
                alt=""
                // onClick={(id) => modalOpen(id)}
              />
            </CardActionArea>
            {Modal && <GroomModal />}
          </Grid>
        </Grid>
      </Grid>

      <Grid item md={12} lg={12} sm={12} xs={12}>
        <CustomTypography
          type="head"
          text="Aadhi Pet Care"
          customClass="aboutPet"
        />
      </Grid>
      <Grid container item md={12} lg={12} sm={12} xs={12} pb={2} className="AboutPetBoard">
        <AboutBoardingService
          image={customImages.Service}
          Heading="About Me"
          Name="Hey, I am John,"
          professional="Professional Pet Boarder"
          year="2 years"
          content="I am a pet lover and would love to take care of furry friends. I have a 5 year old dog at my parents house, but I don't have any pets right here in Bangalore at my place. I absolutely adore animals, and as I work from home I think I would be able to properly take care of them. I have taken care of my own dog in my hometown for 5 years, a labrador named Alex. I have d1 pet sitting for a lot of my friends. I do realise if the pet is not doing well by observing their eating habits and how active they are. I have also given oral medications to my own dog. Also, I will not leave the pet unattended at anytime."
          btnTitle="Request Booking"
          requestBtnStyles="requestBtn"
          BtnText="Response Time 1 hour"
          Area="1200 Sq.ft"
          Size="1200 Sq.ft"
          Type="1200 Sq.ft"
          Prefer="1200 Sq.ft"
          Capacity="1200 Sq.ft"
          petsAccepted="1200 Sq.ft"
          location="1200 Sq.ft"
          Provide="1200 Sq.ft"
        />
      </Grid>

      <Grid container md={12} sm={12} lg={12} xs={12} pl={3}>
        <Grid item md={12} sm={12} lg={12} xs={12} display="flex">
          <Grid className="AmenitiesImage">
            <img src={CustomIcons.Amenities} alt="" />
          </Grid>
          <Grid pl={3}>
            <CustomTypography
              type="head"
              text="Amenities"
              customClass="AmenitiesHeader"
            />
          </Grid>
        </Grid>
        <ImageList imageLists={imageList} />
      </Grid>
      <Grid container md={12} sm={12} lg={12} xs={12} pt={3} pl={3}>
        <Grid item md={12} sm={12} lg={12} xs={12} display="flex">
          <Grid className="AmenitiesImage">
            <img src={CustomIcons.Food} alt="" />
          </Grid>
          <Grid pl={3}>
            <CustomTypography
              type="head"
              text="Food"
              customClass="AmenitiesHeader"
            />
          </Grid>
        </Grid>
        <Grid item md={12} sm={12} lg={12} xs={12} pt={3}>
          <Grid item md={12} sm={12} lg={12} xs={12} display="flex">
            <Grid item className="AmenitiesImage">
              <img src={CustomIcons.Vegnonveg} alt="" />
            </Grid>
            <Grid pl={3} display="flex">
              <Grid>
                <CustomTypography
                  type="head"
                  text="Veg & Non Veg"
                  customClass="vegNonVeg"
                />
              </Grid>
              <Grid pl={2}>
                <CustomTypography
                  type="head"
                  text="Veg & Non Veg"
                  customClass="vegNonVeg"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item display="flex" pt={1}>
          <Grid>
            <CustomTypography
              type="head"
              text="Note"
              customClass="noteAmenity"
            />
          </Grid>
          <Grid pl={2}>
            <CustomTypography
              type="head"
              text="Normal serving of 2 meal of chicken soup per day pet owner to provide their preferred food to the pets"
              customClass="noteAmenitySub"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container pt={3} pl={3}>
        <Grid item md={12} sm={12} lg={12} xs={12} display="flex">
          <Grid className="AmenitiesImage">
            <img src={CustomIcons.Addons} alt="" />
          </Grid>
          <Grid pl={3}>
            <CustomTypography
              type="head"
              text="Add Ons"
              customClass="AmenitiesHeader"
            />
          </Grid>
        </Grid>
        <Grid pt={3}>
          <CustomTypography
            type="head"
            text="Add-ons from the host"
            customClass="noteAmenitySub"
          />
        </Grid>
      </Grid>
      <Grid pt={2}>
        <MealCard Data={CardData} />
      </Grid>

      <Grid container md={12} sm={12} lg={12} xs={12}  className="BoardingRules">
        <Grid item>
          <Grid item>
            <CustomTypography
              type="head"
              text="Boarding Rules"
              customClass="noteAmenity"
            />
          </Grid>
          <Grid item>
            <CustomTypography
              type="head"
              text="Pet should be Vaccinated "
              customClass="noteAmenitySub"
            />
          </Grid>
          <Grid item>
            <CustomTypography
              type="head"
              text="Pet should be Potty trained"
              customClass="noteAmenitySub"
            />
          </Grid>
        </Grid>
        <Grid item className="petBoardingRules">
          <Grid item>
            <CustomTypography
              type="head"
              text="Boarding Rules"
              customClass="noteAmenity"
            />
          </Grid>
          <Grid item>
            <CustomTypography
              type="head"
              text="Shin Tsu Male 3 Years"
              customClass="noteAmenitySub"
            />
          </Grid>
          <Grid item>
            <CustomTypography
              type="head"
              text="Lab Male 3 Years"
              customClass="noteAmenitySub"
            />
          </Grid>
          <Grid item>
            <CustomTypography
              type="head"
              text="Kids"
              customClass="noteAmenitySub"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PetCare;
