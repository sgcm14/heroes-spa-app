import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "../../../src/ui";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Pruebas en <NavBar />", () => {
  const contextValue = {
    logged: true,
    user: {
      id: "abc",
      name: "Juan Carlos",
    },
    logout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test("debe de mostrar el nombre del usuario", () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    // screen.debug();
    expect(screen.getAllByText("Juan Carlos")).toBeTruthy;
  });

  test("debe de llamar el logout y navigate cuando se hace click en el boton", () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    const logoutBtn = screen.getByRole("button");
    fireEvent.click(logoutBtn);
    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});
