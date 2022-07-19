import React, { useState, ChangeEvent, useContext, useEffect } from "react";
import { Box, Button, Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { ChatContext } from "../../../../context/ChatContext";

const ChatMessage = () => {
  const [message, setMessage] = useState("");
  const { userLogged } = useContext(ChatContext);

  useEffect(() => {
    async function teste() {
      fetch(
        "https://chat-app-f3ec0-default-rtdb.firebaseio.com/Conversations.json"
      )
        .then((res) => res.json())
        .then((json) => console.log(json));
    }
    teste();
  });

  const sendMessage = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Box
      component="section"
      width="100%"
      height="89.9%"
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
        component="form"
        onSubmit={sendMessage}
      >
        <Box
          display="flex"
          sx={{ alignItens: "center", justifyContent: "space-evenly" }}
        >
          <Button size="small">
            {" "}
            <EmojiEmotionsIcon
              aria-label="emojis"
              fontSize="medium"
              sx={{ color: "secondary.contrastText" }}
            />
          </Button>
          <Button size="small">
            <AttachFileIcon
              aria-label="opcoes"
              fontSize="medium"
              sx={{ color: "secondary.contrastText" }}
            />
          </Button>
        </Box>
        <Box width="100%" height="100%">
          <Input
            aria-label="digitar mensagem"
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
        {message ? (
          <Button type="submit" size="small" aria-label="gravar audio">
            <SendIcon sx={{ color: "secondary.contrastText" }} />
          </Button>
        ) : (
          <Button size="small" aria-label="enviar mensagem">
            <MicIcon sx={{ color: "secondary.contrastText" }} />
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ChatMessage;
