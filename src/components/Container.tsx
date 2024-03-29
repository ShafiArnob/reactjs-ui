import React, { ReactNode } from "react";

const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="max-w-[1188px] mx-auto flex flex-col justify-center">
      {children}
    </div>
  );
};

export default Container;
