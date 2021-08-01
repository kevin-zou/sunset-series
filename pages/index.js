import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Events from '../components/Events'

const StyledContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

const StyledMain = styled.main`
  background: #292929;
  width: 100%;
  color: #FFFFFF;
  padding: 3rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledFooter = styled.footer`
  background: #121212;
  width: 100%;
  padding: 2rem 0;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Socials = styled.div`
  margin-top: 8px;

  a {
    margin: 0 12px;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export default function Home() {
  const events = [
    {
      name: "Airdash Arena",
      game: "Fighting Games",
      date: "Aug 7",
    },
    {
      name: "Sunset Series: League of Legends 1v1",
      game: "League of Legends",
      date: "Aug 14",
    },
    {
      name: "Hearthstone Classic Tournament",
      game: "Hearthstone",
      date: "Aug 20",
    },
    {
      name: "Sunset Series: VALORANT",
      game: "Valorant",
      date: "Aug 28",
    },
  ];

  return (
    <StyledContainer>
      <Head>
        <title>Sunset Series</title>
        <meta name="description" content="Sunset Series website" />
        <link rel="icon" href="/ss-favicon.ico" />
      </Head>

      <header>
        <Image src="/banner.png" alt="Sunset Series banner" width="7148" height="1787" />
      </header>

      <StyledMain>
        <h1>Events</h1>
        <Events events={events} />
      </StyledMain>

      <StyledFooter>
        <p>Organized with 💙 by the UBC Esports Association</p>
        <Socials>
          <a href="https://discord.io/ubcesports" target="_blank" rel="noopener noreferrer">
            Discord
          </a>
          <a href="https://facebook.com/ubcesports" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://instagram.com/ubcea" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://twitch.tv/ubcesports" target="_blank" rel="noopener noreferrer">
            Twitch
          </a>
          <a href="https://twitter.com/ubcesports" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </Socials>
      </StyledFooter>
    </StyledContainer>
  )
}
