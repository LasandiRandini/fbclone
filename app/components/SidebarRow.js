function SidebarRow({ Icon, title }) {
    return (
      <div className="flex overflow-hidden items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
        {Icon && <Icon className="h-6 w-6 text-blue-500" />}
        <p className="hidden sm:inline-flex font-medium">{title}</p>
      </div>
    );
  }
  
  export default SidebarRow;
  