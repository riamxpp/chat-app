import React, { useState, ChangeEvent, useContext } from "react";
import { Box, Button, Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MessageSection from "./MessageSection";
import { ChatContext } from "../../../../context/ChatContext";
import { serverTimestamp } from "firebase/database";

const ChatMessage = () => {
  const [message, setMessage] = useState("");
  const { fetchMessage, userLogged } = useContext(ChatContext);

  const handleMessage = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchMessage({
      text: message,
      sendBy: userLogged.email,
      createdAt: serverTimestamp(),
    });
    setMessage("");
  };

  return (
    <Box
      component="section"
      width="100%"
      height="89.9%"
      display="flex"
      sx={{ flexDirection: "column", justifyContent: "space-between" }}
    >
      <MessageSection
        width="100%"
        bgcolor="primary.dark"
        height="90%"
      ></MessageSection>
      <Box
        height="10%"
        width="100%"
        display="flex"
        sx={{ padding: "10px", alignItems: "center", justifyContent: "center" }}
        bgcolor="secondary.main"
        component="form"
        onSubmit={handleMessage}
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
