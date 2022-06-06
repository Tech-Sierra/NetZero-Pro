import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function OffsettingProjectsCards(props) {
  return (
    <Card sx={{ maxWidth: 230 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={props.imgURL}
          alt="green iguana"
        />
        <CardContent>
          <div className="portfolio_tags">
            <p className="project_type_tag tag">{props.type}</p>
            <p className="project_country_tag tag">{props.country}</p>
          </div>
          <Typography variant="body2" color="text.primary">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default OffsettingProjectsCards;