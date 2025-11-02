
import Image from "next/image";

const TechCard = ({
  cardInfo,
}: {
  cardInfo: {
    name: string;
    description: string;
    imageUrl: string;
    bgColor: string;
  };
}) => {
  const { name, description, imageUrl, bgColor } = cardInfo;

  return (
    <div className="flex gap-5 p-4 h-20 rounded-xl border border-[#333333] bg-[#111111] hover:bg-[#1a1a1a] hover:border-[#444444] transition-colors duration-200">
      <div className={`flex items-center justify-center w-14 h-14 ${bgColor} rounded-lg shrink-0`}>
        <Image
          src={imageUrl}
          width={1000}
          height={1000}
          alt={`${name} logo`}
          className={`size-8 ${name === "NextJS" ? "dark:invert" : ""}`}
        />
      </div>
      <div className="flex flex-col justify-center min-w-0 flex-1">
        <h4 className="text-lg font-medium truncate">{name}</h4>
        <p className="text-dark-200/70 dark:text-white/70 text-sm truncate">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TechCard;
