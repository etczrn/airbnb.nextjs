import Image from 'next/image';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left section */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          alt="airbnb logo"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle */}
      <div></div>
      {/* right */}
      <div></div>
    </header>
  );
};
