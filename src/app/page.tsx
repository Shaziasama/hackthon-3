import Image from "next/image";
import Hero from "./components/Hero";
import NewArrivals from "./components/NewArrival";
import BestSelling from "./components/BestSelling";
import BrowseByStyle from "./components/BrowseByStyle";
import CustomerReviews from "./components/CustomerReviews";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
      <Hero />
      <NewArrivals />
      <BestSelling />
       <BrowseByStyle />
       <CustomerReviews />
      <Footer />
    </div>
  );
}
