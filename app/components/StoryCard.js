import Image from "next/image";

function StoryCard({ name, src, profile }) {
    return (
        <div className="relative h-14 w-14 md:h-15 md:w-15 lg:h-56 lg:w-32 cursor-pointer overflow-hidden p-2 transition duration-200 transform ease-in-out hover:scale-105 hover:animate-pulse">
            {/* Profile image */}
            <Image
                className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
                src={profile}
                width={40}
                height={40}
                layout="fixed"
                objectFit="cover"
                alt={name}
            />
            {/* Background image */}
            <Image
                className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
                src={src}
                layout="fill"
                alt={name}
            />
            {/* Name overlay for larger screens */}
            <p className="hidden lg:block absolute bottom-4 left-2 text-white font-bold">
                {name}
            </p>
        </div>
    );
}

export default StoryCard;
