import React from "react";
import Image from "next/image";
import {
  Cake,
  Users, // Using Users for Gender, can be more specific if needed
  Heart, // Using Heart for Orientation, can be more specific
  MapPin,
  Ruler,
  GlassWater, // For Drinks
  Bike, // For Exercise
  Leaf, // For Marijuana
  Dog, // For Pets
  Baby, // For Children
  HelpCircle,
  Undo2,
  X,
  Check,
  Briefcase,
  GraduationCap,
  Landmark, // For Religion/Hindu (can be more specific)
  Languages,
  Search, // For Looking for
} from "lucide-react";

// --- Icon Components using Lucide ---
const IconWrapper = ({
  children,
  className = "w-4 h-4 sm:w-5 sm:h-5 text-gray-400",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`inline-block ${className}`}>{children}</div>;

const CakeIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <Cake />
  </IconWrapper>
);
const GenderIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <Users />
  </IconWrapper>
);
const OrientationIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <Heart />
  </IconWrapper>
);
const LocationIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <MapPin />
  </IconWrapper>
);
const HeightIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <Ruler />
  </IconWrapper>
);
const DrinksIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <GlassWater />
  </IconWrapper>
);
const ExerciseIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <Bike />
  </IconWrapper>
);
const MarijuanaIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <Leaf />
  </IconWrapper>
);
const PetIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <Dog />
  </IconWrapper>
);
const ChildrenIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <Baby />
  </IconWrapper>
);

// Icons for buttons, potentially larger
const QuestionIcon = ({
  className = "w-5 h-5 sm:w-6 sm:h-6 text-white",
}: {
  className?: string;
}) => (
  <IconWrapper className={className}>
    <HelpCircle />
  </IconWrapper>
);
const UndoIcon = ({
  className = "w-5 h-5 sm:w-6 sm:h-6 text-white ",
}: {
  className?: string;
}) => (
  <IconWrapper className={className}>
    <Undo2 />
  </IconWrapper>
);
const CrossIcon = ({
  className = "w-6 h-6 sm:w-8 sm:h-8 text-white ml-1.5 mt-1.25",
}: {
  className?: string;
}) => (
  <IconWrapper className={className}>
    <X />
  </IconWrapper>
);
const CheckIconLib = ({
  className = "w-6 h-6 sm:w-8 sm:h-8 text-white ml-1.5 mt-1.25",
}: {
  className?: string;
}) => (
  <IconWrapper className={className}>
    <Check />
  </IconWrapper>
);

const BriefcaseIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <Briefcase />
  </IconWrapper>
);
const EducationIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <GraduationCap />
  </IconWrapper>
);
const ReligionIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <Landmark />
  </IconWrapper>
);
const LanguageIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <Languages />
  </IconWrapper>
);
const LookingForIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <Search />
  </IconWrapper>
);
// --- End Icon Components ---

interface ProfileAttributeProps {
  icon: React.ReactNode;
  text: string;
}

const ProfileAttribute: React.FC<ProfileAttributeProps> = ({ icon, text }) => (
  <div className="flex items-center space-x-2">
    <span className="text-xl ">{icon}</span>
    <span className="text-sm sm:text-base p-2">{text}</span>
  </div>
);

interface ImageCardProps {
  src: string;
  alt: string;
  prompt?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, prompt }) => (
  <div className="bg-[#2A2A3D] rounded-lg overflow-hidden shadow-lg">
    {prompt && (
      <p className="p-2 sm:p-3 text-xs sm:text-sm text-gray-300 italic">
        “ {prompt} ”
      </p>
    )}
    <div className="relative w-full h-56 xs:h-64 sm:h-72 md:h-80">
      {" "}
      {/* Responsive height for images */}
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  </div>
);

interface InfoPillProps {
  icon: React.ReactNode;
  text: string;
}
const InfoPill: React.FC<InfoPillProps> = ({ icon, text }) => (
  <div className="flex items-center space-x-1 sm:space-x-1.5 bg-[#2A2A3D] text-gray-300 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs mt-1 ">
    {icon}{" "}
    {/* Icon size will be handled by its own responsive classes if needed */}
    <span className="p-2">{text}</span>
  </div>
);

