import { GitHubIcon } from "../components/Icons";
import LinkButton from "../components/LinkButton";
import Logo from "../components/Logo";
import SearchInput from "../components/SearchInput";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <nav className="primary-nav">
        <SearchInput />
        <LinkButton
          href="https://github.com/dostonnabotov/quicksnip/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
          <span>Add your snippet</span>
        </LinkButton>
      </nav>
    </header>
  );
};

export default Header;