import styled from "styled-components";

export const CardContainer = styled.div`
  width: 220px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: space-around;
  cursor: pointer;

  background-color: #182035;
  padding: 10px;
  border-radius: 9px;

  &:hover {
    background: #5141b0fe;
  }

  > img {
    width: 100px;
  }
`;

export const NumberKey = styled.h3`
  font-size: 22px;
  color: #fff;
  padding: 10px 0;
  text-align: left;
  font-family: 'Poppins', sans-serif;
 font-weight: 400;
`;
