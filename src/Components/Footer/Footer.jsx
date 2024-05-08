import React from "react";
import { Socials } from "../imports-components";

export default function Footer() {
  return (
    <footer id="Footer" className="py-4 bg-slate-400">
      <div className="flex flex-wrap justify-center ">
        <p>Made with ❤ by Pradeep Gaur</p>
      </div>
      <Socials className="justify-center" imagesStylesObj={{ width: "40px" }} imagesDivClassesProp="shadow-none bg-transparent hover:bg-slate-300" />
    </footer>
  );
}
