import React, { useState } from "react";
import { Box, Button, Input, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";

const ChatMessage = () => {
  const [menssage, setMessage] = useState("");

  return (
    <Box
      component="section"
      width="100%"
      height="89%"
      display="flex"
      sx={{ flexDirection: "column", justifyContent: "space-between" }}
    >
      <Box height="89%" width="100%"></Box>
      <Box
        height="10%"
        width="100%"
        display="flex"
        sx={{ padding: "10px", alignItens: "center", justifyContent: "center" }}
        bgcolor="secondary.main"
      >
        <Box width="80%" height="100%">
          <Input
            placeholder="Mensagem"
            disableUnderline={true}
            fullWidth={true}
            sx={{
              padding: ".3rem .5rem",
              borderRadius: "4px",
              backgroundColor: "secondary.light",
            }}
          ></Input>
        </Box>
        <Button>
          <SendIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default ChatMessage;
