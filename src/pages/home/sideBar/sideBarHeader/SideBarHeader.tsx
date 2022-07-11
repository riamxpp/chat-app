import { Box } from "@mui/material";
import React from "react";
import MessageIcon from "@mui/icons-material/Message";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CropFreeIcon from "@mui/icons-material/CropFree";
import Teste from "../../../../teste.jpg";

const SideBarHeader = () => {
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
            backgroundImage: `url(${Teste})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            borderRadius: "50%",
          }}
        >
          {/* <img style={{ width: "100%" }} src={Teste} alt="Foto do perfil" /> */}
        </Box>
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
