import React from 'react';

interface containerProps {
  children: React.ReactNode;
  height: string;
}

const Container: React.FC<containerProps> = ({ children, height }) => {
  return (
    <div
      className={`max-w-[1280px] md:px-10 lg:px-5 xl:px-20  px-4 mx-auto ${height}`}
    >
      {children}
    </div>
  );
};

export default Container;
