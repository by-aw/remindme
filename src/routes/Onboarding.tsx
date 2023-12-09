import LogoVector from "@/components/svg/logo-vector";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import "./Onboarding.css";
import Button from "@/components/ui/button";

export default function Onboarding() {
  const inputNameRef = useRef<HTMLInputElement>(null);
  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    localStorage.setItem("username", inputNameRef.current?.value ?? "");
  }
  return (
    <form onSubmit={handleFormSubmit} className="Onboarding">
      <section className="Header">
        <LogoVector className="Logo" />
        <h1>Remind Me</h1>
        <h2>Let's get you set up</h2>
      </section>
      <section>
        <label>What's your name</label>
        <Input ref={inputNameRef} />
      </section>
      <Button className="FancyButton">Get Started</Button>
    </form>
  );
}
