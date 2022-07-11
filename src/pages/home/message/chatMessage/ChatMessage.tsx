import React, { useState, ChangeEvent } from "react";
import { Box, Button, Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const ChatMessage = () => {
  const [message, setMessage] = useState("");

  return (
    <Box
      component="section"
      width="100%"
      height="89%"
      display="flex"
      sx={{ flexDirection: "column", justifyContent: "space-between" }}
    >
      <Box height="90%" width="100%" bgcolor="primary.dark"></Box>
      <Box
        height="10%"
        width="100%"
        display="flex"
        sx={{ padding: "10px", alignItems: "center", justifyContent: "center" }}
        bgcolor="secondary.main"
      >
        <Box
          width="10%"
          display="flex"
          sx={{ alignItens: "center", justifyContent: "space-evenly" }}
        >
          <EmojiEmotionsIcon
            fontSize="medium"
            sx={{ color: "secondary.contrastText" }}
          />
          <AttachFileIcon
            fontSize="medium"
            sx={{ color: "secondary.contrastText" }}
          />
        </Box>
        <Box width="82%" height="100%">
          <Input
            placeholder="Mensagem"
            disableUnderline={true}
            fullWidth={true}
            sx={{
              padding: ".3rem .5rem",
              borderRadius: "4px",
              backgroundColor: "secondary.dark",
            }}
            value={message}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setMessage(event.target.value)
            }
          ></Input>
        </Box>
        <Button>
          {message ? (
            <SendIcon sx={{ color: "secondary.contrastText" }} />
          ) : (
            <MicIcon sx={{ color: "secondary.contrastText" }} />
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default ChatMessage;
