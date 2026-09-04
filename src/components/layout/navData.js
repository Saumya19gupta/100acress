// import type { LucideIcon } from "lucide-react";
// import {
//   Home,
//   KeyRound,
//   TrendingUp,
//   Building2,
//   Warehouse,
//   Trees,
//   LandPlot,
// } from "lucide-react";

// export interface NavLink {
//   label: string;
//   href: string;
// }

// export interface DropdownItem {
//   icon: LucideIcon;
//   title: string;
//   description: string;
//   href: string;
// }

// export interface DropdownSection {
//   heading: string;
//   items: DropdownItem[];
// }

// /** Primary navigation links shown in the main navbar (excluding the Explore Properties trigger). */
// export const primaryLinks: NavLink[] = [
//   { label: "Home", href: "/" },
//   { label: "Our Services", href: "/services" },
//   { label: "Why Choose Us", href: "/why-us" },
//   { label: "Company", href: "/company" },
// ];

// /** All top-level links in display order, used by mobile navigation for the numbered list. */
// export const allLinks: NavLink[] = [
//   { label: "Home", href: "/" },
//   { label: "Explore Properties", href: "/properties" },
//   { label: "Our Services", href: "/services" },
//   { label: "Why Choose Us", href: "/why-us" },
//   { label: "Company", href: "/company" },
// ];

// export const explorePropertiesSections: DropdownSection[] = [
//   {
//     heading: "Browse by purpose",
//     items: [
//       {
//         icon: Home,
//         title: "Buy a property",
//         description: "Find your perfect home",
//         href: "/properties/buy",
//       },
//       {
//         icon: KeyRound,
//         title: "Rent a property",
//         description: "Move in without the wait",
//         href: "/properties/rent",
//       },
//       {
//         icon: TrendingUp,
//         title: "Invest in property",
//         description: "Grow wealth through real estate",
//         href: "/properties/invest",
//       },
//     ],
//   },
//   {
//     heading: "Browse by type",
//     items: [
//       {
//         icon: Building2,
//         title: "Apartments",
//         description: "Modern living spaces",
//         href: "/properties/apartments",
//       },
//       {
//         icon: Warehouse,
//         title: "Villas",
//         description: "Standalone luxury homes",
//         href: "/properties/villas",
//       },
//       {
//         icon: Trees,
//         title: "Commercial spaces",
//         description: "Offices, retail and more",
//         href: "/properties/commercial",
//       },
//       {
//         icon: LandPlot,
//         title: "Plots & land",
//         description: "Build on your own terms",
//         href: "/properties/plots",
//       },
//     ],
//   },
// ];

// export const contactPhone = "+91 98765 43210";
// export const contactEmail = "hello@atriumestates.in";


// import {
//   Home,
//   KeyRound,
//   TrendingUp,
//   Building2,
//   Warehouse,
//   Trees,
//   LandPlot,
// } from "lucide-react";

// /**
//  * Primary navigation links shown in the main navbar
//  * excluding the Explore Properties trigger.
//  */
// export const primaryLinks = [
//   {
//     label: "Home",
//     href: "/",
//   },
//   {
//     label: "Our Services",
//     href: "/services",
//   },
//   {
//     label: "Why Choose Us",
//     href: "/why-us",
//   },
//   {
//     label: "Company",
//     href: "/company",
//   },
// ];

// /**
//  * All top-level links used by mobile navigation.
//  */
// export const allLinks = [
//   {
//     label: "Home",
//     href: "/",
//   },
//   {
//     label: "Explore Properties",
//     href: "/properties",
//   },
//   {
//     label: "Our Services",
//     href: "/services",
//   },
//   {
//     label: "Why Choose Us",
//     href: "/why-us",
//   },
//   {
//     label: "Company",
//     href: "/company",
//   },
// ];

// /**
//  * Explore Properties dropdown sections.
//  */
// export const explorePropertiesSections = [
//   {
//     heading: "Browse by purpose",
//     items: [
//       {
//         icon: Home,
//         title: "Buy a property",
//         description: "Find your perfect home",
//         href: "/properties/buy",
//       },
//       {
//         icon: KeyRound,
//         title: "Rent a property",
//         description: "Move in without the wait",
//         href: "/properties/rent",
//       },
//       {
//         icon: TrendingUp,
//         title: "Invest in property",
//         description: "Grow wealth through real estate",
//         href: "/properties/invest",
//       },
//     ],
//   },

//   {
//     heading: "Browse by type",
//     items: [
//       {
//         icon: Building2,
//         title: "Apartments",
//         description: "Modern living spaces",
//         href: "/properties/apartments",
//       },
//       {
//         icon: Warehouse,
//         title: "Villas",
//         description: "Standalone luxury homes",
//         href: "/properties/villas",
//       },
//       {
//         icon: Trees,
//         title: "Commercial spaces",
//         description: "Offices, retail and more",
//         href: "/properties/commercial",
//       },
//       {
//         icon: LandPlot,
//         title: "Plots & land",
//         description: "Build on your own terms",
//         href: "/properties/plots",
//       },
//     ],
//   },
// ];

// export const contactPhone = "+91 98765 43210";

// export const contactEmail = "hello@atriumestates.in";




