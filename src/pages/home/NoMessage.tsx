import { Box, Typography } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";

const NoMessage = () => {
  return (
    <Box
      component="section"
      display="flex"
      width="100%"
      bgcolor="primary.dark"
      height="89.9%"
      sx={{ alignItems: "center", justifyContent: "center" }}
    >
      <Box>
        <Box
          width="100px"
          height="100px"
          display="flex"
          sx={[
            (theme) => ({
              margin: "0 auto",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              border: `1px solid ${theme.palette.secondary.contrastText}`,
            }),
          ]}
        >
          <SendIcon sx={{ color: "secondary.contrastText" }}></SendIcon>
        </Box>
        <Typography
          sx={{ color: "secondary.contrastText" }}
          variant="h4"
          color="secondary.contrastText"
        >
          Você ainda não tem mensagens.{" "}
        </Typography>
      </Box>
    </Box>
  );
};

export default NoMessage;
