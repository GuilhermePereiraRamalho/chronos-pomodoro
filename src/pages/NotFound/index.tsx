import { useEffect } from "react";
import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import { Heading } from "../../components/Heading";
import { RouterLink } from "../../components/RouterLink";
import { MainTemplate } from "../../templates/MainTemplate";

export function NotFound() {
  useEffect(() => {
    document.title = "Not Found - Chronos Pomodoro";
  }, []);

  return (
    <>
      <MainTemplate>
        <Container>
          <GenericHtml>
            <Heading>404 - Page Not Found 🚀</Heading>
            <p>
              Oops! It looks like the page you’re trying to access doesn’t
              exist. Maybe it went on vacation, decided to explore the universe,
              or got lost somewhere between two black holes. 🌌
            </p>
            <p>
              But don’t worry—you’re not lost in space (yet). You can safely go
              back to the <RouterLink href="/">home page</RouterLink> or to the{" "}
              <RouterLink href="/history/">history</RouterLink> — or you can
              stay here and pretend you’ve discovered a secret page that only
              the coolest explorers can access. 🧭✨
            </p>
            <p>
              If you think this page should exist (or if you just want to chat
              about time travel and wormholes), feel free to get in touch.
              Otherwise, use the menu to return to the real world.
            </p>
            <p>
              In the meantime, here’s something to think about: “If a page
              doesn’t exist on the internet, did it ever really exist?” 🤔💭
            </p>
          </GenericHtml>
        </Container>
      </MainTemplate>
    </>
  );
}
