// import { Phone, Mail, Instagram, Linkedin, Facebook } from "lucide-react";
// import { contactPhone, contactEmail } from "./navData";

// interface TopBarProps {
//   collapsed: boolean;
// }

// export default function TopBar({ collapsed }: TopBarProps) {
//   return (
//     <div
//       className={`overflow-hidden bg-[#18181B] text-white transition-[max-height,opacity] duration-300 ease-out ${
//         collapsed ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
//       }`}
//       aria-hidden={collapsed}
//     >
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
//         <p className="hidden text-zinc-300 sm:block">
//           Trusted Real Estate Solutions
//         </p>

//         <div className="flex w-full items-center justify-between gap-5 sm:w-auto sm:justify-end">
//           <a
//             href={`tel:${contactPhone.replace(/\s/g, "")}`}
//             className="flex items-center gap-1.5 text-zinc-300 transition-colors hover:text-white"
//           >
//             <Phone className="h-3.5 w-3.5" aria-hidden="true" />
//             <span className="hidden md:inline">{contactPhone}</span>
//           </a>

//           <a
//             href={`mailto:${contactEmail}`}
//             className="flex items-center gap-1.5 text-zinc-300 transition-colors hover:text-white"
//           >
//             <Mail className="h-3.5 w-3.5" aria-hidden="true" />
//             <span className="hidden md:inline">{contactEmail}</span>
//           </a>

//           <div className="flex items-center gap-3">
//             <a
//               href="#"
//               aria-label="Follow us on Instagram"
//               className="text-zinc-400 transition-colors hover:text-[#F1192C]"
//             >
//               <Instagram className="h-3.5 w-3.5" aria-hidden="true" />
//             </a>
//             <a
//               href="#"
//               aria-label="Follow us on LinkedIn"
//               className="text-zinc-400 transition-colors hover:text-[#F1192C]"
//             >
//               <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
//             </a>
//             <a
//               href="#"
//               aria-label="Follow us on Facebook"
//               className="text-zinc-400 transition-colors hover:text-[#F1192C]"
//             >
//               <Facebook className="h-3.5 w-3.5" aria-hidden="true" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import {
//   Phone,
//   Mail,
//   Instagram,
//   Linkedin,
//   Facebook,
// } from "lucide-react";

// import {
//   contactPhone,
//   contactEmail,
// } from "./navData";

// export default function TopBar({ collapsed }) {
//   return (
//     <div
//       className={`overflow-hidden bg-[#18181B] text-white transition-[max-height,opacity] duration-300 ease-out ${
//         collapsed
//           ? "max-h-0 opacity-0"
//           : "max-h-10 opacity-100"
//       }`}
//       aria-hidden={collapsed}
//     >
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
//         {/* Left Content */}
//         <p className="hidden text-zinc-300 sm:block">
//           Trusted Real Estate Solutions
//         </p>

//         {/* Right Content */}
//         <div className="flex w-full items-center justify-between gap-5 sm:w-auto sm:justify-end">
//           {/* Phone */}
//           <a
//             href={`tel:${contactPhone.replace(/\s/g, "")}`}
//             className="flex items-center gap-1.5 text-zinc-300 transition-colors hover:text-white"
//           >
//             <Phone
//               className="h-3.5 w-3.5"
//               aria-hidden="true"
//             />

//             <span className="hidden md:inline">
//               {contactPhone}
//             </span>
//           </a>

//           {/* Email */}
//           <a
//             href={`mailto:${contactEmail}`}
//             className="flex items-center gap-1.5 text-zinc-300 transition-colors hover:text-white"
//           >
//             <Mail
//               className="h-3.5 w-3.5"
//               aria-hidden="true"
//             />

//             <span className="hidden md:inline">
//               {contactEmail}
//             </span>
//           </a>

//           {/* Social Links */}
//           <div className="flex items-center gap-3">
//             {/* Instagram */}
//             <a
//               href="#"
//               aria-label="Follow us on Instagram"
//               className="text-zinc-400 transition-colors hover:text-[#F1192C]"
//             >
//               <Instagram
//                 className="h-3.5 w-3.5"
//                 aria-hidden="true"
//               />
//             </a>

//             {/* LinkedIn */}
//             <a
//               href="#"
//               aria-label="Follow us on LinkedIn"
//               className="text-zinc-400 transition-colors hover:text-[#F1192C]"
//             >
//               <Linkedin
//                 className="h-3.5 w-3.5"
//                 aria-hidden="true"
//               />
//             </a>

//             {/* Facebook */}
//             <a
//               href="#"
//               aria-label="Follow us on Facebook"
//               className="text-zinc-400 transition-colors hover:text-[#F1192C]"
//             >
//               <Facebook
//                 className="h-3.5 w-3.5"
//                 aria-hidden="true"
//               />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { Phone, Mail } from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

import {
  contactPhone,
  contactEmail,
} from "./navData";

export default function TopBar({ collapsed }) {
  return (
    <div
      className={`overflow-hidden bg-[#18181B] text-white transition-[max-height,opacity] duration-300 ease-out ${
        collapsed
          ? "max-h-0 opacity-0"
          : "max-h-10 opacity-100"
      }`}
      aria-hidden={collapsed}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
        {/* Left */}
        <p className="hidden text-zinc-300 sm:block">
          Trusted Real Estate Solutions
        </p>

        {/* Right */}
        <div className="flex w-full items-center justify-between gap-5 sm:w-auto sm:justify-end">
          
          {/* Phone */}
          <a
            href={`tel:${contactPhone.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 text-zinc-300 transition-colors hover:text-white"
          >
            <Phone
              className="h-3.5 w-3.5"
              aria-hidden="true"
            />

            <span className="hidden md:inline">
              {contactPhone}
            </span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${contactEmail}`}
            className="flex items-center gap-1.5 text-zinc-300 transition-colors hover:text-white"
          >
            <Mail
              className="h-3.5 w-3.5"
              aria-hidden="true"
            />

            <span className="hidden md:inline">
              {contactEmail}
            </span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            
            <a
              href="#"
              aria-label="Follow us on Instagram"
              className="text-zinc-400 transition-colors hover:text-[#F1192C]"
            >
              <FaInstagram
                className="h-3.5 w-3.5"
                aria-hidden="true"
              />
            </a>

            <a
              href="#"
              aria-label="Follow us on LinkedIn"
              className="text-zinc-400 transition-colors hover:text-[#F1192C]"
            >
              <FaLinkedinIn
                className="h-3.5 w-3.5"
                aria-hidden="true"
              />
            </a>

            <a
              href="#"
              aria-label="Follow us on Facebook"
              className="text-zinc-400 transition-colors hover:text-[#F1192C]"
            >
              <FaFacebookF
                className="h-3.5 w-3.5"
                aria-hidden="true"
              />
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}