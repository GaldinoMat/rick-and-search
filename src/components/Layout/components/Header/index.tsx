import Link from "next/link";
import React from "react";
import { HeaderComponent } from "./styles";

function Header() {
  return (
    <HeaderComponent data-testid="header">
      <div>
        <Link href="/">Rick and Searchy!</Link>
      </div>
    </HeaderComponent>
  );
}

export default Header;