// export const mainNavigation = [
//   {
//     label: "Buy",
//     menu: {
//       columns: [
//         {
//           title: "Popular Choices",
//           items: [
//             "Ready to Move",
//             "Owner Properties",
//             "Budget Homes",
//             "Premium Homes",
//             "New Projects",
//           ],
//         },
//         {
//           title: "Property Types",
//           items: [
//             "Flats",
//             "House for Sale",
//             "Villa",
//             "Plot",
//             "Office Space",
//             "Commercial Space",
//           ],
//         },
//         {
//           title: "Budget",
//           items: [
//             "Under ₹50 Lac",
//             "₹50 Lac - ₹1 Cr",
//             "₹1 Cr - ₹1.5 Cr",
//             "Above ₹1.5 Cr",
//           ],
//         },
//         {
//           title: "Explore",
//           items: [
//             "Localities",
//             "Projects",
//             "Find an Agent",
//             "Home Interiors",
//           ],
//         },
//         {
//           title: "Buying Tools",
//           items: [
//             "Property Rates",
//             "Rates & Trends",
//             "Buy vs Rent",
//             "Tips & Guides",
//           ],
//         },
//       ],
//     },
//   },

//   {
//     label: "Rent",
//     menu: {
//       columns: [
//         {
//           title: "Popular Choices",
//           items: [
//             "Flats for Rent",
//             "Owner Properties",
//             "No Brokerage",
//             "Ready to Move",
//           ],
//         },
//         {
//           title: "Property Types",
//           items: [
//             "Apartment",
//             "Independent House",
//             "Villa",
//             "PG",
//             "Office Space",
//           ],
//         },
//         {
//           title: "Budget",
//           items: [
//             "Under ₹15K",
//             "₹15K - ₹30K",
//             "₹30K - ₹50K",
//             "Above ₹50K",
//           ],
//         },
//         {
//           title: "Explore",
//           items: [
//             "Localities",
//             "Rental Projects",
//             "Find an Agent",
//           ],
//         },
//       ],
//     },
//   },

//   {
//     label: "Sell",
//     menu: {
//       columns: [
//         {
//           title: "Sell Property",
//           items: [
//             "Post Property",
//             "Sell Apartment",
//             "Sell House",
//             "Sell Villa",
//             "Sell Plot",
//           ],
//         },
//         {
//           title: "Property Types",
//           items: [
//             "Residential",
//             "Commercial",
//             "Land",
//             "Industrial",
//           ],
//         },
//         {
//           title: "Seller Tools",
//           items: [
//             "Property Valuation",
//             "Market Trends",
//             "Seller Guide",
//           ],
//         },
//         {
//           title: "Need Help?",
//           items: [
//             "Find an Agent",
//             "Talk to Expert",
//             "Sell Faster",
//           ],
//         },
//       ],
//     },
//   },

//   {
//     label: "Home Loans",
//     menu: {
//       columns: [
//         {
//           title: "Home Loans",
//           items: [
//             "Home Loan",
//             "Home Loan EMI",
//             "Loan Eligibility",
//             "Interest Rates",
//           ],
//         },
//         {
//           title: "Loan Types",
//           items: [
//             "New Home Loan",
//             "Home Loan Balance Transfer",
//             "Loan Against Property",
//           ],
//         },
//         {
//           title: "Tools",
//           items: [
//             "EMI Calculator",
//             "Eligibility Calculator",
//             "Stamp Duty Calculator",
//           ],
//         },
//       ],
//     },
//   },

//   {
//     label: "Home Interiors",
//     menu: {
//       columns: [
//         {
//           title: "Interiors",
//           items: [
//             "Complete Home Interiors",
//             "Kitchen Design",
//             "Living Room",
//             "Bedroom",
//           ],
//         },
//         {
//           title: "Services",
//           items: [
//             "Modular Kitchen",
//             "Wardrobe",
//             "False Ceiling",
//             "Furniture",
//           ],
//         },
//         {
//           title: "Explore",
//           items: [
//             "Design Ideas",
//             "Interior Cost",
//             "Expert Consultation",
//           ],
//         },
//       ],
//     },
//   },

//   {
//     label: "MB Advice",
//     badge: "NEW",
//     menu: {
//       columns: [
//         {
//           title: "Advice",
//           items: [
//             "Real Estate News",
//             "Property Tips",
//             "Buying Guide",
//             "Selling Guide",
//           ],
//         },
//         {
//           title: "Research",
//           items: [
//             "Property Rates",
//             "Market Trends",
//             "Locality Insights",
//           ],
//         },
//         {
//           title: "Guides",
//           items: [
//             "Home Buying",
//             "Home Selling",
//             "Investment Guide",
//           ],
//         },
//       ],
//     },
//   },

//   {
//     label: "Help",
//     menu: {
//       columns: [
//         {
//           title: "Help Center",
//           items: [
//             "Contact Us",
//             "FAQs",
//             "Customer Support",
//           ],
//         },
//         {
//           title: "For Buyers",
//           items: [
//             "Buying Guide",
//             "Property Search Help",
//           ],
//         },
//         {
//           title: "For Sellers",
//           items: [
//             "Post Property Help",
//             "Seller Support",
//           ],
//         },
//       ],
//     },
//   },
// ];


