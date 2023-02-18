import React from 'react';

type Props = {
  params: {
    token: string;
  };
};

function visaPage({ params: { token } }: Props) {
  return (
    <div className="mb-auto text-white max-w-7xl mx-auto">
      <h2>{token}</h2>
    </div>
  );
}

export default visaPage;
