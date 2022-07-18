import Message from "./Message";

export default interface Conversation {
  sendBy: string;
  sendTo: string;
  createdAt: object;
  messages: Array<Message>;
}
