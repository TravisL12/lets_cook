import { useState, useEffect } from "react/cjs/react.development";
import { SApp, SHeader, SSidebar, SMain } from "../styles/styles";

export default function Home() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("/api/hello")
      .then((resp) => resp.json())
      .then((resp) => {
        setMessage(resp.name);
      });
  });

  return (
    <SApp>
      <SHeader>Let's Cook</SHeader>
      <SSidebar>sidebar</SSidebar>
      <SMain>{message}</SMain>
    </SApp>
  );
}