const HomeProfile: React.FC = () => {
  // Placeholder data - replace with actual data from your backend/state
  const user = {
    name: "Laila",
    bio: "I am not here for hookups",
    age: 23,
    gender: "Woman",
    orientation: "Straight",
    location: "Sector 2",
    height: "5'4",
    drinks: "No",
    exercise: "Yes",
    marijuana: "No",
    pets: "Cat",
    children: "Don't Want",
    prompts: [
      "Yoga:The journey of the self, through the self, to the self.",
      "Breathe in peace, breathe out stress.",
      "Yoga is the art of waking up.",
    ],
    images: [
      { src: "/profile-3.png", alt: "Laila doing yoga pose 1" }, // Replace with actual image paths
      { src: "/sample-2.png", alt: "Laila doing yoga pose 2" },
      { src: "/sample-3.png", alt: "Laila doing yoga pose 3" },
    ],
    profession: "Chartered Accountant",
    education: "University of Delhi",
    religion: "Hindu",
    city: "Noida",
    languages: "English, Hindi",
    lookingFor: "Long-term relationship",
  };

  return (
    <div className="bg-[#1A1A2E] min-h-screen text-white flex flex-col items-center p-3 sm:p-4 md:p-8 relative">
      {/* Action Buttons (Like/Dislike) - Positioned absolutely or in a fixed manner */}
      <div className="absolute left-3 sm:left-4 md:left-10 top-1/2 -translate-y-1/2">
        <button className="bg-red-500 p-2.5 sm:p-3 md:p-3 rounded-full shadow-xl hover:bg-red-600 transition-colors flex items-center justify-center ">
          <CrossIcon />
        </button>
      </div>

      <div className="absolute right-3 sm:right-4 md:right-10 top-1/2 -translate-y-1/2 ">
        <button className="bg-green-500 p-2.5 sm:p-3 md:p-3 rounded-full shadow-xl hover:bg-green-600 transition-colors flex items-center justify-center">
          <CheckIconLib />
        </button>
      </div>

      {/* Top Right Button (Question/Undo) */}
      <button className="absolute top-3 right-3 sm:top-4 md:top-8 md:right-8 bg-gray-700 p-2 sm:p-2.5 md:p-3 rounded-full hover:bg-gray-600 transition-colors">
        <QuestionIcon /> {/* Or <UndoIcon /> */}
      </button>

      <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-7xl bg-[#201F2C] p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl mt-12 sm:mt-16 md:mt-20">
        {" "}
        {/* Responsive max-width and margin-top */}
        {/* Profile Header */}
        <div className="mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {user.name}
          </h1>
          <p className="text-gray-400 italic mt-1 text-xs sm:text-sm">
            “ {user.bio} ”
          </p>
        </div>
        {/* Attributes Grid */}
        {/* Using grid-cols-1 on smallest, then increasing. Adjusted gap for smaller screens. */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 sm:gap-x-3 md:gap-x-4 gap-y-2 sm:gap-y-3 mb-6 sm:mb-8">
          <ProfileAttribute icon={<CakeIcon />} text={`${user.age}`} />
          <ProfileAttribute icon={<GenderIcon />} text={user.gender} />
          <ProfileAttribute
            icon={<OrientationIcon />}
            text={user.orientation}
          />
          <ProfileAttribute icon={<LocationIcon />} text={user.location} />
          <ProfileAttribute icon={<HeightIcon />} text={user.height} />
          <ProfileAttribute
            icon={<DrinksIcon />}
            text={`Drinks: ${user.drinks}`}
          />
          <ProfileAttribute
            icon={<ExerciseIcon />}
            text={`Exercise: ${user.exercise}`}
          />
          <ProfileAttribute
            icon={<MarijuanaIcon />}
            text={`Marijuana: ${user.marijuana}`}
          />
          <ProfileAttribute icon={<PetIcon />} text={`Pets: ${user.pets}`} />
          <ProfileAttribute
            icon={<ChildrenIcon />}
            text={`Children: ${user.children}`}
          />
        </div>
        {/* Image Gallery with Prompts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {" "}
          {/* Adjusted grid for sm screens too */}
          {user.images.map((image, index) => (
            <ImageCard
              key={index}
              src={image.src}
              alt={image.alt}
              prompt={user.prompts[index]}
            />
          ))}
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-7xl mt-4 sm:mt-6 p-3 sm:p-4 bg-[#201F2C] rounded-lg shadow-xl">
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-between">
          <InfoPill icon={<BriefcaseIcon />} text={user.profession} />
          <InfoPill icon={<EducationIcon />} text={user.education} />
          <InfoPill icon={<ReligionIcon />} text={user.religion} />
          <InfoPill icon={<LocationIcon />} text={user.city} />
          <InfoPill icon={<LanguageIcon />} text={user.languages} />
          <InfoPill icon={<LookingForIcon />} text={user.lookingFor} />
        </div>
      </div>
    </div>
  );
};

export default HomeProfile;
