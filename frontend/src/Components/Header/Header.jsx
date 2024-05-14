import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Button, ContainerMain, Socials } from "../imports-components";

export default function Header() {
  const [showNavBtn, setShowNavBtn] = useState(false);
  const [showNavBar, setShowNavBar] = useState(true);
  useEffect(() => {
    let vw = document.documentElement.clientWidth;
    if (vw <= "600") {
      console.log(`vw= ${vw}`);
      setShowNavBtn(true);
      setShowNavBar(false);
    } else {
      console.log(`vw= ${vw}`);
      setShowNavBtn(false);
    }
  }, []);
  const options = [
    {
      navName: "Home",
      slug: "/",
    },
    {
      navName: "My Work",
      slug: "#work",
    },
    {
      navName: "About",
      slug: "#about",
    },
    {
      navName: "contact",
      slug: "#contact",
    },
  ];
  const navClasses =
    "border-2 rounded-xl px-4 py-2 bg-orange-400 hover:bg-orange-100 duration-200";
  const logoStyles = { width: "50px", height: "50px" };
  const logoUrl =
    "https://cdn.pixabay.com/photo/2017/01/08/21/37/flame-1964066_960_720.png";

  return (
    <div className="bg-lime-50">
      <ContainerMain>
        <header id="header" className="py-2 comfortaa">
          <div className="flex flex-wrap justify-between gap-x-10">
            <div className="logo">
              <Link to="/">
                <img className="rounded-md" style={logoStyles} src={logoUrl} />
              </Link>
            </div>
            <div>
              {showNavBtn && (
                <Button
                  className="mb-2 !p-0 !px-4 !py-2 bg-stone-400"
                  onClick={() => setShowNavBar((prevValue) => !prevValue)}
                >
                 <img src="public/images/menu.png" width="30px" height="30px"/>
                </Button>
              )}

              {showNavBar && (
                <ul className="flex flex-wrap flex-col sm:flex-row gap-2">
                  {options.map((option) => (
                    <HashLink
                      className={`${navClasses}`}
                      key={option.navName}
                      to={option.slug}
                    >
                      <li>{option.navName}</li>
                    </HashLink>
                  ))}
                </ul>
              )}
            </div>
            <Socials imagesStylesObj={{ width: "30px" }} />
          </div>
        </header>
      </ContainerMain>
    </div>
  );
}
