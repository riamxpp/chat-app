import Message from "./Message";

export default interface Conversation {
  sendBy: string;
  sendByPhoto: string;
  sendTo: string;
  sendToPhoto: string;
  createdAt: object;
  messages: Array<Message>;
}
