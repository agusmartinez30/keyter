import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #070d17;
  padding: 1rem 0;
  
`;

export const Header = styled.header`
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 1.5rem;
  
`;

export const HomeTitle = styled.h2`
  font-size: 36px;
  color: rgba(0, 245, 147, 255);
  padding: 2rem 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

export const LayoutFlex = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;

  @media  (max-width: 900px) {

    flex-direction: column;
    gap: 20px;
  }
`;

export const FormContainer = styled.form`
  width: 40%;
  height: 100%;
  background-color: #182035;
  padding: 20px;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-family: 'Poppins', sans-serif;
 font-weight: 300;

  @media  (max-width: 900px) {
    width: 100%;
  }

  > label {
    font-size: 19px;
  color: rgba(0, 245, 147, 255);
  font-weight: bolder;
  padding: 10px 0;
  text-align: left;

  }

  > input {
    padding: 12px 22px;
    border-radius: 6px;
    border: none;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
 font-weight: 400;
  }

  > button {
    padding: 12px 22px;
    border-radius: 6px;
    border: none;
    background: #5141b0fe;
    font-family: 'Poppins', sans-serif;
 font-weight: 400;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
  }
  > button:hover{
    background: #6F38C5;
    opacity: 1;
  }
`;

export const ListContainer = styled.section`
  width: 40%;
  background-color: #182035;
  padding: 20px;
  border-radius: 9px;

  @media  (max-width: 900px) {
    width: 100%;
  }
`;

export const GanadorTitle = styled.h2`
  font-size: 32px;
  color: #6F38C5;
  padding: 10px 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
`;

export const ListGanadores = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 480px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  padding: 15px 50px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  /* display: flex;
  justify-content: center; */



 

  > ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
  > ul > li {
    
    width: 250px;
    display: flex;
    gap: 40px;
  
  }
`;

export const GanadorItem = styled.p`
  font-size: 19px;
  color: rgba(0, 245, 147, 255);
  font-weight: bolder;
  padding: 10px 0;
  text-align: left;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;



  > span {
    color: #fff;
    font-weight: lighter;
    font-family: 'Poppins', sans-serif;
  font-weight: 300;
  }
`;


export const Ranking = styled.p`
  font-size: 19px;
  color: #eb3249fe;
  font-weight: bolder;
  padding: 10px 0;
  text-align: left;



  > span {
    color: #fff;
    font-weight: lighter;
  }
`;

export const TextError = styled.p`
  font-size: 16px;
  color: #fff;
  
`;

