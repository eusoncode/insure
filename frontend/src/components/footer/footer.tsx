import CustomLink from "@/lib/Helper_function/links";
import Image from "next/image";
import logo from "@/assets/logo-light.png";

export default function Footer() {
  return (
    <footer className="flex justify-center align-center min-h-175 bg-custom-blue text-white py-10">
      <div className="container flex flex-col justify-between mt-16 mx-auto border-2 border-transparent">
        {/* Footer box for further inqury */}
        <div className="flex flex-row mt-16 space-x-2 justify-between items-start space-y-0">
          {/* Logo and socials */}
          <div className="flex flex-col max-w space-y-2 justify-start items-start">
            {/* Logo */}
            <div>
              <CustomLink href="/home" className="flex mb-4">
                <Image src={logo} alt="logo" priority width={200} />
              </CustomLink>
            </div>
            <h3 className="flex flex-wrap font-sans font-bold text-xl">
              Insurance that reflects the way <br /> you live your life.
            </h3>
            <div className="flex flex-row mt-4 space-x-6">
              <div className="flex justify-center items-center text-lg text-white border-1 rounded-4xl w-8 h-8 bg-socials-gray border-transparent">
                t
              </div>
              <div className="flex justify-center items-center text-lg text-white border-1 rounded-4xl w-8 h-8 bg-socials-gray border-transparent">
                f
              </div>
              <div className="flex justify-center items-center text-lg text-white border-1 rounded-4xl w-8 h-8 bg-socials-gray border-transparent">
                p
              </div>
              <div className="flex justify-center items-center text-lg text-white border-1 rounded-4xl w-8 h-8 bg-socials-gray border-transparent">
                @
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col justify-start items-start space-y-6">
            <h2 className="flex flex-row space-x-4 justify-center items-center font-bold text-[20px] leading-[24px]">
              <p>Contact</p>
              <div className="border-2 border-base-didi w-6 rounded-2xl"></div>
            </h2>
            <p className="font-sans text-insure-text-dark">
              88 Broklyn Golden Road Street, <br /> New York. USA
            </p>
            <div className="flex flex-col justify-center items-start space-y-2 mt-4">
              <div className="flex flex-row space-x-4">
                <i>@</i>
                <p>+92(8800)-6930</p>
              </div>
              <div className="flex flex-row space-x-4">
                <i>@</i>
                <p>needhelp@company.com</p>
              </div>
            </div>
          </div>

          {/* Instagram */}
          <div className="flex flex-col justify-start items-start space-y-6 max-w-sm">
            <h2 className="flex flex-row space-x-4 justify-center items-center font-bold text-[20px] leading-[24px]">
              <p>Instagram</p>
              <div className="border-2 border-base-didi w-6 rounded-2xl"></div>
            </h2>
            <ul className="container flex flex-wrap flex-row w-full space-x-2 mt-4 space-y-2">
              <li className="h-24 w-29 rounded-sm bg-gray-400 border-2 border-transparent"></li>
              <li className="h-24 w-29 rounded-sm bg-gray-400 border-2 border-transparent"></li>
              <li className="h-24 w-29 rounded-sm bg-gray-400 border-2 border-transparent"></li>
              <li className="h-24 w-29 rounded-sm bg-gray-400 border-2 border-transparent"></li>
              <li className="h-24 w-29 rounded-sm bg-gray-400 border-2 border-transparent"></li>
              <li className="h-24 w-29 rounded-sm bg-gray-400 border-2 border-transparent"></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col justify-start items-start space-y-6">
            <h2 className="flex flex-row space-x-4 justify-center items-center font-bold text-[20px] leading-[24px]">
              <p>Newletter</p>
              <div className="border-2 border-base-didi w-6 rounded-2xl"></div>
            </h2>
            <p className="font-sans text-insure-text-dark">
              Subscribe our newsletter to get <br /> our latest update & news.
            </p>
            <form
              action="#"
              method="POST"
              className="container mx-auto flex border-2 border-blue-600"
            >
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="flex justify-center items-center pl-8 pr-12 bg-white font-bold text-black"
              />
              <button
                type="submit"
                className="px-1 py-6 bg-base-didi border-2 border-blue-600"
              >
                <span>Submit</span>
              </button>
            </form>
          </div>
        </div>
        {/* Footer sticks to bottom */}
        <div className="border-2 border-transparent bg-custom-darker-blue py-10">
          <p className="font-sans font-medium text-[15px] leading-[23px] text-insure-text-dark text-center">
            &copy; Copyright 2025 by Insure. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// export default function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white py-10">
//       <div className="container mx-auto px-6">
//         {/* Footer Content */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
//           {/* Logo Section */}
//           <div className="flex items-center space-x-3">
//             {/* Replace 'Logo' with your actual logo */}
//             <div className="text-2xl font-bold">Logo</div>
//           </div>

//           {/* Contact Information */}
//           <div>
//             <h2 className="text-lg font-semibold">Contact Us</h2>
//             <p className="mt-2 text-sm text-gray-400">
//               1234 Street Name, City, State, 12345
//             </p>
//             <p className="text-sm text-gray-400">Email: info@example.com</p>
//             <p className="text-sm text-gray-400">Phone: (123) 456-7890</p>
//           </div>

//           {/* Social Media Links */}
//           <div>
//             <h2 className="text-lg font-semibold">Follow Us</h2>
//             <div className="mt-2 flex space-x-4">
//               {/* Replace '#' with your actual social media links */}
//               <a href="#" className="text-gray-400 hover:text-white">
//                 {/* Example: Facebook Icon */}
//                 <svg
//                   className="w-6 h-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   {/* SVG path */}
//                 </svg>
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white">
//                 {/* Example: Twitter Icon */}
//                 <svg
//                   className="w-6 h-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   {/* SVG path */}
//                 </svg>
//               </a>
//               {/* Add more social media links as needed */}
//             </div>
//           </div>

//           {/* Newsletter Subscription */}
//           <div>
//             <h2 className="text-lg font-semibold">Newsletter</h2>
//             <p className="mt-2 text-sm text-gray-400">
//               Subscribe to our newsletter for the latest updates.
//             </p>
//             <form className="mt-4 flex">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="px-4 py-2 w-full text-gray-900 rounded-l-md focus:outline-none"
//               />
//               <button
//                 type="submit"
//                 className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 focus:outline-none"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="mt-10 border-t border-gray-700 pt-5 text-center">
//           <p className="text-sm text-gray-400">
//             &copy; 2025 Insure. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }
