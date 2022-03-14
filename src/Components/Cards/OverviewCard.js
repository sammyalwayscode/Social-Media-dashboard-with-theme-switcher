import React from "react";
import styled from "styled-components";

const OverviewCard = (props) => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Txt>{props.likeText}</Txt>
          {props.IconType}
        </Top>
        <Buttom>
          <Numm>{props.nummm}</Numm>
          <Cent>{props.percent}%</Cent>
        </Buttom>
      </Wrapper>
    </Container>
  );
};

export default OverviewCard;

const Container = styled.div`
  height: 80px;
  width: 220px;
  background-color: ${(props) => props.theme.cardColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  margin-bottom: 20px;
  border-radius: 4px;
`;
const Wrapper = styled.div`
  width: 85%;
  height: 80%;
  /* background-color: aliceblue; */
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Txt = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #bbb;
`;
const Buttom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Numm = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: ${(props) => props.theme.titleColor};
`;
const Cent = styled.div`
  font-size: 10px;
  color: green;
  font-weight: 600;
`;
