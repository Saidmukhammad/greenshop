import Container from '../common/Container'
import FooterContacts from './footer-content/FooterContacts'
import FooterInfo from './footer-content/FooterInfo'
import FooterLinks from './footer-content/FooterLinks'

const Footer = () => {
  return (
    <div className="">
      <Container>
        <FooterInfo />
        <FooterContacts />
        <FooterLinks />
        <div className="py-[10px]">
          <p className="text-[#3D3D3D] text-center text-[14px] leading-8">
            © 2021 GreenShop. All Rights Reserved.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Footer