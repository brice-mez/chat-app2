import React from 'react';
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact 
        name="Ross"
        avatar="https://randomuser.me/api/portraits/men/86.jpg"
        isOnline
      />
      <Contact
        name="Josh"
        avatar="https://randomuser.me/api/portraits/men/72.jpg"
       />
       <Contact
        name="Rose"
        avatar="https://randomuser.me/api/portraits/women/80.jpg"
        isOnline
      />
    </div>
  );
}

export default App;
