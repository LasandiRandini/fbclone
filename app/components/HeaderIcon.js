function HeaderIcon({ Icon , active }) {
  return (
    <div className="flex items-center rounded-full bg-gray-100  p-2 cursor-pointer md:px-5 md:py-2 sm:h-10 md:hover:bg-gray-100 active:border-b-2 active:border-blue-500 group">
      <Icon
        className={`h-3 text-center sm:h-5 mx-auto  text-gray-500  group-hover:text-blue-500 ${
          active && 'text-blue-500'
        }`}
      />
    </div>
  );
}

export default HeaderIcon;
