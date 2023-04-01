import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar";
import Meals from "./Components/Meals/Meals";
import Modal from "./Components/Modal/Modal";
import Favorites from "./Components/Favorites/Favorites";

function App() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    const handleOnlineStatus = () => setIsOnline(true);
    const handleOfflineStatus = () => setIsOnline(false);

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOfflineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOfflineStatus);
    };
  }, []);
  return (
    <div className="App">
      {isOnline ? (
        <div>
          <NavBar />
          <Favorites />
          <Meals />
          <Modal />
        </div>
      ) : (
        <h2
          className="internet_msg"
          style={{
            color: "#333",
            fontWeight: "bold",
            textAlign: "center",
            letterSpacing: "1px",
            marginTop: "25%",
            fontSize: "3.5vh",
          }}
        >
          Internet connection is off, so try reconnecting
        </h2>
      )}
    </div>
  );
}

export default App;
