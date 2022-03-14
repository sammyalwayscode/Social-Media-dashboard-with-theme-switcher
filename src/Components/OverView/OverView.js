import React from "react";
import styled from "styled-components";
import OverviewCard from "../Cards/OverviewCard";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";

const OverView = () => {
  return (
    <Container>
      <Wrapper>
        <Over>OverView - Today</Over>
        <PostWrapper>
          <OverviewCard
            likeText="Page Views"
            IconType={<BsFacebook color="#4267B2" />}
            nummm="87"
            percent="3"
          />
          <OverviewCard
            likeText="Likes"
            IconType={<BsFacebook color="#4267B2" />}
            nummm="52"
            percent="2"
          />
          <OverviewCard
            likeText="Likes"
            IconType={<BsInstagram color="#E3618D" />}
            nummm="5462"
            percent="2257"
          />
          <OverviewCard
            likeText="Profile Views"
            IconType={<BsInstagram color="#E3618D" />}
            nummm="25k"
            percent="1375"
          />
          <OverviewCard
            likeText="Retweets"
            IconType={<BsTwitter color="#1DA1F2" />}
            nummm="117"
            percent="303"
          />
          <OverviewCard
            likeText="Likes"
            IconType={<BsTwitter color="#1DA1F2" />}
            nummm="507"
            percent="553"
          />
          <OverviewCard
            likeText="Likes"
            IconType={<BsYoutube color="#FF0000" />}
            nummm="107"
            percent="19"
          />
          <OverviewCard
            likeText="Total Views"
            IconType={<BsYoutube color="#FF0000" />}
            nummm="1407"
            percent="12"
          />
        </PostWrapper>
      </Wrapper>
    </Container>
  );
};

export default OverView;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 500ms;
`;

const Over = styled.div`
  font-size: 23px;
  font-weight: bold;
  font-family: poppins;
  color: ${(props) => props.theme.titleColor};
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px 0;
`;

const PostWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
