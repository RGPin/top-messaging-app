import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar";

/*
## Pages:

- login (email, password)
- signup (name, email, password)
- profile
- messages (friend/conversation list on the side)
- friends (add, friend requests)

will be using 2 column web layout for desktop and single column for mobile
left column will be sidebar divided to two for navigation and conversations/messages list
right column will be the main content area for messages or profile

use react router to navigate between pages

Slate 950 → page background
Slate 900 → panels / sidebar / cards
Slate 800 → inputs / message bubbles
Slate 700 → borders
Slate 500 → muted text
Slate 400 → secondary text
Slate 100 → primary text

what should shadow be qwen? answer: shadow is slate 700
how do i use that in tailwind? answer: use shadow-slate-700

Indigo 600 → primary buttons / own messages
Indigo 500 → hover / focus
Indigo 500/10 → selected states

Emerald 500 → online / accepted
Amber 400 → pending
Red 400 → errors / rejected

*/
function App() {
  return (
    <div className="bg-slate-950">
      <div>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
