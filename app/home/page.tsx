// filepath: d:/website/experimental/ApurvFriend/swipeverse/app/home/page.tsx
import HomeProfile from '../../Components/HomeProfile'; // Adjust path if necessary
import Navbar from '../../Components/Navbar'; // Assuming you want the Navbar here too
import MobileNavbar from '../../Components/MobileNavbar'; // Import MobileNavbar

export default function HomePage() {
  return (
    <>
      {/* Standard Navbar for medium screens and up */}
      <div className="hidden md:block"> {/* Or md:flex if Navbar is a flex container */}
        <Navbar />
      </div>
      <HomeProfile />
      {/* Mobile Navbar for screens smaller than medium */}
      <MobileNavbar />
    </>
  );
}