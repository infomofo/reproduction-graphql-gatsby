import React from 'react';
import styled from 'styled-components';

import { Link, StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const SideNav = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  background-color: #90393a;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SiteTitle = styled.a`
  h2 {
    color: #fff;
    text-decoration: none;
    flex-grow: 0;
  }
`;
const SiteDescription = styled.a`
  display: none;

  @media (min-width: 600px) {
    font-weight: 300;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: white;
    max-width: 400px;
  }

  .gatsby-image-wrapper {
    margin-right: 10px;
    flex-grow: 1;
  }
`;

const SiteLinks = styled.p`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 250px;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 5px;
  a {
    text-decoration: underline;
    color: white;
    font-weight: 300;
  }
`;

const SiteSocial = styled.p`
  margin-bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 150px;
  a {
    color: white;
    font-size: 25px;

    @media (min-width: 960px) {
      color: #999;
      font-size: 30px;
    }
  }
`;

function SideBar() {
  return (
    <StaticQuery
      query={sideBarQuery}
      render={(data) => {
        const { title, description, author, social } = data.site.siteMetadata;
        return (
          <SideNav>
            <SiteTitle href="/">
              <h2>{title}</h2>
            </SiteTitle>
            <SiteDescription href="/">
              {data.avatar && (
                <Image
                  fixed={data.avatar.childImageSharp.fixed}
                  fadeIn={false}
                  alt={author}
                  imgStyle={{
                    borderRadius: `50%`,
                  }}
                />
              )}
              {description}
            </SiteDescription>
            <SiteLinks>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </SiteLinks>
            <SiteSocial>
              <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>
              <a href={`https://instagram.com/${social.instagram}`}>
                Instagram
              </a>
              <Link to="/feed.xml">Rss</Link>
            </SiteSocial>
          </SideNav>
        );
      }}
    />
  );
}

const sideBarQuery = graphql`
  query SideBarQuery {
    avatar: file(absolutePath: { regex: "/bitmoji-chef.png/" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
        social {
          twitter
          instagram
        }
      }
    }
  }
`;

export default SideBar;
