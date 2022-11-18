import styled from "styled-components";

export const GameContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  background-color: #070d17;


  @media  (max-width: 900px) {
    width: 80%;
  }
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

  @media  (max-width: 900px) {
    width: 100%;
  }
`;

export const GameTitle = styled.h2`
  font-size: 28px;
  color: rgba(0, 245, 147, 255);
  padding: 40px 0;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
`;

export const InfoContainer = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;



  @media  (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  
  }
`;

export const InfoGame = styled.h3`
  font-size: 26px;
  color: #fff;
  padding: 10px 0;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-weight: 400;

  > span {
    color: rgba(0, 245, 147, 255);
  }

  @media  (max-width: 900px) {
    font-size: 26px;
  }
`;

export const GridLayout = styled.div`

  /* display: grid;
  grid-template-columns: repeat(4, 340px); */
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 80px;

  


  @media  (max-width: 900px) {
    justify-content: center;
    gap: 20px;
  }
`;
