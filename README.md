# top-messaging-app

## Learn:

- mongodb
- socket.io
- tailwindcss

## Backend:

- Node TS
- Express
- Supabase Storage
- Zod
- bcrypt

## Frontend:

- React TS
- Zustand
- Tanstack

## Auth:

- jwt, access token in httponly

## Pages:

- login (email, password)
- signup (name, email, password)
- profile
- messages (friend/conversation list on the side)
- friends (add, friend requests)

## Routes:

- POST /users/login
- POST /users/signup
- POST /users/logout
- GET /users/me
- DELETE /users/:userId

- GET /friends
- POST /friends/requests/:userId
- GET /friends/requests
- POST /friends/requests/:requestId/accept
- POST /friends/requests/:requestId/reject
- DELETE /friends/:userId

- GET /conversations
- GET /conversations/:conversationId/messages
- POST /conversations/:conversationId/messages

## Models:

### User:

- name
- email
- password
- avatar?
- createdAt
- updatedAt

### Friendship:

- requesterId
- recipientId
- status, FriendShipStatus: "pending" | "accepted" | "rejected"
- createdAt
- updatedAt

### Message:

- conversationId
- senderId
- text
- image
- createdAt

### Conversation:

- participants, string[]
- name?
- createdAt
