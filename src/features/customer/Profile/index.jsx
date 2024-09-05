import { Avatar } from "@mui/material";
import { Container } from "../../../components";
import { avataImage } from "../../../config";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthToken } from "../../../app/reducers";
import { useEffect } from "react";

const Profile = () => {
  const dispatch = useDispatch()
  const token = useSelector(selectAuthToken);

  useEffect(() => {
    if(token){
      // dispatch()
    }
  }, [dispatch,token])

  return (
    <Container>
      {token && (
        <Avatar
          sx={{ width: "100%", height: "100%" }}
          alt={avataImage.name}
          src={avataImage.url}
        />
      )}
    </Container>
  );
};

export default Profile;
