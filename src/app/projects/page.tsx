import { Metadata } from "next";
import Client from "./Client";

export default function Page() {
  return <Client />;
}

// Metadata is only supported on server side
export const metadata: Metadata = {
  title: "maxrchung - Projects",
};
