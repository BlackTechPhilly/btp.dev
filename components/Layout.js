import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { GlobalStyles } from "../styles/global";
import style from "../styles/bootstrapUI.module.css";

const Layout = ({ children }) => {
  return (
    <div className={style.layout}>
      <NavigationBar />
      {children}
      <br />
      <Footer />
    </div>
  );
};
export default Layout;
