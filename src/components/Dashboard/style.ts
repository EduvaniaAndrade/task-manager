import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 64px;

  @media (max-width: 768px) {
    padding: 0 20px;
    margin-top: 30px;
  }
`;

export const Header = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button{
    background: var(--lilac);
    color: var(--background);
    padding: 10px 26px;
    border: 0;
    border-radius: 6px;
    font-Weight: 500;
    transition: background 0.5s;

    &:hover{
      background:  var(--dark-lilac);
    }
    @media (max-width: 768px) {
      display: none;
    }
  }

  img{
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 32px;
  color: var(--white);

  span{
    color: var(--lilac);
  }

  @media (max-width: 768px) {
      font-size: 28px;
    }
`;

export const List = styled.ul`
  list-style: none;

  li{
    color: var(--light-white);
    float: left;
    display: inline-block;
    margin-right: 4rem;
    transition: background 0.5s;

    &:hover{
      cursor: pointer;
      color: var(--lilac);
    }
  }

  @media (max-width: 768px) {
      display: none;
    }
`;

export const Content = styled.div`
  margin-top: 64px;

  @media (max-width: 768px) {
    margin-top: 0px
  }
`;

export const Description = styled.div`
  float: left;
  margin-top: 5rem;

  h1{
    color: var(--white);
    font-size: 44px;
    margin-bottom: 32px;

    br{
      @media (max-width: 768px) {
        display: none;
      }
    }

    @media (max-width: 768px) {
      font-size: 30px;
      margin-top: -20px;
    }

    span{
      color: var(--lilac);
      
      @media (max-width: 768px) {
        font-size: 30px;
      }
    }
  }

  span{
    color: var(--light-white);
    
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  button{
    background: var(--lilac);
    color: var(--background);
    border: 0;
    border-radius: 6px;
    padding: 10px 26px;
    margin-top: 32px;
    transition: background 0.5s;

    &:hover{
      background:  var(--dark-lilac);
    }
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const ContentImage = styled.div`
  float: right;
  margin-top: -50px;

  img{
    width: 30rem;
    height: 30rem;

    @media (max-width: 768px) {
      width: 24rem;
      height: 24rem;
      margin-top: 20px;
    }
  }
`;
