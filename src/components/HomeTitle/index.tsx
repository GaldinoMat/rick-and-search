import Link from "next/link";
import React from "react";
import { HomeDisclaimer, Title, Subtitle } from "./styles";

function HomeTitle() {
  return (
    <HomeDisclaimer data-testid="test-home">
      <div>
        <Title>Welcome to Rick and Searchy!</Title>
        <Subtitle>
          Search through 826 characters&apos; info in more than 40 pages!
        </Subtitle>
      </div>
      <Link href="/search">Search!</Link>
    </HomeDisclaimer>
  );
}

export default HomeTitle;
