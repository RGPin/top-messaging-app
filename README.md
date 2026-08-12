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

Slate 950 → page background
Slate 900 → panels / sidebar / cards
Slate 800 → inputs / message bubbles
Slate 700 → borders
Slate 500 → muted text
Slate 400 → secondary text
Slate 100 → primary text

Indigo 600 → primary buttons / own messages
Indigo 500 → hover / focus
Indigo 500/10 → selected states

Emerald 500 → online / accepted
Amber 400 → pending
Red 400 → errors / rejected
