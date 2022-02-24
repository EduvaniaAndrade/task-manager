import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  max-width: 1004px;
  height: 200px;
  margin: auto;
  margin-top: 5rem;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0 20px;
    margin-top: 4rem;
  }

  h1{
    font-weight: bold;
    font-size: 32px;
    color: var(--light-white);
    margin-bottom: 12px;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  h2{
    font-size: 24px;
    color: var(--light-white);
    margin-bottom: 22px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  span{
    color: var(--light-white);
    &.ContainerSpan{
      margin-bottom: 32px;

      @media (max-width: 768px) {
        font-size: 18px;
      }
    }
  }

  .changeAllChildren {
    img {
      display: block;
    }

    .span{
      text-decoration: line-through;
    }

    .check{
      background: var(--lilac);
    }
  }

`;

export const Content = styled.div`
  display: block;
  border-radius: 12px;
  margin-bottom: 12px;
  background: var(--light-background);

  &.search{
    margin-bottom: 34px;

    label{
      background: var(--lilac);
      color: var(--light-white);
      border-radius: 6px;
      padding: 10px;
      position: absolute;
      margin-top: 10px;
      margin-left: 18px;
    }

    input{
      width: 1004px;
      height: 60px;
      border: 0;
      border-radius: 12px;
      background: var(--light-background);
      text-indent: 70px;

      @media (max-width: 768px) {
        width: 370px;
        font-size: 16px;
      }
    }

    @media (max-width: 768px) {
      width: 318px;
    }
  }

  img{
    float: right;
    margin: 20px 30px;
    display: none;
  }

`;

export const CheckBox = styled.div`
  display: inline-block;
  width: 28px;
  height: 28px;
  border: 2px solid #B4ACF9;
  box-sizing: border-box;
  border-radius: 6px;
  margin: 18px;
  color: var(--white);

  img{
    float: right;
    margin: 5px;
  }

  &:hover{
    cursor: pointer;
  }

  @media (max-width: 768px) {
    float: left;
  }

  &.changed{
    background: var(--lilac);

    img{
      display: block;
    }

    span{
      &:first-child{
        color: red;
      }
    }
  }
`;

export const ContentSpan = styled.div`
  display: inline-block;
  margin-bottom: 10px;

  span{

    &:first-child{
      margin-bottom: 8px;

      @media (max-width: 768px) {
        margin-top: 22px;
      }
    }
    &:last-child{
      color: var(--lilac);
    }
  }
`;

export const Span = styled.span`
  display: block;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Add = styled.div`
  display: none;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    padding: 20px;
    display: block;
    background: var(--lilac);
    color: var(--background);
    border-radius: 12px;
    margin: auto;
    margin-top: 60px;
  }
`;