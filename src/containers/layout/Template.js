import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import TemplateBlock from "./Template.style";

const Template = ({ children, header, footer }) => {
  console.log("Template children:", children); // 디버깅용 로그 추가
  return (
    <>
      {header && <Header />}
      <TemplateBlock>{children}</TemplateBlock>
      {footer && <Footer />}
    </>
  );
};

export default Template;
