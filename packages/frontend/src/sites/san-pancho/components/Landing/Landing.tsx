import React from 'react'
import { FaDownload, FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa'

import { CSSAction, CSSLogo, CSSReservationText, CSSWrapper } from './Landing.styled'

const Landing = () => {
  const docsUrl = 'https://ranchosanpancho.com/reservas'

  const whatsapp =
    'https://api.whatsapp.com/send?phone=14153072483&text=Link%3A%0Ahttps%3A%2F%2Ffb.me%2F1Hn1FskZI%0A%0AI%20saw%20this%20on%20Facebook...&source_url=https%3A%2F%2Ffb.me%2F1Hn1FskZI&icebreaker=I%20saw%20this%20on%20Facebook...&app=facebook&entry_point=post_cta&context=ARCCcIXywSo3pGsFmbDOzLnE2xNaafuXDy93JYAzGBPBEXLamo6w8dzXr1dHoSAF1su93ar33UdUyPaezXJ9MSRdY7pygwvi_nHGuaRyx7HEbEQVlXJXQZsNqclcWZiM2_POV4jWgLfg12wS5Ikmb_hVjVMASN_Xk67kFk9SrBiGxcuyCSYvGwoB7hDTDvkWJYzHTgjaSg_-goEmY5wJlY2FRYoLd-7FsdlvQlluJA&fbclid=IwAR3Zk2Kvv96zydNtV2XT1hwrsL5ZqCWWBPHm0xpJYTbWF-BjhY_DnVkbETw' // eslint-disable-line max-len

  return (
    <CSSWrapper>
      <CSSLogo src="/images/black-logo.png" />

      <CSSReservationText href={docsUrl} target="_blank">
        <FaDownload /> Reservas e Información
      </CSSReservationText>

      <div>
        <CSSAction href="https://www.facebook.com/CabanasSanPancho" target="_blank">
          <FaFacebookSquare color="#4267B2" size={80} />
        </CSSAction>
        <CSSAction href={whatsapp} target="_blank">
          <FaWhatsapp color="#25D366" size={80} />
        </CSSAction>
        <CSSAction href="https://www.instagram.com/cabanassanpancho/" target="_blank">
          <FaInstagram color="#C13584" size={80} />
        </CSSAction>
      </div>
    </CSSWrapper>
  )
}

export default Landing
