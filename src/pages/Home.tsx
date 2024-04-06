import { FC } from "react";
import { styled } from "styled-components";

const Home: FC = () => {
  return (
    <HomeStyled>
      <Content>
        <h1>Margin 🛠️</h1>
        <Intro>
          <p>
            Web3 development studio focused on crafting products on the{" "}
            <a
              href="https://internetcomputer.org/"
              rel="noreferrer noopener"
              target="_blank"
            >
              Internet Computer network
            </a>
            <br />
            Reach out on{" "}
            <a
              href="https://t.me/tomkoom"
              target="_blank"
              rel="noreferrer noopener"
            >
              Telegram
            </a>{" "}
            or <a href="mailto:tomash.sugint@gmail.com">send email</a>
          </p>
        </Intro>
      </Content>
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  text-align: left;
  padding: 1rem 1rem 4rem 1rem;

  /* center */
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const Content = styled.div`
  max-width: 36rem;
`;

const Intro = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > p {
    font-size: var(--fs4);
  }
`;

export default Home;
