import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Logo from "../../Logo/Logo";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../../UI/Backdrop/Backdrop";

configure({ adapter: new Adapter() });

describe("<SideDrawer/>", () => {
  it("should render the logo", () => {
    const wrapper = shallow(<SideDrawer />);
    expect(wrapper.find(Logo)).toHaveLength(1);
  });

  it("should show the backdrop if logo is clicked", () => {
    const wrapper = shallow(<SideDrawer show={true} />);
    expect(wrapper.find(Backdrop)).toHaveLength(1);
  });
});
