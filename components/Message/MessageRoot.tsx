import { ReactNode } from "react";
import { Container } from "../styles-messages";

interface MessageRootProps {
  children: ReactNode;
}

export function MessageRoot({ children }: MessageRootProps) {
  return <Container>{children}</Container>;
}
