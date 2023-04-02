import Link from "next/link";
import React from "react";
import {
  FooterComponent,
  FooterTitle,
  FooterSubTitle,
  FooterList,
} from "./styles";

function Footer() {
  return (
    <FooterComponent>
      <div>
        <FooterTitle>Rick and Searchy</FooterTitle>
        <FooterSubTitle>Pages</FooterSubTitle>
        <FooterList>
          {[
            ["Search", "/search"],
            ["Favourites", "/favourites"],
          ].map(([text, url]) => (
            <li key={url}>
              <Link href={url}>{text}</Link>
            </li>
          ))}
        </FooterList>
      </div>
    </FooterComponent>
  );
}

export default Footer;
