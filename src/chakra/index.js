import styles from './styles';
import NavbarMobile from './components/navigation/mobile/navbar-mobile';
import NavbarTabMobile from './components/navigation/mobile/navbar-tab-mobile';
import Header from './components/containers/header';
import NavbarDesktop from './components/navigation/desktop/navbar-desktop';
import FullWidthRow from './components/containers/full-width-row';

const chakraCustomTheme = {
  styles,
  components: {
    NavbarMobile,
    NavbarTabMobile,
    Header,
    NavbarDesktop,
    FullWidthRow,
  }
}

export default chakraCustomTheme;