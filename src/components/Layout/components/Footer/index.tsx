import Link from "next/link";
import React from "react";
import styled from "styled-components";

const FooterComponent = styled.footer`
  padding: 42px 18px 36px;
  width: 100%;
  color: #fff;
  font-size: 0.875rem;
  background-color: #280033;

  @media (min-width: 768px) {
    padding: 2.625rem 3.25rem;
  }

  div {
    width: 100%;

    @media (min-width: 1024px) {
      width: 75%;
      margin: 0 auto;
    }
  }
`;

const FooterTitle = styled.h5`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.25rem;
  line-height: 1;
  margin-bottom: 1rem;
  text-align: center;
  margin-bottom: 2.625rem;
`;

const FooterSubTitle = styled.h6`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 1;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

const FooterList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  li {
    a {
      color: #ffc500;

      @media (min-width: 768px) {
        font-size: 1rem;
      }
    }
  }
`;

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
