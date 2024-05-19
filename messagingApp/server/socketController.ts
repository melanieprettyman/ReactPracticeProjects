import { Server, Socket } from "socket.io";
import { ChatRoom, Message } from "./ChatRoom";

const rooms: Map<string, ChatRoom> = new Map();

const createNewRoom = (roomName: string) => {
   rooms.set(roomName, new ChatRoom(roomName));
};

export const setupSocket = (io: Server) => {
   io.on("connection", (socket: Socket) => {
      console.log(`User connected: ${socket.id}`);

      // All socket event listeners go here

      // Handle a request to join a room
      socket.on("join-room", (data: { username: string; room: string }) => {
         if (!rooms.has(data.room)) {
            createNewRoom(data.room);
         }
         const room = rooms.get(data.room)!;
         room.addUser({ name: data.username, socket: socket });
      });

      // Handle a new message
      socket.on("new-message", (data: Message) => {
         const room = rooms.get(data.room);
         if (room) {
            room.addMessage(data);
         }
      });

      // Disconnect event
      socket.on("disconnect", () => {
         rooms.forEach((room) => {
            room.removeUser(socket.id);
         });
      });
   });
};
