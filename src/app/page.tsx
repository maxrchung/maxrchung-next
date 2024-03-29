import { Metadata } from "next";
import Client from "./Client";
import "./style.scss";

export default function Page() {
  return <Client />;
}

// Metadata is only supported on server side
export const metadata: Metadata = {
  title: "maxrchung",
};
