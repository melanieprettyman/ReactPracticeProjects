import { Socket } from "socket.io";

export type User = {
   name: string;
   socket: Socket;
};

export type Message = {
   username: string;
   content: string;
   room: string;
};

export class ChatRoom {
   private users: User[] = [];
   private messages: Message[] = [];
   private roomName: string;

   constructor(roomName: string) {
      this.roomName = roomName;
      this.log(`is created.`);
   }

   /**
    * Adds a user to the room and sends a join confirmation message to the user and a notification to the rest of the users in the room.
    * @param newUser The user to add to the room.
    */
   public addUser(newUser: User) {
      this.log(`Adding user '${newUser.name}' to room '${this.roomName}'`);
      this.users.push(newUser);
      this.sendJoinConfirmation(newUser);
   }

   /**
    * Sends a join confirmation message to the user and a notification to the rest of the users in the room.
    * @param newUser
    */
   private sendJoinConfirmation(newUser: User) {
      // send a join confirmation to the client so they know they have joined the room
      this.log(`Sending join confirmation to user '${newUser.name}'`);
      newUser.socket.emit(
         "join-confirmation",
         this.createMessage(
            "Server",
            `You have joined the room ${this.roomName}.`
         )
      );
      // send to the rest of the users in the room
      this.log(`Sending notification to the rest of the users in the room`);
      const joinedMessage = this.createMessage(
         "Server",
         `${newUser.name} has joined the room.`
      );
      this.users
         .filter((u) => u.socket.id !== newUser.socket.id) // exclude the new user
         .forEach((u) => {
            this.sendMessage(u.socket, joinedMessage);
         });
   }

   /**
    * Creates a message object that can be sent to the client.
    * @param username
    * @param content
    * @returns
    */
   private createMessage(username: string, content: string): Message {
      return {
         username,
         content,
         room: this.roomName,
      };
   }

   /**
    * Adds a message to the room and broadcasts it to all users in the room.
    * @param message
    */
   public addMessage(message: Message) {
      this.log(`Adding message '${message.content}'`);
      this.messages.push(message);
      this.broadcastMessage(message);
   }

   /**
    * Broadcasts a message to all users in the room.
    * @param message
    */
   private broadcastMessage(message: Message) {
      this.log(`Broadcasting message '${message.content}'`);
      this.users.forEach((user) => {
         this.sendMessage(user.socket, message);
      });
   }

   /**
    * Sends a message to a specific user socket
    * @param socket
    * @param message
    */
   private sendMessage(socket: Socket, message: Message) {
      socket.emit("new-message", message);
   }

   /**
    * Removes a user from the room.
    * @param socketId
    */
   public removeUser(socketId: string) {
      const user = this.users.find((user) => user.socket.id === socketId);
      if (!user) {
         this.log(
            `User with socket id '${socketId}' not found in room '${this.roomName}'`
         );
      } else {
         this.log(`Removing user '${user.name}' from room '${this.roomName}'`);
         this.users = this.users.filter((user) => user.socket.id !== socketId);
      }
   }

   /**
    * Used for logging in a standard format within the class.
    * @param message
    */
   private log(message: string) {
      console.log(`[${this.roomName}] ${message}`);
   }
}
