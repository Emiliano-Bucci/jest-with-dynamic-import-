import { render } from "@testing-library/react";
import Home from "../pages/index";

describe("Test example", () => {
  test("Dynamic import", () => {
    const {} = render(<Home />);
  });
});
