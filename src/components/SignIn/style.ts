import styled from 'styled-components';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

export const Container = styled.div`
  max-width: 480px;
  margin: auto;
  margin-top: 5rem;
  text-align: left;

  @media (max-width: 768px) {
    padding: 10px 0;
  }

  button{
    background: var(--lilac);
    width: 30rem;
    height: 50px;
    border: 0;
    border-radius: 6px;
    margin-top: 15px;
    font-weight: 500;
    font-size: 18px;
    transition: background 0.5s;

    &:hover{
      background: var(--dark-lilac);
    }

    @media (max-width: 768px) {
      width: 350px;
      margin: 20px 32px;
    }
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 32px;
  color: var(--white);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin: 25px;
  }

  span{
    color: var(--lilac);
  }
`;

export const Content = styled.div`
  margin-bottom: -10px;

  @media (max-width: 768px) {
    width: 350px;
    margin: auto;
  }
`;

export const IconInput = styled.input`
  width: 30rem;
  height: 60px;
  font-size: 16px;
  background: var(--light-background);
  color: var(--light-white);
  text-indent: -15rem; 
  border: none;
  border-radius: 6px;

  @media (max-width: 768px) {
    width: 350px;
  }

  &:hover{
    cursor: pointer;
  }
`;

export const IconContent = styled.label`
  position: relative;
  top: 39px;
  background: var(--lilac);
  padding: 21px 20px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;

  @media (max-width: 768px) {
    padding: 23px 20px;
  }
`;

export const Facebook = styled(FaFacebookF)`
  color: var(--backgrund);
`;

export const Google = styled(FaGoogle)`
  color: var(--backgrund);
`;

export const ContainerInputs = styled.div`
  margin-top: 60px;

  @media (max-width: 768px) {
    width: 350px;
    margin: auto;
    margin-top: 50px;
  }
`;

export const ContentInput = styled.div`
  margin-top: 20px;

  input{
    background: var(--light-background);
    color: var(--light-white);
    width: 30rem;
    height: 60px;
    border: 0;
    border-radius: 6px;
    text-indent: 20px;
    outline: none;

    @media (max-width: 768px) {
      width: 350px;
      font-size: 14px;
    }
  }

  span{
    display: block;
    color: var(--lilac);
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;