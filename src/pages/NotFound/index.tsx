import { Container } from "../../components/Container";
import { MainTemplate } from "../../templates/MainTemplate";

export function NotFound() {
  return (
    <>
      <MainTemplate>
        <Container>
          <p>Page not found</p>
        </Container>
      </MainTemplate>
    </>
  );
}
