import React from 'react';
import s from './Home.styles';

export default function Home() {
  return (
    <s.Root>
      <h2>GoWebEZ is Crazy Bastart Team</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu
        pharetra nec, mattis ac neque.
      </p>

      <button type="button" className="btn btn-outline-dark">
        Learn more team
      </button>
    </s.Root>
  );
}
