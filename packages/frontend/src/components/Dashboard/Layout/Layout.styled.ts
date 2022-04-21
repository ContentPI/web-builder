import styled from 'styled-components'

export namespace CSS {
  export const DashboardLayout = styled.div({})

  export const Header = styled.header({
    borderBottom: '1px solid rgba(72, 94, 144, 0.16)',
    height: '60px',
    lineHeight: '60px',
    paddingLeft: '20px',
    img: {
      height: '45px',
      marginTop: '5px'
    }
  })

  export const FlexWrapper = styled.div({
    display: 'flex'
  })
}
