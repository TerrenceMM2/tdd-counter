import { shallow, mount } from 'enzyme';
import Counter from "./Counter"
import App from "./App"

describe("Counter Testing", () => {

  let wrapper;

  // Jest - sets up common settings in all tests
  beforeEach(() => {
    // shallow does not render children components.
    wrapper = shallow(<Counter />)

    // mount extends DOM tree
    // NOT compatible with React 17 - https://github.com/enzymejs/enzyme/issues/2462
    // wrapper = mount(<App />)
    console.log(wrapper.debug())
  })

  test('render the title of counter', () => {

    // .debug() logs the JSX
    // console.log(wrapper.debug())

    // .find() - finds based on tag, class, attribute, etc.
    // .text() - looks for text.
    // .toContain() - match data or regex.
    expect(wrapper.find("h1").text()).toContain("This is counter app");

    // DEFAULT Test Code
    // render(<App />);
    // const linkElement = screen.getByText(/Learn React/i);
    // expect(linkElement).toBeInTheDocument();
  });

  test("Render button with text 'increment'", () => {
    expect(wrapper.find('#increment-btn').text()).toBe("Increment")
  })

  test("render the initial value of state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  })

  test("render the click event of increment button and increment counter value", () => {
    // Enzyme - .simulate()
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  })

  test("render the click event of decrement button and decrement counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  })

})


