import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Rating,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import PropTypes from "prop-types";
const Ratings = ({ ratings }) => {
  return (
    <div>
      {ratings &&
        ratings.map((rating, i) => (
          <Card sx={{ mb: 2 }} key={i}>
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

Ratings.propTypes = {
  ratings: PropTypes.array,
};
export default Ratings;
