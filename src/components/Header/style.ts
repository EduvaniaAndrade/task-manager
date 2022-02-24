import { FaBars, FaArrowRight } from 'react-icons/fa';
import styled from 'styled-components'

export const Container = styled.nav`
  width: 100%;
  height: 76px;
  display: flex;
  background: var(--light-background);
  align-items: center;
  justify-content: space-between;
  padding: 0 64px 0 28px;

  .hidden{
    display: none;
  }

  a {
    text-decoration: none;
  }

  div{
    margin-top: 0px;

    img{
      margin-left: 0px;

      &.hidden{
        @media (max-width: 768px) {
          display: none;
        }
      }

      &.UserImage{
        width: 52px;
        height: 52px;
        border-radius: 50%;
      }
    }

    span{
      color: var(--light-white);
      margin-left: 10px;

      &.newTask{
        position: absolute;
        margin-top: 5px;

        @media (max-width: 768px) {
          display: none;
        }
      }
    }

    &.UserInfo{
      display: inline-block;
      float: right;
      margin-top: 10px;
      margin-left: 5px;


      span{
        display: block;

        @media (max-width: 768px) {
          display: none;
        }

        &:last-child{
          color: var(--lilac);
        }
    }
  }

  &:last-child{
    @media (max-width: 768px) {
      float: right;
      margin-right: -20px;
      margin-left: 10px;
    }
  }
`;

export const Content = styled.div`
  div{

    &.contentAddTask{
      display: flex;
      align-content: center;
      justify-content: space-between;
      margin-top: -28px;
      margin-left: 30px;
    }
  }
`;

export const Bar = styled(FaBars)`
  color: var(--light-white);
`;

export const Icon = styled(FaArrowRight)`
  font-size: 12px;
  color: var(--light-white);
  float: right;
  margin: -15px 20px 0 0;

  @media (max-width: 768px) {
    margin: 10px 0px;
    transform: rotate(90deg);
    font-size: 16px;
  }
`;


