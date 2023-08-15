import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => (
  <div className="px-4 py-8 flex items-center flex-col min-h-screen font-mono outline-0">
    {children}
  </div>
);
