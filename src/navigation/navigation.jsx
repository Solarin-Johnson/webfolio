import { useEffect, useState } from "react";
import "./nav.scss";

export default function Navigation({ browserWidth }) {
  const menuItems = ["Home", "About", "Experience", "Skills", "Contact"];
  const [activeMenu, setActiveMenu] = useState(0);
  const [menuState, setMenuState] = useState(false);

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
                browserWidth={browserWidth}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export const MenuItems = ({ name, active, i, setActive, browserWidth }) => {
  const pages = document.querySelectorAll(".container")[0];

  const navigate = () => {
    if (pages.children) {
      const element =
        pages.children[
          browserWidth <= 600 ? 2 + i : 1 + i
        ].getBoundingClientRect();
      element &&
        window.scrollTo({
          top: element.top + window.pageYOffset - 70,
          behavior: "smooth",
        });
    }
  };

  return (
    <div
      className={`menu-items ${active === i && "menu-active"}`}
      onClick={() => {
        setActive(i);
        navigate();
      }}
    >
      {name}
    </div>
  );
};

export const MenuBar = ({ setMenu, menu }) => {
  return (
    <div className="menu-bar" onClick={() => setMenu(!menu)}>
      <span class={`fa-solid fa-${!menu ? "bars" : "close"}`}></span>
    </div>
  );
};
