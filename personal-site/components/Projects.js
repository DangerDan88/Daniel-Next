import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const ProjectContainerStyles = styled.div`
  display: flex;
  justify-content: center;
  max-width: var(--siteWidth);
  margin: 0 auto;
  padding: 0 15px;
`;

const MainProjectHeadingStyles = styled.div`
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
  padding-top: 2rem;
  p {
    font-weight: 500;
    font-size: 17px;
    line-height: 27px;
    text-align: center;
    color: var(--grey);
    padding-left: 2rem;
  }
`;

export default function Projects() {
  return (
    <div>
      <MainProjectHeadingStyles>Projects</MainProjectHeadingStyles>
      <ProjectContainerStyles>
        <Image
          src="/images/macsketch.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </ProjectContainerStyles>
      <MainProjectTextStyles>
        <h1>GPH Equestrian</h1>
      </MainProjectTextStyles>
      <MainProjectTextStyles>
        <p>created using Gatsby js and Tailwind CSS</p>
      </MainProjectTextStyles>
    </div>
  );
}
