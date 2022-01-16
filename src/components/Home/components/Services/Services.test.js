import { screen, render } from "@testing-library/react";
import Services from "./Services";


describe('Testing <Services />', () => {


  it('should check if equipament card has icon', () => {
    render(<Services />);
    const title = 'Equipamentos sob medida'

    const card = screen.getByTitle(title)
    const icon = screen.getByAltText(title)

    // verify if card contain an icon by same alt title
    expect(card).toContainElement(icon)

    // verify if icon contain a src path to svg
    // expect(icon.src).('/assets/images/services/equipamentos.svg')
  })

})