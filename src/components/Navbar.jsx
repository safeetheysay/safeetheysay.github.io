// export default function Navbar() {
//   return (
//     <nav className="p-4 shadow-md bg-white sticky top-0 z-50">
//       <div className="max-w-6xl mx-auto flex justify-between items-center">
//         <h1 className="text-2xl md:text-3xl font-bold !text-pink-600">
//           Safeer Ahmad Awan
//         </h1>
//         <ul className="flex gap-6">
//           <li>
//             <a
//               href="#about"
//               className="hover:text-white hover:bg-blue-500 px-3 py-1 rounded transition duration-300"
//             >
//               About
//             </a>
//           </li>
//           <li>
//             <a href="#projects" className="hover:text-blue-500">
//               Projects
//             </a>
//           </li>
//           <li>
//             <a href="#contact" className="hover:text-blue-500">
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

export default function Navbar() {
  return (
    <nav>
      <h1 className="title-pink">Portfolio Website</h1>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
