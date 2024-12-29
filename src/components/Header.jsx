// import Cookies from "js-cookie";
// import React, { useState, useContext } from "react";
// import logo from "../assets/logo.png";
// import { useNavigate } from "react-router-dom";


// const Header = () => {
//   const [menuVisible, setMenuVisible] = useState(false); // State to control the menu visibility
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setMenuVisible(!menuVisible); // Toggle the visibility of the menu
//   };

//   const handleOptionClick = () => {
//     setMenuVisible(false); // Hide the menu when an option is clicked
//   };



//   const handlePublishClick = () => {
//     navigate("/login")
//     setMenuVisible(false); // Hide the menu when the publish button is clicked
//     //   // Navigate to the publish story page
//   };

//   // const token = Cookies.get("token")
//   //           if (!token) {
//   //             navigate('/signup')
//   //             return
//   //           }

//   return (
//     <div className="bg-black flex items-center justify-between p-4 text-white space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
//       {/* Logo */}
//       <img className="h-20" src={logo} alt="Logo" />

//       {/* Hamburger Icon (☰) */}
//       <div className="lg:hidden cursor-pointer text-white text-3xl" onClick={toggleMenu}>
//         ☰
//       </div>

//       {/* Navigation Links (for mobile and desktop) */}
//       <div
//         className={`${menuVisible ? "block" : "hidden"
//           } absolute top-[8rem] left-0 right-0 bg-black text-center lg:flex lg:space-x-8 lg:items-center lg:relative lg:top-0 `}
//       >
//         <p
//           onClick={() => {
//             window.location.href="http://localhost:5173/";
//             handleOptionClick();
//           }}
//           className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
//         >
//           Home
//         </p>
//         <p
//           onClick={() => {
//             window.location.href="http://localhost:5173/episodes";
//             const token = Cookies.get("token")
//             if (!token) {
//               navigate('/signup')
//               return
//             }
            
//             handleOptionClick();
//           }}
//           className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
//         >
//           Episodes
//         </p>
//         <p
//           onClick={() => {
//             window.location.href="https://blogs.journeystory.in";
//             handleOptionClick();
//           }}
//           className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
//         >
//           Blogs
//         </p>
//         <p
//           onClick={() => {
//             window.location.href="http://localhost:5174/";
//             handleOptionClick();
//           }}
//           className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
//         >
//           Stories
//         </p>
//         <p
//           onClick={() => {
//             window.location.href="http://localhost:5173/#about";
//             handleOptionClick();
//           }}
//           className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
//         >
//           About Us
//         </p>
//         <p
//           onClick={() => {
//             window.location.href="http://localhost:5173/#team";
//             handleOptionClick();
//           }}
//           className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
//         >
//           Team
//         </p>
//         <p
//           onClick={() => {
//             window.location.href="http://localhost:5173/reviews";
//             handleOptionClick();
//           }}
//           className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
//         >
//           Reviews
//         </p>
//         <p
//           onClick={() => {
//             window.location.href="http://localhost:5173/contact-us";
//             handleOptionClick();
//           }}
//           className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
//         >
//           Contact Us
//         </p>

//         {/* Publish a Story Button */}
//         <button
//           onClick={handlePublishClick}
          
//           className="text-gray-300 bg-blue-600 font-semibold text-[1.3rem] cursor-pointer w-[12rem] rounded-md h-11"
//         >
//           Publish a Story
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Header;





import Cookies from "js-cookie";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false); // State to control the menu visibility
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible); // Toggle the visibility of the menu
  };

  const handleOptionClick = () => {
    setMenuVisible(false); // Hide the menu when an option is clicked
  };

  const handlePublishClick = () => {
    navigate("/login");
    setMenuVisible(false); // Hide the menu when the publish button is clicked
  };

  return (
    <div className="bg-black">
      {/* Header Section */}
      <div className="flex items-center justify-between p-4 text-white">
        {/* Logo */}
        <img className="h-20" src={logo} alt="Logo" />

        {/* Hamburger Icon */}
        <div
          className="lg:hidden cursor-pointer text-white text-3xl"
          onClick={toggleMenu}
        >
          ☰
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex lg:space-x-8 lg:items-center">
          <p
            onClick={() => (window.location.href = "http://localhost:5173/")}
            className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
          >
            Home
          </p>
          <p
            onClick={() => {
              // const token = Cookies.get("token");
              // if (!token) {
              //   navigate("/signup");
              //   return;
              // }
              window.location.href = "http://localhost:5173/episodes";
              const token = Cookies.get("token");
              if (!token) {
                navigate("/signup");
                return;
              }
            }}
            className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
          >
            Episodes
          </p>
          
          <p
            onClick={() => (window.location.href = "http://localhost:5174/")}
            className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
          >
            Stories
          </p>
          <p
            onClick={() =>
              (window.location.href = "http://localhost:5173/#about")
            }
            className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
          >
            About Us
          </p>
          <p
            onClick={() =>
              (window.location.href = "http://localhost:5173/#team")
            }
            className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
          >
            Team
          </p>
          <p
            onClick={() =>
              (window.location.href = "http://localhost:5173/reviews")
            }
            className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
          >
            Reviews
          </p>
          <p
            onClick={() =>
              (window.location.href = "http://localhost:5173/contact-us")
            }
            className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
          >
            Contact Us
          </p>
          <button
            onClick={handlePublishClick}
            className="text-gray-300 bg-blue-600 font-semibold text-[1.3rem] cursor-pointer w-[12rem] rounded-md h-11"
          >
            Publish a Story
          </button>
        </div>
      </div>

      {/* Collapsible Menu (Mobile) */}
      {menuVisible && (
        <div className="lg:hidden bg-black text-center p-4 space-y-4">
          <p
            onClick={() => {
              window.location.href = "http://localhost:5173/";
              handleOptionClick();
            }}
            className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
          >
            Home
          </p>
          <p
            onClick={() => {
              // const token = Cookies.get("token");
              // if (!token) {
              //   navigate("/signup");
              //   return;
              // }
              window.location.href = "http://localhost:5173/episodes";
              handleOptionClick();
              const token = Cookies.get("token");
              if (!token) {
                navigate("/signup");
                return;
              }
            }}
            className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
          >
            Episodes
          </p>
          
          <p
            onClick={() => {
              window.location.href = "http://localhost:5174/";
              handleOptionClick();
            }}
            className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
          >
            Stories
          </p>
          <p
            onClick={() => {
              window.location.href = "http://localhost:5173/#about";
              handleOptionClick();
            }}
            className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
          >
            About Us
          </p>
          <p
            onClick={() => {
              window.location.href = "http://localhost:5173/#team";
              handleOptionClick();
            }}
            className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
          >
            Team
          </p>
          <p
            onClick={() => {
              window.location.href = "http://localhost:5173/reviews";
              handleOptionClick();
            }}
            className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
          >
            Reviews
          </p>
          <p
            onClick={() => {
              window.location.href = "http://localhost:5173/contact-us";
              handleOptionClick();
            }}
            className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
          >
            Contact Us
          </p>
          <button
            onClick={handlePublishClick}
            className="text-gray-300 bg-blue-600 font-semibold text-[1.3rem] cursor-pointer w-[12rem] rounded-md h-11"
          >
            Publish a Story
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
