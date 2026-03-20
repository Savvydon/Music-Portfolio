import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <p>
          © {new Date().getFullYear()} Crown Piano Studio. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
