import { render, screen } from "@testing-library/react";
import Goal from "./Goal";

jest.mock("react-router-dom", () =>{
    const originalModule = jest.requireActual('react-router-dom');
    return {
        ...originalModule,
        Link: ({children}) => <div>{children}</div> 
    };
});
describe("component goal",  () => {
    it("renders the button", () => {
        render(<Goal />);
        const button = screen.getByText('Completed');
        expect(button).toBeInTheDocument();
    });
    it("renders an icon image", () => {
        render(<Goal icon="🏃"/>);
        const icon = screen.getByText('🏃');
        expect(icon).toBeInTheDocument();
    });
});