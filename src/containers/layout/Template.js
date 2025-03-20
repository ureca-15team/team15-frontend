import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import TemplateBlock from './Template.style';

const Template = ({ children, header, footer }) => {
  return (
    <>
      {header && <Header />}
      <TemplateBlock>{children}</TemplateBlock>
      {footer && <Footer />}
    </>
  );
};

export default Template;
