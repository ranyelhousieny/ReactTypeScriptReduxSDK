import React from 'react';
import './Author.css';

interface Props {
  authorId: string;
  authorName: string;
  click: any;
}

const Author = (props: Props) => {
  return (
    <div>
      <p className="authorCss" onClick={props.click}>
        {props.authorId}. {props.authorName}
      </p>
    </div>
  );
};

export default Author;
