import { FC } from "react";
import { styled } from "styled-components";

const Home: FC = () => {
  return (
    <HomeStyled>
      <div className="content">
        <h1>Margin 🛠️</h1>

        <div className="header">
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
        </div>
      </div>
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  text-align: left;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  > div.content {
    width: 100%;
    max-width: 36rem;

    > div.header {
      margin-top: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      > p {
        font-size: var(--fs4);
      }
    }
  }
`;

export default Home;