// export const NAV_LINKS = [
//   {
//     id: "buy",
//     label: "Buy",
//     hasMegaMenu: true,
//     badge: null,
//     categories: [
//       {
//         title: "Popular Choices",
//         items: [
//           { name: "Ready to Move", href: "#" },
//           { name: "Owner Properties", href: "#" },
//           { name: "Budget Homes", href: "#" },
//           { name: "Premium Homes", href: "#" },
//           { name: "New Projects", href: "#", badge: "magicHomes" },
//         ],
//       },
//       {
//         title: "Property Types",
//         items: [
//           { name: "Flats in Mumbai", href: "#" },
//           { name: "House for sale in Mumbai", href: "#" },
//           { name: "Villa in Mumbai", href: "#" },
//           { name: "Plot in Mumbai", href: "#" },
//           { name: "Office Space in Mumbai", href: "#" },
//           { name: "Commercial Space in Mumbai", href: "#" },
//         ],
//       },
//       {
//         title: "Budget",
//         items: [
//           { name: "Under ₹ 50 Lac", href: "#" },
//           { name: "₹ 50 Lac - ₹ 1 Cr", href: "#" },
//           { name: "₹ 1 Cr - ₹ 1.5 Cr", href: "#" },
//           { name: "Above ₹ 1.5 Cr", href: "#" },
//         ],
//       },
//       {
//         title: "Explore",
//         items: [
//           { name: "Localities in Mumbai", href: "#" },
//           { name: "Projects in Mumbai", href: "#" },
//           { name: "Find an Agent", href: "#" },
//           { name: "Home Interiors in Mumbai", href: "#" },
//         ],
//       },
//       {
//         title: "Buying Tools",
//         items: [
//           { name: "PropWorth", href: "#" },
//           { name: "Rates & Trends", href: "#" },
//           { name: "Buy vs Rent", href: "#" },
//           { name: "Tips and Guides", href: "#" },
//         ],
//       },
//     ],
//   },
//   { id: "rent", label: "Rent", hasMegaMenu: false, badge: null },
//   { id: "sell", label: "Sell", hasMegaMenu: false, badge: null },
//   { id: "loans", label: "Home Loans", hasMegaMenu: false, badge: null },
//   { id: "interiors", label: "Home Interiors", hasMegaMenu: false, badge: null },
//   { id: "advice", label: "MB Advice", hasMegaMenu: false, badge: "NEW" },
//   { id: "help", label: "Help", hasMegaMenu: false, badge: null },
// ];

// export const LOGIN_MENU = {
//   activity: [
//     { label: "Requested Properties", badge: "NEW", href: "#" },
//     { label: "MagicDiary", badge: "NEW", href: "#" },
//     { label: "Contacted Properties", badge: null, href: "#" },
//     { label: "Viewed Properties", badge: null, href: "#" },
//     { label: "Shortlisted Properties", badge: null, href: "#" },
//     { label: "Searches", badge: null, href: "#" },
//   ],
//   account: [
//     { label: "Recommendations", href: "#" },
//     { label: "My Profile", href: "#" },
//   ],
// };



// export const CITIES = [
//   "Mumbai",
//   "Delhi / NCR",
//   "Bangalore",
//   "Hyderabad",
//   "Pune",
//   "Chennai",
//   "Kolkata",
//   "Ahmedabad",
//   "Thane",
//   "Navi Mumbai",
// ];

