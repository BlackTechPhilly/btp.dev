import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import style from "../styles/bootstrapUi.module.css";

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
