import SVGIcon from "../Icons";

const NavBar = () => {
  return (
    <div className="hidden md:fixed md:top-0 md:w-full md:bg-transparent md:flex md:flex-row md:justify-between md:items-center px-14">
      <SVGIcon
        icon={"logo"}
        extention="png"
        className={"w-32 h-32   cursor-pointer"}
      />

      <SVGIcon icon={"hamburger-menu"} className={"h-12 w-12 cursor-pointer"} />
    </div>
  );
};

export default NavBar;
