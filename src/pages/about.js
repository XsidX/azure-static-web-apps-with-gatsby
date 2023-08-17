import React from 'react';
import { Link, graphql } from 'gatsby';

const About = ({ data }) => (
  <React.Fragment>
    <h2>{data.site.siteMetadata.title}</h2>
    <div>{data.site.siteMetadata.description}</div>
    <Link to="/">Back to home</Link>
  </React.Fragment>
)

export default About;

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`
