import { Box } from "@mui/material";
import React, { useContext } from "react";
import MessageIcon from "@mui/icons-material/Message";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CropFreeIcon from "@mui/icons-material/CropFree";
import { ChatContext } from "../../../../context/ChatContext";

const SideBarHeader = () => {
  const { userLogged } = useContext(ChatContext);

  console.log(userLogged.photoURL);

  if (!userLogged) return <div>ERROR</div>;
  return (
    <Box
      bgcolor="secondary.main"
      component="header"
      display="flex"
      sx={{
        width: "100%",
        height: "65 px",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <Box>
        <Box
          sx={{
            width: "50px",
            height: "50px",
            backgroundImage: `url("${userLogged.photoURL}")`,
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            borderRadius: "50%",
          }}
        ></Box>
      </Box>
      <Box display="flex" sx={{ flexDirection: "row", gap: "1rem" }}>
        <Box
          display="flex"
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <MessageIcon sx={{ color: "secondary.contrastText" }} />
        </Box>
        <Box
          display="flex"
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <CropFreeIcon sx={{ color: "secondary.contrastText" }} />
        </Box>
        <Box
          display="flex"
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <MoreVertIcon sx={{ color: "secondary.contrastText" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default SideBarHeader;
