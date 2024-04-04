import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <HomeWrapper>
      <h2>GoWebEZ is Crazy Bastart Team</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu
        pharetra nec, mattis ac neque.
      </p>

      <button type="button" className="btn btn-outline-dark">
        Learn more team
      </button>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  padding: 4rem 2rem;

  > p {
    margin: 2rem 0;
  }
`;
