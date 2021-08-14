import "./App.css";
import Header from "./Header/Header";
import SwipeButtons from "./Swipe_Buttons/SwipeButtons";
import TinderCards from "./Tinder_Cards/TinderCards";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Tinder cards */}
      <TinderCards />
      {/* Swipe buttons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
