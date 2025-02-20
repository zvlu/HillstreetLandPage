export interface Show {
  id: string;
  artist: string;
  date: string;
  image: string;
  venue: string;
  ticketPrice: number;
  ticketUrl: string;
}

export const shows: Show[] = [
  {
    id: "rh-march15",
    artist: "Roots Harmony",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80",
    venue: "Hill Street Arena",
    ticketPrice: 45,
    ticketUrl: "https://www.eventbrite.com/e/roots-harmony-hill-street-tickets" // Replace with your actual ticket URL
  },
  {
    id: "dm-march22",
    artist: "Dub Masters",
    date: "March 22, 2024",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80",
    venue: "Hill Street Hall",
    ticketPrice: 35,
    ticketUrl: "https://www.eventbrite.com/e/dub-masters-hill-street-tickets" // Replace with your actual ticket URL
  },
  {
    id: "iv-march29",
    artist: "Island Vibes",
    date: "March 29, 2024",
    image: "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&q=80",
    venue: "Hill Street Stadium",
    ticketPrice: 40,
    ticketUrl: "https://www.eventbrite.com/e/island-vibes-hill-street-tickets" // Replace with your actual ticket URL
  }
];