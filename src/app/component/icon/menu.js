export const MenuIcon = ({ isActive }) => {
  return (
    <div className={`bg-black w-[28px] h-[28px] rounded-md menuIcon ${isActive ? "menuActive" : ""}`}>
      <div className="m1"/>
      <div className="m2"/>
      <div className="m3"/>
    </div>
  );
};
