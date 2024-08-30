import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRatings,
  selectRatings,
  selectRatingsStatus,
} from "../../../../app/reducers";
import { FETCH_SUCCEEDED } from "../../../../config";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Rating,
  Typography,
} from "@mui/material";
import { grey } from '@mui/material/colors';

const Ratings = ({ ratings }) => {
  return (
    <div>
      {ratings &&
        ratings.map((rating) => (
          <Card sx={{ mb: 2 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: grey[500] }} aria-label="user">
                  {rating.by.charAt(0)}
                </Avatar>
              }
              title={rating.by}
              subheader={<Rating value={rating.rating} readOnly />}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                {rating.comment}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </div>
  );
};

export default Ratings;
