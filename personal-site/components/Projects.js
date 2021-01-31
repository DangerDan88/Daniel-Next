import React from "react";
//import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const ProjectImageContainerStyles = styled.div`
  display: flex;
  justify-content: center;
  max-width: var(--siteWidth);
  margin: 0 auto;
  padding: 0 15px;
`;

const MainHeadingStyles = styled.div`
  display: flex;
  justify-content: center;
  max-width: var(--siteWidth);
  margin: 0 auto;
  padding: 0 15px;
  font-weight: bold;
  font-size: 2rem;
  padding-bottom: 2rem;
`;

const MainProjectTextStyles = styled.div`
  display: flex;
  justify-content: start;
  max-width: var(--siteWidth);
  margin: 0 auto;
  p {
    font-weight: 500;
    font-size: 17px;
    line-height: 27px;
    text-align: center;
    color: var(--grey);
  }
`;

const ProjectLinkStyle = styled.a`
  a {
    list-style: none;
    color: var(--grey);
    text-decoration: none;
    //TODO fix hover style active state for nav links next doesnt read active state from anchor tag need to use next/router i think and figure out footer for every page
    &:active {
      box-shadow: 0 2px 0 var(--main);
      opacity: 1;
    }
  }
  a:hover {
    color: var(--white);
  }
`;
//TODO fix project description styles
export default function Projects() {
  return (
    <div>
      <MainHeadingStyles>Projects</MainHeadingStyles>
      <ProjectImageContainerStyles>
        <Image
          src="/images/macsketch.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </ProjectImageContainerStyles>
      <MainProjectTextStyles>
        <h1>GPH Equestrian</h1>
      </MainProjectTextStyles>
      <MainProjectTextStyles>
        <p>created using Gatsby js and Tailwind CSS</p>
      </MainProjectTextStyles>
      <MainProjectTextStyles>
        <ProjectLinkStyle>
          <a>https://gphequestrian.com/</a>
        </ProjectLinkStyle>
      </MainProjectTextStyles>
    </div>
  );
}
