import React from 'react';
import styled from 'styled-components';

import SideBar from '../components/sidebar';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.section`
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 960px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }
`;

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    return (
      <StyledLayout>
        <SideBar />
        <Content>
          <main>{children}</main>
        </Content>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </StyledLayout>
    );
  }
}

export default Layout;
