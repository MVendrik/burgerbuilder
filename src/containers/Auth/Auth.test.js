import { Auth } from "./Auth";
import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Input from "../../components/UI/Input/Input";

configure({ adapter: new Adapter() });

describe("<Auth />", () => {
  it("should render 2 input fields if loading is false", () => {
    const wrapper = shallow(<Auth onSetAuthRedirect={() => {}} />);
    expect(wrapper.find(Input)).toHaveLength(2);
  });
});
