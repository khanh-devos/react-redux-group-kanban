import { render } from "@testing-library/react"
import { Provider } from "react-redux";
import SingleMission from "../components/missions/SingleMission";
import MyProfile from "../components/myprofile/MyProfile"
import ProfileItem from "../components/myprofile/ProfileItem";
import store from '../store';

describe('test Single Mission', () => {
  it('should match Single Mission', () => {
    const data = {
      missionId: '1111', 
      missionName: 'name', 
      missionDescription: 'desc', 
      missionReserved: false,
    };

    const { container } = render(
     <Provider store={store}>
       <SingleMission {...data} />
     </Provider>
    );

    expect(container).toMatchSnapshot();
  })
})