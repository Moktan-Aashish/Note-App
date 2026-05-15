import type { ReactNode } from "react";

type props = {
  className?: string;
  children: ReactNode;
};

export default function AppScreen({ className, children }: props) {
  return (
    <div className={`w-dvw h-dvh m-0 p-0 ${className ?? ""}`}>{children}</div>
  );
}
