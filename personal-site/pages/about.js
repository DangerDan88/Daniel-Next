import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import { ButtonStyles } from "../styles/reusable";

const ImageStyles = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  img {
    border-radius: 25px;
  }
`;

const ContentStyles = styled.div`
  display: block;
  justify-content: center;
  padding-top: 2rem;
  .container {
    max-width: var(--siteWidth);
    margin: 0 auto;
    padding: 0 15px;

    @media (min-width: 480px) {
      padding: 0 30px;
    }
  }
  p {
    font-weight: 500;
    font-size: 17px;
    line-height: 27px;
    text-align: center;
  }

  .buttonP {
    display: flex;
    justify-content: start;
  }
`;

export default function About() {
  return (
    <div>
      <Head>
        <title>About Daniel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ImageStyles>
        <Image
          src="/images/portpic.jpeg"
          alt="port pic"
          height={300}
          width={300}
        />
      </ImageStyles>
      <ContentStyles>
        <div className="container">
          <p>
            Hello my name is Daniel Osornio I am a Full-Stack developer from
            Salt Lake City, Utah 🏔️
          </p>
          <p>
            I recently graduated from a Coding boot-camp ran through the
            University of Utah where we learned the MERN stack.💥 I really
            enjoyed my time here I really pushed my self to the edge which is
            needed to succeed in any field. I really like learning new things
            which is one of the reasons I decided to pursue being a developer
            💻.
          </p>
          <p>
            In my spare time when i'm not hacking away I enjoy staying active at
            the gym 🏋️ or hanging out with family and friends 👪
          </p>
          <p>
            I am currently looking for work am open to freelance and open source
            as well. Any way to improve my code and design skills with real
            world applications.
          </p>

          <p className="buttonP">
            <ButtonStyles>
              <a href="mailto:dangerdan808@gmail.com">Contact me</a>
            </ButtonStyles>
          </p>
        </div>
      </ContentStyles>
    </div>
  );
}
