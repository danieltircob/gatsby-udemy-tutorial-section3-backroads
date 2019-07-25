import React from "react";
import styled from "styled-components";
const Title = ({ title, subtitle, className }) => {
  return (
    <TitleWrapper>
      <h1>
        <span className="title">{title}</span>
        <span>{subtitle}</span>
      </h1>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  text-transform: uppercase;
  font-size: 2.3rem;
  margin-bottom: 2rem;
  h1 {
    text-align: center;
    letter-spacing: 7px;
    color: var(--primaryColor);
  }
  .title {
    color: var(--mainBlack);
  }
  span {
    display: block;
  }

  @media (min-width: 576px) {
    span {
      display: inline;
      margin: 0.35rem;
    }
  }
`;

export default Title;
