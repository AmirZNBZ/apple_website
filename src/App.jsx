import * as Sentry from "@sentry/react";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Navbar from "./components/Navbar";
import Features from "./components/Features";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
    </main>
  );
};

const ProfiledApp = Sentry.withProfiler(App);

export default ProfiledApp;
