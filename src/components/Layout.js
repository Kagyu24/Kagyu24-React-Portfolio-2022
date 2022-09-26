import Navbar from "./Navbar";
import Social from "./Social";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Social />
      <main>{children}</main>
    </>
  );
};