// export const NAV_LINKS = [
//   {
//     id: "buy",
//     label: "Buy",
//     hasMegaMenu: true,
//     badge: null,
//     columns: [
//       {
//         title: "Popular Choices",
//         items: [
//           { name: "Ready to Move", href: "/buy/ready-to-move" },
//           { name: "Owner Properties", href: "/buy/owner-properties" },
//           { name: "Budget Homes", href: "/buy/budget-homes" },
//           { name: "Premium Homes", href: "/buy/premium-homes" },
//           { name: "New Projects", href: "/buy/new-projects", badge: "magicHomes" },
//         ],
//       },
//       {
//         title: "Property Types",
//         items: [
//           { name: "Flats in Mumbai", href: "/buy/flats-mumbai" },
//           { name: "House for sale in Mumbai", href: "/buy/house-mumbai" },
//           { name: "Villa in Mumbai", href: "/buy/villa-mumbai" },
//           { name: "Plot in Mumbai", href: "/buy/plots-mumbai" },
//           { name: "Office Space in Mumbai", href: "/buy/office-space-mumbai" },
//           { name: "Commercial Space in Mumbai", href: "/buy/commercial-space-mumbai" },
//         ],
//       },
//       {
//         title: "Budget",
//         items: [
//           { name: "Under ₹ 50 Lac", href: "/buy/under-50-lac" },
//           { name: "₹ 50 Lac - ₹ 1 Cr", href: "/buy/50-lac-1-cr" },
//           { name: "₹ 1 Cr - ₹ 1.5 Cr", href: "/buy/1-cr-1-5-cr" },
//           { name: "Above ₹ 1.5 Cr", href: "/buy/above-1-5-cr" },
//         ],
//       },
//       {
//         title: "Explore",
//         items: [
//           { name: "Localities in Mumbai", href: "/buy/localities-mumbai" },
//           { name: "Projects in Mumbai", href: "/buy/projects-mumbai" },
//           { name: "Find an Agent", href: "/buy/agents-mumbai" },
//           { name: "Home Interiors in Mumbai", href: "/buy/interiors-mumbai" },
//         ],
//       },
//       {
//         title: "Buying Tools",
//         items: [
//           { name: "PropWorth", href: "/tools/propworth" },
//           { name: "Rates & Trends", href: "/tools/rates-trends" },
//           { name: "Buy vs Rent", href: "/tools/buy-vs-rent" },
//           { name: "Tips and Guides", href: "/advice/tips-and-guides" },
//         ],
//       },
//     ],
//   },
//   {
//     id: "rent",
//     label: "Rent",
//     hasMegaMenu: true,
//     badge: null,
//     columns: [
//       {
//         title: "Popular Choices",
//         items: [
//           { name: "Owner Properties", href: "/rent/owner-properties" },
//           { name: "Verified Properties", href: "/rent/verified-properties" },
//           { name: "Furnished Homes", href: "/rent/furnished-homes" },
//           { name: "Bachelor Friendly Homes", href: "/rent/bachelor-homes" },
//           { name: "Immediately Available", href: "/rent/immediate" },
//         ],
//       },
//       {
//         title: "Property Types",
//         items: [
//           { name: "Flat for Rent in Mumbai", href: "/rent/flats-mumbai" },
//           { name: "House for Rent in Mumbai", href: "/rent/houses-mumbai" },
//           { name: "Villa for Rent in Mumbai", href: "/rent/villas-mumbai" },
//           { name: "PG / Co-living in Mumbai", href: "/rent/pg-mumbai" },
//           { name: "Office Space in Mumbai", href: "/rent/commercial-rent" },
//         ],
//       },
//       {
//         title: "Budget",
//         items: [
//           { name: "Under ₹ 15,000", href: "/rent/under-15000" },
//           { name: "₹ 15,000 - ₹ 25,000", href: "/rent/15000-25000" },
//           { name: "₹ 25,000 - ₹ 40,000", href: "/rent/25000-40000" },
//           { name: "Above ₹ 40,000", href: "/rent/above-40000" },
//         ],
//       },
//       {
//         title: "Explore",
//         items: [
//           { name: "Top Localities for Rent", href: "/rent/top-localities" },
//           { name: "Rent Agreement Online", href: "/rent/agreement" },
//           { name: "Pay Rent with Credit Card", href: "/rent/pay-rent" },
//           { name: "Find Rental Agents", href: "/rent/agents" },
//         ],
//       },
//       {
//         title: "Rental Tools",
//         items: [
//           { name: "Rent Receipt Generator", href: "/tools/rent-receipt" },
//           { name: "Tenant Verification", href: "/tools/tenant-verification" },
//           { name: "Rent vs Buy Calculator", href: "/tools/rent-vs-buy" },
//         ],
//       },
//     ],
//   },
//   {
//     id: "sell",
//     label: "Sell",
//     hasMegaMenu: true,
//     badge: null,
//     columns: [
//       {
//         title: "For Owner",
//         items: [
//           { name: "Post Property FREE", href: "/post-property" },
//           { name: "My Dashboard", href: "/owner/dashboard" },
//           { name: "Owner Services", href: "/owner/services" },
//         ],
//       },
//       {
//         title: "For Agent & Builder",
//         items: [
//           { name: "Post Property as Agent", href: "/agent/post-property" },
//           { name: "Developer Solutions", href: "/builder/solutions" },
//           { name: "Sales Enquiry", href: "/agent/enquiry" },
//         ],
//       },
//       {
//         title: "Selling Tools",
//         items: [
//           { name: "Property Valuation", href: "/tools/valuation" },
//           { name: "Find Buyer Demand", href: "/tools/buyer-demand" },
//           { name: "Rates & Trends", href: "/tools/rates-trends" },
//         ],
//       },
//     ],
//   },
//   {
//     id: "loans",
//     label: "Home Loans",
//     hasMegaMenu: true,
//     badge: null,
//     columns: [
//       {
//         title: "Apply Loans",
//         items: [
//           { name: "Home Loan Application", href: "/loans/apply" },
//           { name: "Balance Transfer", href: "/loans/balance-transfer" },
//           { name: "Loan Against Property", href: "/loans/loan-against-property" },
//         ],
//       },
//       {
//         title: "Top Partner Banks",
//         items: [
//           { name: "SBI Home Loan", href: "/loans/sbi" },
//           { name: "HDFC Bank Home Loan", href: "/loans/hdfc" },
//           { name: "ICICI Bank Home Loan", href: "/loans/icici" },
//           { name: "Axis Bank Home Loan", href: "/loans/axis" },
//         ],
//       },
//       {
//         title: "Loan Tools & Advice",
//         items: [
//           { name: "EMI Calculator", href: "/loans/emi-calculator" },
//           { name: "Eligibility Calculator", href: "/loans/eligibility" },
//           { name: "Prepayment Calculator", href: "/loans/prepayment" },
//         ],
//       },
//     ],
//   },
//   {
//     id: "interiors",
//     label: "Home Interiors",
//     hasMegaMenu: true,
//     badge: null,
//     columns: [
//       {
//         title: "Design Ideas",
//         items: [
//           { name: "Modular Kitchen Designs", href: "/interiors/kitchen" },
//           { name: "Living Room Designs", href: "/interiors/living-room" },
//           { name: "Master Bedroom Designs", href: "/interiors/bedroom" },
//           { name: "Wardrobe Designs", href: "/interiors/wardrobes" },
//         ],
//       },
//       {
//         title: "Services",
//         items: [
//           { name: "Full Home Interiors", href: "/interiors/full-home" },
//           { name: "Book Free Consultation", href: "/interiors/consultation" },
//           { name: "Interior Cost Calculator", href: "/interiors/cost-calculator" },
//         ],
//       },
//     ],
//   },
//   {
//     id: "advice",
//     label: "MB Advice",
//     hasMegaMenu: true,
//     badge: "NEW",
//     columns: [
//       {
//         title: "Research & Insights",
//         items: [
//           { name: "PropIndex Research Report", href: "/advice/propindex" },
//           { name: "City Real Estate Reviews", href: "/advice/reviews" },
//           { name: "Locality Comparison", href: "/advice/compare" },
//         ],
//       },
//       {
//         title: "News & Guides",
//         items: [
//           { name: "Property News", href: "/advice/news" },
//           { name: "Legal & Taxation Advice", href: "/advice/legal" },
//           { name: "Home Buying Guide", href: "/advice/buying-guide" },
//         ],
//       },
//     ],
//   },
//   {
//     id: "help",
//     label: "Help",
//     hasMegaMenu: true,
//     badge: null,
//     columns: [
//       {
//         title: "Customer Support",
//         items: [
//           { name: "Help Center / FAQs", href: "/help/faq" },
//           { name: "Contact Us", href: "/help/contact" },
//           { name: "Feedback & Grievances", href: "/help/feedback" },
//           { name: "Report Fraud", href: "/help/fraud" },
//         ],
//       },
//     ],
//   },
// ];

