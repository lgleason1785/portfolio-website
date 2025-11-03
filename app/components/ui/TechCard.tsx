
import Image from "next/image";
import Link from "next/link";

const TechCard = ({
  cardInfo,
}: {
  cardInfo: {
    name: string;
    description: string;
    imageUrl: string;
    bgColor: string;
    link?: string;
  };
}) => {
  const { name, description, imageUrl, bgColor, link } = cardInfo;

  const cardContent = (
    <div className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-[#333333] bg-[#111111] hover:bg-[#1a1a1a] hover:border-[#444444] transition-colors duration-200 cursor-pointer group h-20 sm:h-24">
      <div className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 ${bgColor} rounded-lg shrink-0 self-start mt-0.5 group-hover:scale-105 transition-transform duration-200`}>
        <Image
          src={imageUrl}
          width={1000}
          height={1000}
          alt={`${name} logo`}
          className={`w-6 h-6 sm:w-8 sm:h-8 ${name === "NextJS" ? "dark:invert" : ""}`}
        />
      </div>
      <div className="flex flex-col justify-center min-w-0 flex-1 py-1">
        <h4 className="text-base sm:text-lg font-medium leading-tight mb-1 overflow-wrap-anywhere word-break-break-all group-hover:text-[#E29211] transition-colors duration-200">{name}</h4>
        <p className="text-white/70 text-xs sm:text-sm leading-relaxed overflow-wrap-anywhere word-break-break-all group-hover:text-white/90 transition-colors duration-200">
          {description}
        </p>
      </div>
    </div>
  );

  if (link) {
    return (
      <Link href={link} target="_blank" rel="noopener noreferrer" className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export default TechCard;
