import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

const StyledContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

const StyledHeader = styled.header`
  background: #121212;
  width: 100%;
  padding: 2rem 0;
  color: #FFFFFF;
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
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <StyledContainer>
      <Head>
        <title>Sunset Series</title>
        <meta name="description" content="Sunset Series website" />
        <link rel="icon" href="/ss-favicon.ico" />
      </Head>

      <StyledHeader>
        <Image src="/ss-logo.png" alt="Sunset Series logo" width="120" height="120" />
        <h1>Sunset Series</h1>
        <h2>Redefine. Recharge. Reconnect.</h2>
        <h3>August 6th - September 5th, 2021</h3>
      </StyledHeader>

      <StyledMain>
        Welcome to Sunset Series 2021 😎
      </StyledMain>

      <StyledFooter>
        Organized with 💙 by the UBC Esports Association
      </StyledFooter>
    </StyledContainer>
  )
}
