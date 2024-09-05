import { Avatar } from "@mui/material";
import { Container } from "../../../components";
import { avataImage } from "../../../config";

const Profile = () => {
  return (
    <Container>
      <Avatar sx={{width:"100%", height:"100%"}} alt={avataImage.name} src={avataImage.url} />
    </Container>
  );
};

export default Profile;
