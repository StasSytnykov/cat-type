import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => (
  <div className="px-3 mx-auto bg-gradient-radial h-screen w-screen flex items-center justify-center flex-col">
    {children}
  </div>
);
