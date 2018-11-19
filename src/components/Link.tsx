import React, { ReactNode } from 'react';

interface ILinkProps {
  active: boolean;
  children: ReactNode;
  onClick: () => void;
}

const Link = ({ active, children, onClick }: ILinkProps) => {
  if (active) return <span>{children}</span>;
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

export default Link;
