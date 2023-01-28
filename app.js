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
 * Tree Shaking - Removing unwanted code -importing a library gives access to 10 or 20 helper function but we only need 2,3 fns. parcel will ignore all unused
 *
 *
 * Transitive Dependencies
 */

import React from "react";
import ReactDOM from "react-dom/client";

// const headingR = React.createElement(
//   "h1",
//   { key: "h1" },
//   "Hello! This is created using React! I'm from Parcel"
// );
// const heading = React.createElement(
//   "h2",
//   {
//     id: "tittle",
//     key: "h2",
//     className: "head",
//   },
//   "Hello! This is created using React!"
// );

// console.log(heading);

// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//   },
//   [headingR, heading]
// );

//React Element
// const heading = (
//   <h1 id="title" key="h1">
//     This is React Element
//   </h1>
// );

const Title = () => (
  <a href="#">
    <img
      className="logo"
      src="https://th.bing.com/th/id/OIP._b6q0KzTrD7VrwPuS-gojgAAAA?pid=ImgDet&rs=1"
      alt="Logo"
    />
  </a>
);
// Functional Component
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return <h3>Body</h3>;
};

const Footer = () => {
  return <h3>Footer</h3>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing react element inside the root
// root.render(heading);

//render Component
root.render(<AppLayout />);
