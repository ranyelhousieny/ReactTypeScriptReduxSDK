import React from 'react';
import './Author.css';
import styled from 'styled-components';

interface Props {
  authorId: string;
  authorName: string;
  click: any;
}

const StyledDiv = styled.div`
  width: 40%;
  margin: 16px auto;
  border: 2px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const Author = (props: Props) => {
  return (
    <StyledDiv>
      <div onClick={props.click}>
        <p>
          {props.authorId}. {props.authorName}
        </p>
      </div>
    </StyledDiv>
  );
};

export default Author;
