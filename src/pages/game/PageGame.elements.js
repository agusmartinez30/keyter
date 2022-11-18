import styled from "styled-components";

export const GameContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  background-color: #070d17;
`;

export const Layout = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 10px 0;
`;

export const BtnHome = styled.button`
  width: 250px;
  padding: 10px 14px;
  cursor: pointer;
  border-radius: 6px;
  background: #5141b0fe;
  color: #fff;
  font-size: 22px;
`;

export const GameTitle = styled.h2`
  font-size: 26px;
  color: rgba(0, 245, 147, 255);
  padding: 40px 0;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
`;

export const InfoContainer = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const InfoGame = styled.h3`
  font-size: 22px;
  color: #fff;
  padding: 10px 0;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
`;

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;
