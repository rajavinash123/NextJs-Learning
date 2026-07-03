import Script from "next/script";
import React from "react";

const learn = () => {
  return (
    <div>
      <h1>Learn Page</h1>

      <Script id="welcome-alert">
        {`
          alert("Welcome to skill section");
        `}
      </Script>
    </div>
  );
};

export default learn;