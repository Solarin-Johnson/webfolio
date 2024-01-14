import { useEffect, useState } from "react";
import "./nav.scss";

export default function Navigation() {
  const menuItems = ["Home", "About", "Experience", "Skills", "Contact"];
  const [activeMenu, setActiveMenu] = useState(0);
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);
  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setBrowserWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () =>
        setBrowserWidth(window.innerWidth)
      );
  }, []);

  console.log(activeMenu);

  return (
    <>
      <div className="nav-container">
        <div className="name">Daniel.</div>
        {browserWidth > 600 ? (
          <div className="nav-menu">
            {menuItems.map((item, i) => {
              return (
                <MenuItems
                  name={item}
                  active={activeMenu}
                  i={i}
                  setActive={(index) => setActiveMenu(index)}
                />
              );
            })}
          </div>
        ) : (
          <MenuBar menu={menuState} setMenu={(data) => setMenuState(data)} />
        )}
      </div>
      {browserWidth <= 600 && (
        <div
          className={`nav-menu-fixed ${menuState ? "show-menu" : "hide-menu"}`}
        >
          {menuItems.map((item, i) => {
            return (
              <MenuItems
                name={item}
                active={activeMenu}
                i={i}
                setActive={(index) => setActiveMenu(index)}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export const MenuItems = ({ name, active, i, setActive }) => {
  return (
    <div
      className={`menu-items ${active === i && "menu-active"}`}
      onClick={() => setActive(i)}
    >
      {name}
    </div>
  );
};

export const MenuBar = ({ setMenu, menu }) => {
  return (
    <div className="menu-bar" onClick={() => setMenu(!menu)}>
      <span>{menu ? "close" : "menu"}</span>
    </div>
  );
};
