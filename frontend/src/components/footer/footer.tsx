


export default function Footer() {
  return (
    <footer className="flex flex-col border-2 border-blue-600 min-h-175 bg-gray-800 text-white py-10">
      <div className="flex flex-col container mx-auto px-6">
        {/* Footer box for further inqury */}
        <div className="flex md:flex-row justify-between items-start space-y-0">
          {/* Logo */}
          <div className="border-2 border-blue-600">Logo</div>

          {/* Contact */}
          <div>Contact</div>

          {/* Instagram */}
          <div>Instagram</div>

          {/* Newsletter */}
          <div>Newsletter</div>
        </div>
        {/* Footer sticks to bottom */}
        <div className="py-4 text-center text-sm text-gray-500">
          <p>&copy; 2025 Insure. All rights reserved.</p>
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