// export const LOGIN_MENU_DATA = {
//   activity: [
//     { label: "Requested Properties", badge: "NEW", href: "/my/requested" },
//     { label: "MagicDiary", badge: "NEW", href: "/my/magic-diary" },
//     { label: "Contacted Properties", badge: null, href: "/my/contacted" },
//     { label: "Viewed Properties", badge: null, href: "/my/viewed" },
//     { label: "Shortlisted Properties", badge: null, href: "/my/shortlisted" },
//     { label: "Searches", badge: null, href: "/my/searches" },
//   ],
//   account: [
//     { label: "Recommendations", href: "/my/recommendations" },
//     { label: "My Profile", href: "/my/profile" },
//   ],
// };









// export const CITIES = [
//   "Mumbai",
//   "Delhi / NCR",
//   "Bangalore",
//   "Hyderabad",
//   "Pune",
//   "Chennai",
//   "Kolkata",
//   "Ahmedabad",
//   "Thane",
//   "Navi Mumbai",
// ];

// export const NAV_LINKS = [
//   {
//     id: "buy",
//     label: "Buy",
//     hasMegaMenu: true,
//     badge: null,
//     menuWidth: "w-[880px]",
//     columns: [
//       {
//         title: "Popular Choices",
//         items: [
//           { name: "Ready to Move", href: "/buy/ready-to-move" },
//           { name: "Owner Properties", href: "/buy/owner-properties" },
//           { name: "Budget Homes", href: "/buy/budget-homes" },
//           { name: "Premium Homes", href: "/buy/premium-homes" },
//           { name: "New Projects", href: "/buy/new-projects", badge: "magicHomes" },
//         ],
//       },
//       {
//         title: "Property Types",
//         items: [
//           { name: "Flats in Mumbai", href: "/buy/flats-mumbai" },
//           { name: "House for sale in Mumbai", href: "/buy/house-mumbai" },
//           { name: "Villa in Mumbai", href: "/buy/villa-mumbai" },
//           { name: "Plot in Mumbai", href: "/buy/plots-mumbai" },
//           { name: "Office Space in Mumbai", href: "/buy/office-space-mumbai" },
//           { name: "Commercial Space in Mumbai", href: "/buy/commercial-space-mumbai" },
//         ],
//       },
//       {
//         title: "Budget",
//         items: [
//           { name: "Under ₹ 50 Lac", href: "/buy/under-50-lac" },
//           { name: "₹ 50 Lac - ₹ 1 Cr", href: "/buy/50-lac-1-cr" },
//           { name: "₹ 1 Cr - ₹ 1.5 Cr", href: "/buy/1-cr-1-5-cr" },
//           { name: "Above ₹ 1.5 Cr", href: "/buy/above-1-5-cr" },
//         ],
//       },
//       {
//         title: "Explore",
//         items: [
//           { name: "Localities in Mumbai", href: "/buy/localities-mumbai" },
//           { name: "Projects in Mumbai", href: "/buy/projects-mumbai" },
//           { name: "Find an Agent", href: "/buy/agents-mumbai" },
//           { name: "Home Interiors in Mumbai", href: "/buy/interiors-mumbai" },
//         ],
//       },
//       {
//         title: "Buying Tools",
//         items: [
//           { name: "PropWorth", href: "/tools/propworth" },
//           { name: "Rates & Trends", href: "/tools/rates-trends" },
//           { name: "Buy vs Rent", href: "/tools/buy-vs-rent" },
//           { name: "Tips and Guides", href: "/advice/tips-and-guides" },
//         ],
//       },
//     ],
//   },
//   {
//     id: "rent",
//     label: "Rent",
//     hasMegaMenu: true,
//     badge: null,
//     menuWidth: "w-[840px]",
//     columns: [
//       {
//         title: "Popular Choices",
//         items: [
//           { name: "Owner Properties", href: "/rent/owner-properties" },
//           { name: "Verified Properties", href: "/rent/verified-properties" },
//           { name: "Furnished Homes", href: "/rent/furnished-homes" },
//           { name: "Bachelor Friendly Homes", href: "/rent/bachelor-homes" },
//           { name: "Immediately Available", href: "/rent/immediate" },
//         ],
//       },
//       {
//         title: "Property Types",
//         items: [
//           { name: "Flat for rent in Mumbai", href: "/rent/flats" },
//           { name: "House for rent in Mumbai", href: "/rent/houses" },
//           { name: "Villa for rent in Mumbai", href: "/rent/villas" },
//           { name: "PG in Mumbai", href: "/rent/pg" },
//           { name: "Office Space in Mumbai", href: "/rent/office" },
//           { name: "Commercial Space in Mumbai", href: "/rent/commercial" },
//           { name: "Coliving Space in Mumbai", href: "/rent/coliving" },
//           { name: "Student Hostels in Mumbai", href: "/rent/hostels" },
//           { name: "Luxury PG in Mumbai", href: "/rent/luxury-pg" },
//         ],
//       },
//       {
//         title: "Budget",
//         items: [
//           { name: "Under ₹ 10,000", href: "/rent/under-10000" },
//           { name: "₹ 10,000 - ₹ 15,000", href: "/rent/10000-15000" },
//           { name: "₹ 15,000 - ₹ 25,000", href: "/rent/15000-25000" },
//           { name: "Above ₹ 25,000", href: "/rent/above-25000" },
//         ],
//       },
//       {
//         title: "Explore",
//         items: [
//           { name: "Localities", href: "/rent/localities" },
//           { name: "Buy Vs Rent", href: "/tools/buy-vs-rent" },
//           { name: "Find an Agent", href: "/rent/agents" },
//           { name: "Share Requirement", href: "/rent/share-requirement" },
//         ],
//       },
//     ],
//   },
//   {
//     id: "sell",
//     label: "Sell",
//     hasMegaMenu: true,
//     badge: null,
//     menuWidth: "w-[680px]",
//     columns: [
//       {
//         title: "For Owner",
//         items: [
//           { name: "Post Property FREE", href: "/post-property" },
//           { name: "My Dashboard", href: "/sell/dashboard" },
//           { name: "Owner Services", href: "/sell/services" },
//         ],
//       },
//       {
//         title: "For Agent & Builder",
//         items: [
//           { name: "Post Property as Agent", href: "/agent/post" },
//           { name: "Developer Solutions", href: "/builder/solutions" },
//           { name: "Sales Enquiry", href: "/agent/enquiry" },
//         ],
//       },
//       {
//         title: "Selling Tools",
//         items: [
//           { name: "Property Valuation", href: "/tools/valuation" },
//           { name: "Find Buyer Demand", href: "/tools/buyer-demand" },
//           { name: "Rates & Trends", href: "/tools/rates-trends" },
//         ],
//       },
//     ],
//   },
//   {
//     id: "loans",
//     label: "Home Loans",
//     hasMegaMenu: true,
//     badge: null,
//     menuWidth: "w-[720px]",
//     columns: [
//       {
//         title: "Apply Loans",
//         items: [
//           { name: "Home Loan Application", href: "/loans/apply" },
//           { name: "Balance Transfer", href: "/loans/balance-transfer" },
//           { name: "Loan Against Property", href: "/loans/lap" },
//         ],
//       },
//       {
//         title: "Partner Banks",
//         items: [
//           { name: "SBI Home Loan", href: "/loans/sbi" },
//           { name: "HDFC Bank Home Loan", href: "/loans/hdfc" },
//           { name: "ICICI Bank Home Loan", href: "/loans/icici" },
//           { name: "Axis Bank Home Loan", href: "/loans/axis" },
//         ],
//       },
//       {
//         title: "Loan Tools",
//         items: [
//           { name: "EMI Calculator", href: "/loans/emi-calculator" },
//           { name: "Eligibility Calculator", href: "/loans/eligibility" },
//           { name: "Prepayment Calculator", href: "/loans/prepayment" },
//         ],
//       },
//     ],
//   },
//   {
//     id: "interiors",
//     label: "Home Interiors",
//     hasMegaMenu: true,
//     badge: null,
//     menuWidth: "w-[560px]",
//     columns: [
//       {
//         title: "Design Ideas",
//         items: [
//           { name: "Modular Kitchen Designs", href: "/interiors/kitchen" },
//           { name: "Living Room Designs", href: "/interiors/living-room" },
//           { name: "Master Bedroom Designs", href: "/interiors/bedroom" },
//           { name: "Wardrobe Designs", href: "/interiors/wardrobes" },
//         ],
//       },
//       {
//         title: "Services",
//         items: [
//           { name: "Full Home Interiors", href: "/interiors/full-home" },
//           { name: "Book Free Consultation", href: "/interiors/consultation" },
//           { name: "Interior Cost Calculator", href: "/interiors/cost-calc" },
//         ],
//       },
//     ],
//   },
//   {
//     id: "advice",
//     label: "MB Advice",
//     hasMegaMenu: true,
//     badge: "NEW",
//     menuWidth: "w-[540px]",
//     columns: [
//       {
//         title: "Research & Insights",
//         items: [
//           { name: "PropIndex Research Report", href: "/advice/propindex" },
//           { name: "City Real Estate Reviews", href: "/advice/reviews" },
//           { name: "Locality Comparison", href: "/advice/compare" },
//         ],
//       },
//       {
//         title: "News & Guides",
//         items: [
//           { name: "Property News", href: "/advice/news" },
//           { name: "Legal & Taxation Advice", href: "/advice/legal" },
//           { name: "Home Buying Guide", href: "/advice/guide" },
//         ],
//       },
//     ],
//   },
//   {
//     id: "help",
//     label: "Help",
//     hasMegaMenu: true,
//     badge: null,
//     menuWidth: "w-[420px]",
//     columns: [
//       {
//         title: "Customer Support",
//         items: [
//           { name: "Help Center / FAQs", href: "/help/faqs" },
//           { name: "Contact Us", href: "/help/contact" },
//           { name: "Feedback & Grievances", href: "/help/feedback" },
//           { name: "Report Fraud", href: "/help/fraud" },
//         ],
//       },
//     ],
//   },
// ];

