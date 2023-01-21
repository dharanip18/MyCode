/***
*
* Created A Server
* HMR - Hot Module Replacement - saving is updated in browser
* File Watcher algorithm - C++
* BUNDLING
* MINIFY
* Cleaning our Code
* Dev abd Production Build
* Super Fast build algorithm
* Image Optimization
* Caching while development - .parcel-cache
* Compression
* Compatble with older version of browser
* HTTPS on dev  npx parcel index.html --https - https://localhost:1234
* port Number - If you open other project port must vary - parcel takes care
* Consistent Hashing Algorithm - to do all the bundling
* Zero Config
*
*
*
* Transitive Dependencies
*/

import React from "react";
import ReactDOM from "react-dom/client";

const headingR = React.createElement(
    "h1",
    {},
    "Hello! This is created using React! I'm from Parcel"
    
  );
  const heading = React.createElement(
    "h2",
    { id: "tittle", className: "head" },
    "Hello! This is created using React!"
  );

  const container = React.createElement("div", { id: "container" }, [
    headingR,
    heading,
  ]);
  console.log(heading);
  const root = ReactDOM.createRoot(document.getElementById("root"));

  // passing react element inside the root
  root.render(container);