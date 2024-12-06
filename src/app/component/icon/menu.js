export const MenuIcon = ({ isActive, isTransformHeader }) => {
  return (
    <div
      className={`w-[28px] h-[28px] rounded-md menuIcon ${
        isActive ? "menuActive" : ""
      } ${isTransformHeader ? "invert-0" : "invert"}`}
    >
      <div className="m1" />
      <div className="m2" />
      <div className="m3" />
    </div>
  );
};
