import { FC } from "react";
import { styled } from "styled-components";

const Home: FC = () => {
	return (
		<HomeStyled>
			<Content>
				<h1>Margin Studio</h1>
				<Intro>
					<p
						className="
        description"
					>
						Web3 development studio focused on crafting products on the Internet Computer network
					</p>

					<p>
						Reach out on{" "}
						<a href="https://t.me/tomkoom" target="_blank" rel="noreferrer noopener">
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
	text-align: center;
	padding: 1rem 1rem 4rem 1rem;

	position: fixed;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
`;

const Content = styled.div``;

const Intro = styled.div`
	margin-top: 1rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	> p {
		font-size: var(--fs5);
	}

	> p.description {
		max-width: 32rem;
	}
`;

export default Home;
