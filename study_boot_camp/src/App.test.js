import { render, screen } from "@testing-library/react";
import StudyBegin from "./StudyBegin";

test("renders learn react link", () => {
  render(<StudyBegin />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
