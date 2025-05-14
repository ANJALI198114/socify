import React from 'react';

// Placeholder Heart Icon (replace with your actual icon)
const HeartIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`w-6 h-6 ${className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    />
  </svg>
);

// Placeholder Search/Find Icon (replace with your actual icon)
const FindIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`w-6 h-6 ${className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6"
    />
  </svg>
);


interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  notificationCount?: number;
  href?: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, notificationCount, href = "#" }) => (
  <a href={href} className="relative flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
    {icon}
    <span className="uppercase text-sm tracking-wider">{label}</span>
    {notificationCount && notificationCount > 0 && (
      <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full h-4 w-4 min-w-[1rem] flex items-center justify-center p-0.5">
        {notificationCount}
      </span>
    )}
  </a>
);

const Navbar: React.FC = () => {
  // Replace with actual user data
  const userName = "Mohd Zaid";
  const userStatus = "ONLINE"; // Or the ID like "0x..."
  const userInitials = userName.split(' ').map(n => n[0]).join('').toUpperCase();
  const likesCount = 8;
  const matchesCount = 1;

  return (
    <nav className="bg-[#201F2C] text-white p-4 flex items-center justify-between shadow-md">
      {/* Logo Section */}
      <div className="flex flex-col">
        <span className="text-2xl font-bold tracking-[0.1em]">SWIPEVERSE</span>
        <span className="text-xs tracking-[0.15em] text-gray-400">UNBIASED DATING APP</span>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-10 items-center">
        <NavItem icon={<FindIcon />} label="Find Love" />
        <NavItem icon={<HeartIcon />} label="Likes You" notificationCount={likesCount} />
        <NavItem icon={<HeartIcon />} label="Matches" notificationCount={matchesCount} />
      </div>

      {/* User Profile Section */}
      <div className="flex items-center space-x-3">
        <div className="text-right">
          <div className="text-sm font-semibold">{userName}</div>
          <div className="text-xs text-gray-400">{userStatus}</div>
        </div>
        <div className="bg-gray-200 text-[#201F2C] text-lg font-bold rounded-full h-10 w-10 flex items-center justify-center">
          {userInitials}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;