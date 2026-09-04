// "use client";

// import Link from "next/link";

// export default function MegaMenu({ item, open }) {
//   if (!item?.menu) return null;

//   return (
//     <div
//       className={`absolute left-1/2 top-full z-50 w-[calc(100vw-32px)] max-w-[1225px] -translate-x-1/2 pt-2 transition-all duration-200 ${
//         open
//           ? "pointer-events-auto visible opacity-100"
//           : "pointer-events-none invisible opacity-0"
//       }`}
//     >
//       <div className="rounded-b-xl border border-[#E5E5E5] bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.14)]">
//         <div
//           className={`grid gap-8 ${
//             item.menu.columns.length >= 5
//               ? "grid-cols-5"
//               : item.menu.columns.length === 4
//               ? "grid-cols-4"
//               : "grid-cols-3"
//           }`}
//         >
//           {item.menu.columns.map((column) => (
//             <div key={column.title}>
//               <h3 className="border-b border-[#E5E5E5] pb-3 text-[15px] font-medium text-[#303030]">
//                 {column.title}
//               </h3>

//               <ul className="mt-3 space-y-2">
//                 {column.items.map((itemName) => (
//                   <li key={itemName}>
//                     <Link
//                       href="#"
//                       className="block py-1 text-[14px] text-[#444] transition-colors hover:text-[#F1192C]"
//                     >
//                       {itemName}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";
// import Link from "next/link";

// export default function MegaMenu({ categories }) {
//   if (!categories || categories.length === 0) return null;

//   return (
//     <div className="absolute left-0 top-full z-50 w-full bg-white shadow-2xl border-t border-slate-100 animate-in fade-in slide-in-from-top-1 duration-150">
//       <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-5 gap-8">
//         {categories.map((col, idx) => (
//           <div key={idx} className="flex flex-col space-y-3">
//             <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
//               {col.title}
//             </h4>
//             <ul className="space-y-2.5">
//               {col.items.map((item, itemIdx) => (
//                 <li key={itemIdx}>
//                   <Link
//                     href={item.href}
//                     className="text-[13px] text-slate-700 hover:text-red-600 font-medium inline-flex items-center gap-1.5 transition-colors"
//                   >
//                     <span>{item.name}</span>
//                     {item.badge && (
//                       <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-1 py-0.2 rounded leading-none">
//                         {item.badge}
//                       </span>
//                     )}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





// "use client";
// import Link from "next/link";

// export default function MegaMenu({ columns, onClose }) {
//   if (!columns || columns.length === 0) return null;

//   return (
//     <div
//       onMouseEnter={() => {}}
//       className="absolute left-0 top-[37px] z-40 w-full bg-white rounded-b-xl shadow-[0_15px_30px_rgba(0,0,0,0.12)] border border-t-0 border-slate-200 transition-all duration-150"
//     >
//       <div className="max-w-[1240px] mx-auto px-6 py-7">
//         <div
//           className="grid gap-8"
//           style={{
//             gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`,
//           }}
//         >
//           {columns.map((col, idx) => (
//             <div key={idx} className="flex flex-col">
//               {/* Column Title Header */}
//               <h3 className="text-[14.5px] font-normal text-[#303030] tracking-wide mb-3 pb-1 border-b border-transparent">
//                 {col.title}
//               </h3>

//               {/* Items List */}
//               <ul className="space-y-2.5">
//                 {col.items.map((item, i) => (
//                   <li key={i}>
//                     <Link
//                       href={item.href}
//                       onClick={onClose}
//                       className="group inline-flex items-center gap-1.5 text-[13px] text-[#4a4a4a] hover:text-[#d8232a] transition-colors leading-relaxed"
//                     >
//                       <span>{item.name}</span>
//                       {item.badge && (
//                         <span className="text-[9.5px] font-semibold text-[#d8232a] border border-[#f5b8b9] bg-[#fff5f5] px-1 py-[1px] rounded leading-none">
//                           {item.badge}
//                         </span>
//                       )}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";
// import Link from "next/link";

// export default function MegaMenu({ columns, menuWidth = "w-[840px]", onClose }) {
//   if (!columns || columns.length === 0) return null;

//   return (
//     <div
//       className={`absolute left-0 top-full z-40 ${menuWidth} bg-white rounded-b-[10px] rounded-tr-[10px] shadow-[0_12px_28px_rgba(0,0,0,0.15)] border border-[#e0e0e0] p-6`}
//       style={{ marginTop: "-1px" }}
//     >
//       <div
//         className="grid gap-6 items-start"
//         style={{
//           gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`,
//         }}
//       >
//         {columns.map((col, idx) => (
//           <div key={idx} className="flex flex-col min-w-0">
//             {/* Header with bottom thin rule */}
//             <div className="border-b border-[#eeeeee] pb-2 mb-3">
//               <h4 className="text-[14px] font-normal text-[#222222] whitespace-nowrap">
//                 {col.title}
//               </h4>
//             </div>

//             {/* List */}
//             <ul className="space-y-2.5">
//               {col.items.map((item, i) => (
//                 <li key={i} className="leading-tight">
//                   <Link
//                     href={item.href}
//                     onClick={onClose}
//                     className="inline-flex items-center gap-1.5 text-[12.5px] text-[#444444] hover:text-[#d8232a] font-normal transition-colors"
//                   >
//                     <span className="truncate max-w-[190px]">{item.name}</span>
//                     {item.badge && (
//                       <span className="text-[9px] font-semibold text-[#d8232a] border border-[#f5b8b9] bg-[#fff5f5] px-1 py-[0.5px] rounded-[2px]">
//                         {item.badge}
//                       </span>
//                     )}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";

import Link from "next/link";

export default function MegaMenu({
  columns,
  menuWidth = "w-[840px]",
  onClose,
}) {
  if (!columns || columns.length === 0) return null;

  return (
    <div
      className={`
        absolute left-0 top-full z-40
        ${menuWidth}
        max-w-[calc(100vw-32px)]
        bg-white
        rounded-b-[10px]
        rounded-tr-[10px]
        shadow-[0_12px_28px_rgba(0,0,0,0.15)]
        border border-[#e0e0e0]
        p-6
      `}
      style={{ marginTop: "-1px" }}
    >
      <div
        className="grid gap-6 items-start"
        style={{
          gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`,
        }}
      >
        {columns.map((col, idx) => (
          <div key={idx} className="flex min-w-0 flex-col">
            
            {/* Column Title */}
            <div className="mb-3 border-b border-[#eeeeee] pb-2">
              <h4 className="whitespace-nowrap text-[14px] font-medium text-[#222222]">
                {col.title}
              </h4>
            </div>

            {/* Menu Items */}
            <ul className="space-y-2.5">
              {col.items.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="
                      inline-flex items-center gap-1.5
                      text-[12.5px]
                      leading-tight
                      text-[#444444]
                      transition-colors
                      hover:text-[#d8232a]
                    "
                  >
                    <span className="max-w-[190px] truncate">
                      {item.name}
                    </span>

                    {item.badge && (
                      <span
                        className="
                          rounded-[2px]
                          border border-[#f5b8b9]
                          bg-[#fff5f5]
                          px-1
                          py-[0.5px]
                          text-[9px]
                          font-semibold
                          text-[#d8232a]
                        "
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </div>
  );
}