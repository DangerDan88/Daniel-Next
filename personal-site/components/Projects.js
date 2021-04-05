import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
import { MainHeadingStyles } from "../styles/reusable";

const ProjectImageContainerStyles = styled.div`
  display: flex;
  justify-content: center;
  max-width: var(--siteWidth);
  margin: 0 auto;
  padding: 0 15px;
  padding-top: 2rem;
  img {
    border-radius: 25px;
  }
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
    &:active {
      box-shadow: 0 2px 0 var(--main);
      opacity: 1;
    }
  }
  a:hover {
    color: var(--mainActive);
  }
`;

export default function Projects() {
  return (
    <div>
      <MainHeadingStyles>Projects</MainHeadingStyles>
      <ProjectImageContainerStyles>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.1 }}>
          <Image
            src="/images/macsketch.png"
            alt="Picture of the author"
            width={300}
            height={300}
          />
        </motion.div>
      </ProjectImageContainerStyles>
      <MainProjectTextStyles>
        <h1>GPH Equestrian</h1>
      </MainProjectTextStyles>
      <MainProjectTextStyles>
        <p>created using Gatsby js and Tailwind CSS</p>
      </MainProjectTextStyles>
      <MainProjectTextStyles>
        <ProjectLinkStyle>
          <a href="https://gphequestrian.com/" target="_blank">
            Visit Gphequestrian.com
          </a>
        </ProjectLinkStyle>
      </MainProjectTextStyles>
      <ProjectImageContainerStyles>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Image
            src="/images/macsketch2.png"
            alt="Picture of the author"
            width={300}
            height={300}
          />
        </motion.div>
      </ProjectImageContainerStyles>
      <MainProjectTextStyles>
        <h1>LearnBuildType</h1>
      </MainProjectTextStyles>
      <MainProjectTextStyles>
        <p>
          created using React, Serverless functions and Styled Components with
          Auth0
        </p>
      </MainProjectTextStyles>
      <MainProjectTextStyles>
        <ProjectLinkStyle>
          <a href="https://elated-torvalds-247cb0.netlify.app/" target="_blank">
            Visit LearnBuildType
          </a>
        </ProjectLinkStyle>
      </MainProjectTextStyles>
    </div>
  );
}
