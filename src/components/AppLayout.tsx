import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import styled from 'styled-components';
import logo from '../assets/logo.png';

type Props = { children: React.ReactNode };
const { Header, Content, Footer } = Layout;

const LayoutContainer = styled(Layout)`
  height: 100vh;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

const Title = styled.h1`
  font-size: 12px;
  font-style: italic;
  text-align: center;
  color: palevioletred;
`;

const AppHeader = styled(Header)`
  height: 10vh;
`;

const AppContainer = styled.div`
  max-width: 800px;
  height: 100%;
  margin: 0 auto;
  padding: 10px 50px;
`;

const AppFooter = styled(Footer)`
  height: 30px;
  position: sticky;
  bottom: 0;
`;

export const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <LayoutContainer>
      <AppHeader>
        <Link to='/'>
          <div>
            <Logo src={logo} alt='logo' />
          </div>
        </Link>
      </AppHeader>
      <Content>
        <AppContainer>{children}</AppContainer>
      </Content>
      <AppFooter>
        <Title>Made with ❤️ and 💡 by: Ibrahim Ismail</Title>
      </AppFooter>
    </LayoutContainer>
  );
};
