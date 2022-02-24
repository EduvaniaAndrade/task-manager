import styled from 'styled-components'

export const Container = styled.nav`
  
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    margin: 0;
    background: var(--lilac);
    z-index: 999;
    width: 340px;
    height: 734px;

    animation-name: showMenu;
    animation-duration: 1s;
  }

  img{
    @media (max-width: 768px) {
      color: var(--background);
      float: right;
      margin-top: 18px;
      margin-right: 18px;
    }
  }

  &.hidden{
    display: none;
  }

  &.showen {
    display: block;
  }

}

@keyframes showMenu {
  from{
    transform: translateX(-220px);
  }
  to{
    transform: translateX(0px);
  }
}


@keyframes hideMenu {
  from{
    transform: translateX(0px);
  }
  to{
    transform: translateX(-220px);
  }
}

`;

export const List = styled.ul`
  list-style: none;

  @media (max-width: 768px) {
    padding-left: 30px;
    margin-top: 100px;
  }

  li{
    @media (max-width: 768px) {
     font-size: 24px;
     color: var(--white);
     margin-bottom: 10px;
    }


`;
