import React from "react";
import { StaticQuery, graphql } from "gatsby";

const getSiteData = graphql`
  {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;

const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={data => {
        return <h1>hi title: {data.site.siteMetadata.title}</h1>;
      }}
    />
  );
};

export default RegularHeader;
