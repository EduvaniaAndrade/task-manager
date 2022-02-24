import styled from 'styled-components'

export const Container = styled.div`
  width: 603px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 3rem auto;

  @media (max-width: 768px) {
    width: 375px;
  }
`;

export const Content = styled.div`
  display: block;

  &.content{
    div{
      display: inline-block;
      width: 60%;

        h4{
          color: var(--white);
          margin-top: 3px;
          margin-bottom: 10px;

          @media (max-width: 768px) {
            font-size: 16px;
          }
        }

        &:last-child{
          float: right;
          margin-top: 0;
          right: 0;
          width: 40%;

          img{
            width: 130px;
            height: 140px;
            float: right;
            margin-right: 0;

            @media (max-width: 768px) {
              width: 110px;
              height: 120px;
            }
          }
        }
        &.ContentInfo{
          display: block;
          float: none;
          margin: 15px 20px;
        }
    }
    margin: 40px 0;
  }

  &:first-child{
    margin-bottom: 50px;
  }

  span{
    color: var(--lilac);

    &.profile{
      display: block;
      margin-left: 4rem;
      color: var(--light-white);

      @media (max-width: 768px) {
        margin-left: 65px;
      }
    }

    
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  label{
    padding: 15px 15px;
    font-size: 14px;
    background: var(--light-background);
    color: var(--light-white);
    border-radius: 28px;
    margin-left: 10px;
  }
  
  h1{
    color: var(--white);
    display: inline-block;
    margin-left: 10px;
  }

  img{
      float: left;
      margin-left: 10px;
      margin-right: 14px;

      &.UserImage{
        width: 52px;
        height: 52px;
        border-radius: 50%;
      }
    }

    h3{
      font-size: 24px;
      color: var(--white);
      margin-top: 5px;
    }

    &:last-child{
      margin-top: 30px;
      width: 100%;
      height: 60px;

      span{
        color: var(--light-white);
      }
    }
`;

export const Button = styled.button`
  width: 381px;
  height: 60px;
  background: var(--light-background);
  border: none;
  border-radius: 6px;
  color: var(--light-white);
  margin: auto;

  @media (max-width: 768px) {
    width: 375px;
    font-size: 16px;
  }
`;