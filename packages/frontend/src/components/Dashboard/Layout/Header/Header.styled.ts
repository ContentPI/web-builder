import styled from 'styled-components'

import Config from '~/config'

const mainColor = Config.theme?.brandColors[0]

export namespace CSS {
  export const Header = styled.header({
    width: '100%',
    display: 'flex',
    '.menu-opener': {
      marginTop: '15px',
      color: 'white',
      cursor: 'pointer'
    }
  })
}
