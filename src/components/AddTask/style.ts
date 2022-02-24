import styled from 'styled-components'

export const Container = styled.form`
  width: 603px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  margin-top: 5rem;

  @media (max-width: 768px) {
    width: 375px;
  }
`;

export const Content = styled.div`
  display: block;

  &:first-child{
    margin-bottom: 50px;
  }

  span{
    color: var(--lilac);

    @media (max-width: 768px) {
      font-size: 16px;
    }

    &.addTask{
      display: block;
      margin-left: 3.5rem;
      color: var(--light-white);

      @media (max-width: 768px) {
        margin-left: 55px;
      }
    }
  }

  label{
    padding: 15px 16px;
    font-size: 14px;
    background: var(--light-background);
    color: var(--light-white);
    border-radius: 28px;
  }
  
  h1{
    color: var(--white);
    display: inline-block;
    margin-left: 10px;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  img{
    position: relative;
    float: right;
    right: 20px;
    bottom: 58px;
  }

  @media (max-width: 768px) {
    width: 375px;
  }
`;

export const Input = styled.input`
  width: 603px;
  height: 60px;
  background: var(--light-background);
  border: 0;
  border-radius: 6px;
  margin-top: 5px;
  margin-bottom: 15px;
  text-indent: 20px;
  outline: none;
  color: var(--white);
  padding-right: 10px;

  @media (max-width: 768px) {
    width: 375px;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  width: 603px;
  height: 60px;
  background: var(--lilac);
  color: var(--light-background);
  border: 0;
  border-radius: 6px;

  &:last-child{
    background: var(--light-background);
    color: var(--light-white);
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    width: 375px;
    font-size: 16px;
  }
`;


