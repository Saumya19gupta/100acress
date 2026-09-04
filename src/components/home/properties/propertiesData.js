export const INITIAL_PROPERTIES = [
  {
    id: 1,
    title: "DLF The Arbour",
    bhk: "4 BHK",
    type: "Luxury Apartment",
    price: 8.25,
    priceDisplay: "₹ 8.25 Cr",
    area: "3,950 sq.ft.",
    pricePerSqFt: "₹ 20,886 / sq.ft.",
    location: "Sector 63, Golf Course Extension, Gurugram",
    status: "Under Construction",
    possession: "Dec 2028",
    rating: 4.8,
    reviewsCount: 34,
    verified: true,
    tags: ["Golf View", "Clubhouse", "Miami Style Architecture"],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80",
    developer: "DLF Homes"
  },
  {
    id: 2,
    title: "M3M Golfestate Ultra",
    bhk: "3 BHK",
    type: "Apartment",
    price: 4.75,
    priceDisplay: "₹ 4.75 Cr",
    area: "2,850 sq.ft.",
    pricePerSqFt: "₹ 16,660 / sq.ft.",
    location: "Sector 65, Golf Course Extension, Gurugram",
    status: "Ready to Move",
    possession: "Immediate",
    rating: 4.9,
    reviewsCount: 82,
    verified: true,
    tags: ["9-Hole Golf Course", "7-Star Concierge"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    developer: "M3M India"
  },
  {
    id: 3,
    title: "Godrej Aristocrat",
    bhk: "3 BHK",
    type: "Apartment",
    price: 3.85,
    priceDisplay: "₹ 3.85 Cr",
    area: "2,150 sq.ft.",
    pricePerSqFt: "₹ 17,906 / sq.ft.",
    location: "Sector 49, Sohna Road, Gurugram",
    status: "Under Construction",
    possession: "Jun 2027",
    rating: 4.6,
    reviewsCount: 19,
    verified: true,
    tags: ["Forest Living", "Triple Height Lobby"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
    developer: "Godrej Properties"
  },
  {
    id: 4,
    title: "Experion Windchants Villa",
    bhk: "5 BHK",
    type: "Independent Villa",
    price: 14.5,
    priceDisplay: "₹ 14.50 Cr",
    area: "7,200 sq.ft.",
    pricePerSqFt: "₹ 20,138 / sq.ft.",
    location: "Sector 112, Dwarka Expressway, Gurugram",
    status: "Ready to Move",
    possession: "Immediate",
    rating: 4.9,
    reviewsCount: 45,
    verified: true,
    tags: ["Private Pool", "Private Elevator", "Skywalk"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    developer: "Experion Developers"
  },
  {
    id: 5,
    title: "Sobha City Premier",
    bhk: "2 BHK",
    type: "Apartment",
    price: 2.15,
    priceDisplay: "₹ 2.15 Cr",
    area: "1,450 sq.ft.",
    pricePerSqFt: "₹ 14,827 / sq.ft.",
    location: "Sector 108, Dwarka Expressway, Gurugram",
    status: "Ready to Move",
    possession: "Immediate",
    rating: 4.7,
    reviewsCount: 62,
    verified: true,
    tags: ["39-Acre Urban Park", "Olympic Size Pool"],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
    developer: "Sobha"
  }
];

// Helper to generate dynamic items for the Flipkart-style infinite scroll
export function fetchMorePropertiesMock(batchIndex) {
  const titles = ["Elan The Presidential", "Trump Towers Delhi NCR", "Tata Primanti", "Puri The Aravallis", "Birla Navya"];
  const images = [
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80"
  ];

  return Array.from({ length: 4 }).map((_, i) => {
    const id = batchIndex * 10 + i + 10;
    const bhks = ["2 BHK", "3 BHK", "4 BHK"];
    const selectedBhk = bhks[i % bhks.length];
    const basePrice = (2.5 + (i * 1.8)).toFixed(2);

    return {
      id,
      title: `${titles[i % titles.length]} Phase ${batchIndex}`,
      bhk: selectedBhk,
      type: "Apartment",
      price: parseFloat(basePrice),
      priceDisplay: `₹ ${basePrice} Cr`,
      area: `${1800 + i * 400} sq.ft.`,
      pricePerSqFt: `₹ ${15000 + i * 1200} / sq.ft.`,
      location: "Sector 79, New Gurgaon, Gurugram",
      status: i % 2 === 0 ? "Under Construction" : "Ready to Move",
      possession: "2027",
      rating: 4.7,
      reviewsCount: 22,
      verified: true,
      tags: ["Modern Amenities", "Covered Parking"],
      image: images[i % images.length],
      developer: "Signature Global"
    };
  });
}