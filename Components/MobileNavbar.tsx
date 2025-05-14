import React from 'react';
import { Heart, Search, UserCircle2 } from 'lucide-react'; // UserCircle2 for profile, Search for find

interface MobileNavItemProps {
  icon: React.ReactNode;
  notificationCount?: number;
  href?: string;
  isActive?: boolean; // To highlight the active tab, if needed
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({ icon, notificationCount, href = "#", isActive }) => (
  <a
    href={href}
    className={`relative flex flex-col items-center justify-center p-2 rounded-md transition-colors ${
      isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
    }`}
  >
    {icon}
    {notificationCount && notificationCount > 0 && (
      <span className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-red-600 text-white text-[10px] font-semibold rounded-full h-4 w-4 min-w-[1rem] flex items-center justify-center p-0.5">
        {notificationCount > 9 ? '9+' : notificationCount}
      </span>
    )}
  </a>
);

const MobileNavbar: React.FC = () => {
  // Replace with actual data and logic
  const userInitials = "MZ";
  const likesCount = 8;
  const matchesCount = 1;
  const activeTab = "find" as 'find' | 'likes' | 'matches' | 'profile'; // Example: to show which tab is active

  // Icon size for mobile nav
  const iconSize = 28; // Adjusted for better visibility on mobile

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#201F2C] text-white p-2 shadow-t-md md:hidden z-50">
      {/* shadow-t-md is a custom class you might need to define for a top shadow:
          In your global CSS or tailwind.config.js:
          '.shadow-t-md': 'box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06);'
      */}
      <div className="flex justify-around items-center">
        <MobileNavItem
          icon={<Search size={iconSize} strokeWidth={1.5} />}
          isActive={activeTab === 'find'}
          href="/home" // Example link
        />
        <MobileNavItem
          icon={<Heart size={iconSize} strokeWidth={1.5} />}
          notificationCount={likesCount}
          isActive={activeTab === 'likes'}
          href="/likes" // Example link
        />
        <MobileNavItem
          icon={<Heart size={iconSize} strokeWidth={1.5} />} // Using Heart again, you might want a different icon for matches like HeartHandshake or a custom one
          notificationCount={matchesCount}
          isActive={activeTab === 'matches'}
          href="/matches" // Example link
        />
        <a href="/profile" className={`relative flex items-center justify-center p-1 rounded-full ${activeTab === 'profile' ? 'ring-2 ring-white' : ''}`}>
          <div className="bg-gray-200 text-[#201F2C] text-sm font-bold rounded-full h-8 w-8 flex items-center justify-center">
            {userInitials}
          </div>
        </a>
      </div>
    </nav>
  );
};

export default MobileNavbar;