// export const LOGIN_MENU_DATA = {
//   activity: [
//     { label: "Requested Properties", badge: "NEW", href: "/my/requested" },
//     { label: "MagicDiary", badge: "NEW", href: "/my/magic-diary" },
//     { label: "Contacted Properties", badge: null, href: "/my/contacted" },
//     { label: "Viewed Properties", badge: null, href: "/my/viewed" },
//     { label: "Shortlisted Properties", badge: null, href: "/my/shortlisted" },
//     { label: "Searches", badge: null, href: "/my/searches" },
//   ],
//   account: [
//     { label: "Recommendations", href: "/my/recommendations" },
//     { label: "My Profile", href: "/my/profile" },
//   ],
// };




export const CITIES = [
  "Mumbai",
  "Delhi / NCR",
  "Bangalore",
  "Hyderabad",
  "Pune",
  "Chennai",
  "Kolkata",
  "Ahmedabad",
  "Thane",
  "Navi Mumbai",
];



export const NAV_LINKS = [
  {
    id: "buy",
    label: "For Buyers",
    hasMegaMenu: true,
    badge: null,
    menuWidth: "w-[880px]",
    columns: [
      {
        title: "Popular Choices",
        items: [
          { name: "Ready to Move", href: "/buy/ready-to-move" },
          { name: "Owner Properties", href: "/buy/owner-properties" },
          { name: "Budget Homes", href: "/buy/budget-homes" },
          { name: "Premium Homes", href: "/buy/premium-homes" },
          {
            name: "New Projects",
            href: "/buy/new-projects",
            badge: "100acressHomes",
          },
        ],
      },

      {
        title: "Property Types",
        items: [
          { name: "Flats in Mumbai", href: "/buy/flats-mumbai" },
          { name: "House for Sale", href: "/buy/house-mumbai" },
          { name: "Villa in Mumbai", href: "/buy/villa-mumbai" },
          { name: "Plots & Land", href: "/buy/plots-mumbai" },
          { name: "Office Spaces", href: "/buy/office-space-mumbai" },
          { name: "Commercial Spaces", href: "/buy/commercial-space-mumbai" },
        ],
      },

      {
        title: "Budget",
        items: [
          { name: "Under ₹50 Lac", href: "/buy/under-50-lac" },
          { name: "₹50 Lac – ₹1 Cr", href: "/buy/50-lac-1-cr" },
          { name: "₹1 Cr – ₹1.5 Cr", href: "/buy/1-cr-1-5-cr" },
          { name: "Above ₹1.5 Cr", href: "/buy/above-1-5-cr" },
        ],
      },

      {
        title: "Explore",
        items: [
          { name: "Popular Localities", href: "/buy/localities-mumbai" },
          { name: "Featured Projects", href: "/buy/projects-mumbai" },
          { name: "Find an Agent", href: "/buy/agents-mumbai" },
          { name: "Home Interiors", href: "/buy/interiors-mumbai" },
        ],
      },

      {
        title: "Buyer Tools",
        items: [
          { name: "Property Valuation", href: "/tools/propworth" },
          { name: "Rates & Trends", href: "/tools/rates-trends" },
          { name: "Buy vs Rent Calculator", href: "/tools/buy-vs-rent" },
          { name: "Buying Guides", href: "/advice/tips-and-guides" },
        ],
      },
    ],
  },

  {
    id: "rent",
    label: "For Renters",
    hasMegaMenu: true,
    badge: null,
    menuWidth: "w-[840px]",
    columns: [
      {
        title: "Popular Choices",
        items: [
          { name: "Owner Properties", href: "/rent/owner-properties" },
          { name: "Verified Properties", href: "/rent/verified-properties" },
          { name: "Furnished Homes", href: "/rent/furnished-homes" },
          { name: "Bachelor Friendly Homes", href: "/rent/bachelor-homes" },
          { name: "Ready to Move In", href: "/rent/immediate" },
        ],
      },

      {
        title: "Property Types",
        items: [
          { name: "Apartments for Rent", href: "/rent/flats" },
          { name: "Independent Houses", href: "/rent/houses" },
          { name: "Villas", href: "/rent/villas" },
          { name: "PG & Co-living", href: "/rent/pg" },
          { name: "Office Spaces", href: "/rent/office" },
          { name: "Commercial Spaces", href: "/rent/commercial" },
        ],
      },

      {
        title: "Budget",
        items: [
          { name: "Under ₹10,000", href: "/rent/under-10000" },
          { name: "₹10,000 – ₹15,000", href: "/rent/10000-15000" },
          { name: "₹15,000 – ₹25,000", href: "/rent/15000-25000" },
          { name: "Above ₹25,000", href: "/rent/above-25000" },
        ],
      },

      {
        title: "Renter Resources",
        items: [
          { name: "Explore Localities", href: "/rent/localities" },
          { name: "Buy vs Rent", href: "/tools/buy-vs-rent" },
          { name: "Find an Agent", href: "/rent/agents" },
          { name: "Share Your Requirements", href: "/rent/share-requirement" },
        ],
      },
    ],
  },

   {
    id: "sell",
    label: "For Sellers",
    hasMegaMenu: true,
    badge: null,
    menuWidth: "w-[680px]",
    columns: [
      {
        title: "For Owner",
        items: [
          { name: "Post Property FREE", href: "/post-property" },
          { name: "My Dashboard", href: "/sell/dashboard" },
          { name: "Owner Services", href: "/sell/services" },
        ],
      },
      {
        title: "For Agent & Builder",
        items: [
          { name: "Post Property as Agent", href: "/agent/post" },
          { name: "Developer Solutions", href: "/builder/solutions" },
          { name: "Sales Enquiry", href: "/agent/enquiry" },
        ],
      },
      {
        title: "Selling Tools",
        items: [
          { name: "Property Valuation", href: "/tools/valuation" },
          { name: "Find Buyer Demand", href: "/tools/buyer-demand" },
          { name: "Rates & Trends", href: "/tools/rates-trends" },
        ],
      },
    ],
  },
  {
    id: "loans",
    label: "Home Loans",
    hasMegaMenu: true,
    badge: null,
    menuWidth: "w-[720px]",
    columns: [
      {
        title: "Apply Loans",
        items: [
          { name: "Home Loan Application", href: "/loans/apply" },
          { name: "Balance Transfer", href: "/loans/balance-transfer" },
          { name: "Loan Against Property", href: "/loans/lap" },
        ],
      },
      {
        title: "Partner Banks",
        items: [
          { name: "SBI Home Loan", href: "/loans/sbi" },
          { name: "HDFC Bank Home Loan", href: "/loans/hdfc" },
          { name: "ICICI Bank Home Loan", href: "/loans/icici" },
          { name: "Axis Bank Home Loan", href: "/loans/axis" },
        ],
      },
      {
        title: "Loan Tools",
        items: [
          { name: "EMI Calculator", href: "/loans/emi-calculator" },
          { name: "Eligibility Calculator", href: "/loans/eligibility" },
          { name: "Prepayment Calculator", href: "/loans/prepayment" },
        ],
      },
    ],
  },
  {
    id: "interiors",
    label: "Home Interiors",
    hasMegaMenu: true,
    badge: null,
    menuWidth: "w-[560px]",
    columns: [
      {
        title: "Design Ideas",
        items: [
          { name: "Modular Kitchen Designs", href: "/interiors/kitchen" },
          { name: "Living Room Designs", href: "/interiors/living-room" },
          { name: "Master Bedroom Designs", href: "/interiors/bedroom" },
          { name: "Wardrobe Designs", href: "/interiors/wardrobes" },
        ],
      },
      {
        title: "Services",
        items: [
          { name: "Full Home Interiors", href: "/interiors/full-home" },
          { name: "Book Free Consultation", href: "/interiors/consultation" },
          { name: "Interior Cost Calculator", href: "/interiors/cost-calc" },
        ],
      },
    ],
  },

  {
    id: "insights",
    label: "Property Insights",
    hasMegaMenu: true,
    badge: "NEW",
    menuWidth: "w-[540px]",

    columns: [
      {
        title: "Research & Insights",
        items: [
          {
            name: "Property Market Reports",
            href: "/advice/propindex",
          },
          {
            name: "City Real Estate Insights",
            href: "/advice/reviews",
          },
          {
            name: "Locality Comparison",
            href: "/advice/compare",
          },
        ],
      },

      {
        title: "Guides & Resources",
        items: [
          {
            name: "Real Estate News",
            href: "/advice/news",
          },
          {
            name: "Legal & Tax Guidance",
            href: "/advice/legal",
          },
          {
            name: "Home Buying Guide",
            href: "/advice/guide",
          },
        ],
      },
    ],
  },

  {
    id: "help",
    label: "Help & Support",
    hasMegaMenu: true,
    badge: null,
    menuWidth: "w-[420px]",

    columns: [
      {
        title: "Customer Support",
        items: [
          { name: "Help Center & FAQs", href: "/help/faqs" },
          { name: "Contact Us", href: "/help/contact" },
          { name: "Feedback & Grievances", href: "/help/feedback" },
          { name: "Report Fraud", href: "/help/fraud" },
        ],
      },
    ],
  },
];


export const LOGIN_MENU_DATA = {
  activity: [
    {
      label: "Requested Properties",
      badge: "NEW",
      href: "/my/requested",
    },
    {
      label: "100acressDiary",
      badge: "NEW",
      href: "/my/100acress-diary",
    },
    {
      label: "Contacted Properties",
      badge: null,
      href: "/my/contacted",
    },
    {
      label: "Viewed Properties",
      badge: null,
      href: "/my/viewed",
    },
    {
      label: "Shortlisted Properties",
      badge: null,
      href: "/my/shortlisted",
    },
    {
      label: "Searches",
      badge: null,
      href: "/my/searches",
    },
  ],

  account: [
    {
      label: "Recommendations",
      href: "/my/recommendations",
    },
    {
      label: "My Profile",
      href: "/my/profile",
    },
  ],
};