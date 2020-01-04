import {URL} from "../../constants";

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <div>
        <a style={linkStyle} href={URL.home}>Home</a>
        <a style={linkStyle} href={URL.assessment}>Assessment</a>
        <a style={linkStyle} href={URL.onboarding.basic}>Onboarding Basic</a>
        <a style={linkStyle} href={URL.onboarding.advanced}>Onboarding Advanced</a>
        <a style={linkStyle} href={URL.onboarding.proficient}>Onboarding Proficient</a>
        <a style={linkStyle} href={URL.visualisation}>Visualisation</a>
    </div>
);

export default Header;