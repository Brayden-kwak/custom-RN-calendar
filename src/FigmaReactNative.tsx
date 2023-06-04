import {View, Text} from 'react-native';
import React from 'react';
//@ts-ignore
import styled from 'styled-components/native';

const FigmaReactNative = () => {
  return (
    <MainView>
      <CommuteView>출근 30분 전 입니다</CommuteView>
      <SectionWrapView>
        <SectionView>
          <RectangleView />
          <DateView>
            <NumberView>
              <SundayText>일</SundayText>
              <MondayText>월</MondayText>
              <TuesdayText>화</TuesdayText>
              <WednesdayText>수</WednesdayText>
              <ThursdayText>목</ThursdayText>
              <FridayText>금</FridayText>
              <SaturdayText>토</SaturdayText>
            </NumberView>
            <NumberView>
              <DummyOneText>26</DummyOneText>
              <DummyTwoText>27</DummyTwoText>
              <DummyThreeText>28</DummyThreeText>
              <Frame353>
                <DummyFourText>1 💎</DummyFourText>
              </Frame353>
              <DummyFiveText>2</DummyFiveText>
              <DummySixText>3 ✈️</DummySixText>
              <DummySevenText>4</DummySevenText>
            </NumberView>
          </DateView>
          <WeeksView>
            <ArrowRightView>
              <ArrowRightView2>
                <IconImageView />
              </ArrowRightView2>
            </ArrowRightView>
            <WeeksSpacerView />
            <DummyEightText>2월 4째주</DummyEightText>
            <WeeksSpacerView />
            <ArrowLeftView>
              <ArrowRightView2>
                <IconImageView />
              </ArrowRightView2>
            </ArrowLeftView>
          </WeeksView>
          <Frame352>
            <DashboardItemView>
              <Frame334>
                <총연차Text>이번주 근무</총연차Text>
                <Frame334Spacer />
                <Frame333>
                  <Frame332>
                    <DummyNineText>30</DummyNineText>
                    <Frame332Spacer />
                    <SundayText>시간</SundayText>
                  </Frame332>
                </Frame333>
              </Frame334>
            </DashboardItemView>
            <Frame352Spacer />
            <DashboardItemView>
              <Frame334>
                <총연차Text>이번주 휴가</총연차Text>
                <Frame334Spacer />
                <Frame333>
                  <Frame332>
                    <DummyNineText>1</DummyNineText>
                    <Frame332Spacer />
                    <SundayText>일</SundayText>
                  </Frame332>
                </Frame333>
              </Frame334>
            </DashboardItemView>
          </Frame352>
        </SectionView>
        <SectionWrapSpacerView />
        <Section02View>
          <Frame165>
            <Frame163>
              <IconWrapView>
                <Ellipse64 />
                <Frame26>
                  <Icon22View>
                    <Rectangle147 />
                    <Rectangle148 />
                    <Rectangle149 />
                    <Rectangle150 />
                    <Rectangle151 />
                    <Rectangle152 />
                    <Rectangle153 />
                    <Rectangle154 />
                    <Rectangle155 />
                  </Icon22View>
                  <Ellipse65 />
                </Frame26>
              </IconWrapView>
              <Frame163Spacer />
              <Frame109>
                <DummyTenText>잔여 연차 I 13일 보유</DummyTenText>
                <Frame109Spacer />
                <DummyApplyText>휴가 신청하기</DummyApplyText>
              </Frame109>
            </Frame163>
            <Frame164>
              <ChevronImageView />
            </Frame164>
          </Frame165>
        </Section02View>
        <SectionWrapSpacerView />
        <WorkerListView>
          <Title2View>
            <DDDText>오늘 부재중/휴가 동료</DDDText>
            <ChevronImageView />
          </Title2View>
          <WorkerListViewSpacer />
          <Group1>
            <ListView>
              <Worker2View>
                <ProfileView>
                  <ProText>규빈</ProText>
                </ProfileView>
                <TTTText>김규빈</TTTText>
                <AAAText>부재중</AAAText>
                <Ellipse67 />
              </Worker2View>
              <ListSpacerView />
              <Worker2View>
                <ProfileView>
                  <ProText>민석</ProText>
                </ProfileView>
                <TTTText>김민석</TTTText>
                <AAAText>부재중</AAAText>
                <Ellipse67 />
              </Worker2View>
              <ListSpacerView />
              <Worker2View>
                <ProfileView>
                  <ProText>주선</ProText>
                </ProfileView>
                <BagText>💼</BagText>
                <TTTText>배주선</TTTText>
                <AAAText>출장</AAAText>
              </Worker2View>
              <ListSpacerView />
              <Worker2View>
                <ProfileView>
                  <ProText>유진</ProText>
                </ProfileView>
                <BagText>💼</BagText>
                <TTTText>정유진</TTTText>
                <AAAText>출장</AAAText>
              </Worker2View>
              <ListSpacerView />
              <Worker2View>
                <ProfileView>
                  <ProText>시언</ProText>
                </ProfileView>
                <BagText>✈️</BagText>
                <TTTText>이시언</TTTText>
                <AAAText>연차</AAAText>
              </Worker2View>
              <ListSpacerView />
              <Worker2View>
                <ProfileView>
                  <ProText>자헌</ProText>
                </ProfileView>
                <BagText>✈️</BagText>
                <TTTText>구자헌</TTTText>
                <AAAText>연차</AAAText>
              </Worker2View>
            </ListView>
            <Frame174 />
          </Group1>
        </WorkerListView>
      </SectionWrapView>
      <PayText>
        <SignView>
          <Frame159Image />
        </SignView>
        <PayTextView>PayText함</PayTextView>
        <NotificationCount>
          <Badge />
          <NumberText>9</NumberText>
        </NotificationCount>
      </PayText>
    </MainView>
  );
};

export default FigmaReactNative;

const MainView = styled.View`
  height: 1179px;
  width: 375px;
  background-color: #2c344f;
`;
const CommuteView = styled.Text`
  text-align: left;
  vertical-align: top;
  font-family: Pretendard;
  font-weight: bold;
  font-size: 28px;
  letter-spacing: -0.20000000298023224%;
  line-height: 28px;
  color: #ffffff;
`;
const SectionWrapView = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
`;

const SectionWrapSpacerView = styled.View`
  height: 16px;
`;

const SectionView = styled.View`
  height: 239px;
  width: 343px;
`;
const RectangleView = styled.View`
  border-radius: 16px;
  height: 239px;
  width: 343px;
  background-color: #ffffff;
`;
const DateView = styled.View`
  height: 50px;
  width: 294px;
`;
const NumberView = styled.View`
  height: 18px;
  width: 294px;
`;
const SundayText = styled.Text`
  max-width: 30px;
  text-align: center;
  vertical-align: top;
  font-family: Pretendard;
  font-weight: regular;
  font-size: 12px;
  letter-spacing: -0.20000000298023224%;
  line-height: 12%;
  color: #ff4d4d;
`;
const MondayText = styled.Text`
  max-width: 30px;
  text-align: center;
  vertical-align: top;
  font-family: Pretendard;
  font-weight: regular;
  font-size: 12px;
  letter-spacing: -0.24px;
  line-height: auto;
  color: #92969f;
`;
const TuesdayText = styled.Text`
  max-width: 30px;
  text-align: center;
  vertical-align: top;
  font-family: Pretendard;
  font-weight: regular;
  font-size: 12px;
  letter-spacing: -0.20000000298023224%;
  line-height: 12%;
  color: #92969f;
`;
const WednesdayText = styled.Text`
  max-width: 30px;
  text-align: center;
  vertical-align: top;
  font-family: Pretendard;
  font-weight: regular;
  font-size: 12px;
  letter-spacing: -0.20000000298023224%;
  line-height: 12%;
  color: #92969f;
`;
const ThursdayText = styled.Text`
  max-width: 30px;
  text-align: center;
  vertical-align: top;
  font-family: Pretendard;
  font-weight: regular;
  font-size: 12px;
  letter-spacing: -0.20000000298023224%;
  line-height: 12%;
  color: #92969f;
`;
const FridayText = styled.Text`
  max-width: 30px;
  text-align: center;
  vertical-align: top;
  font-family: Pretendard;
  font-weight: regular;
  font-size: 12px;
  letter-spacing: -0.20000000298023224%;
  line-height: 12%;
  color: #92969f;
`;
const SaturdayText = styled.Text`
  max-width: 30px;
  text-align: center;
  vertical-align: top;
  font-family: Pretendard;
  font-weight: regular;
  font-size: 12px;
  letter-spacing: -0.20000000298023224%;
  line-height: 12%;
  color: #407df1;
`;
const DummyOneText = styled.Text`
  max-width: 30px;
  text-align: center;
  vertical-align: top;
  font-family: Pretendard;
  font-weight: medium;
  font-size: 12px;
  letter-spacing: -0.20000000298023224%;
  line-height: 12%;
  color: #ff4d4d;
`;
const DummyTwoText = styled.Text`
  max-width: 30px;
  text-align: center;
  vertical-align: top;
  font-family: Pretendard;
  font-weight: medium;
  font-size: 12px;
  letter-spacing: -0.20000000298023224%;
  line-height: 12%;
  color: #1a1818;
`;
const DummyThreeText = styled.Text`
  max-width: 30px;
  text-align: center;
  vertical-align: top;
  font-family: Pretendard;
  font-weight: medium;
  font-size: 12px;
  letter-spacing: -0.20000000298023224%;
  line-height: 12%;
  color: #1a1818;
`;
const Frame353 = styled.View`
  border-radius: 30px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  padding: 8px 10px;
  background-color: #2c344f;
`;

const DummyFourText = styled.Text`
  text-align: center;
  vertical-align: top;
  font-family: Pretendard;
  font-weight: bold;
  font-size: 12px;
  letter-spacing: -0.24px;
  line-height: auto;
  color: #ffffff;
`;
const DummyFiveText = styled.Text`
  max-width: 30px;
  text-align: center;
  vertical-align: top;
  font-family: Pretendard;
  font-weight: medium;
  font-size: 12px;
  letter-spacing: -0.20000000298023224%;
  line-height: 12%;
  color: #1a1818;
`;
const DummySixText = styled.Text`
  max-width: 30px;
  text-align: center;
  vertical-align: top;
  font-family: Pretendard;
  font-weight: medium;
  font-size: 12px;
  letter-spacing: -0.20000000298023224%;
  line-height: 12%;
  color: #1a1818;
`;
const DummySevenText = styled.Text`
  max-width: 30px;
  text-align: center;
  vertical-align: top;
  font-family: Pretendard;
  font-weight: medium;
  font-size: 12px;
  letter-spacing: -0.20000000298023224%;
  line-height: 12%;
  color: #407df1;
`;
const WeeksView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

const WeeksSpacerView = styled.View`
  width: 16px;
`;

const ArrowRightView = styled.View`
  transform: rotate(-180deg);
  height: 24px;
  width: 24px;
`;
const ArrowRightView2 = styled.View`
  height: 10px;
  width: 10px;
`;
const IconImageView = styled.View`
  transform: rotate(90deg);
  height: 4px;
  width: 7px;
`;
const DummyEightText = styled.Text`
  text-align: center;
  vertical-align: middle;
  font-family: Pretendard;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: -0.20000000298023224%;
  line-height: 14%;
  color: #6b6e77;
`;
const ArrowLeftView = styled.View`
  transform: rotate(-180deg);
  height: 24px;
  width: 24px;
`;
const Frame352 = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
`;

const Frame352Spacer = styled.View`
  width: 11px;
`;

const DashboardItemView = styled.View`
  border-radius: 16px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  padding: 16px;
  background-color: #f4f6fb;
`;

const DashboardItemViewSpacer = styled.View`
  width: 16px;
`;

const Frame334 = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
`;

const Frame334Spacer = styled.View`
  height: 8px;
`;

const 총연차Text = styled.Text`
  opacity: 0.6000000238418579;
  text-align: left;
  vertical-align: top;
  font-family: Pretendard;
  font-weight: regular;
  font-size: 12px;
  letter-spacing: -0.20000000298023224%;
  line-height: 12%;
  color: #6b6e77;
`;
const Frame333 = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;
const Frame332 = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  flex: 1;
`;

const Frame332Spacer = styled.View`
  width: 4px;
`;

const DummyNineText = styled.Text`
  text-align: right;
  vertical-align: bottom;
  font-family: Pretendard;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: -0.2px;
  line-height: 22px;
  color: #1a1818;
`;
const Section02View = styled.View`
  border-radius: 16px;
  box-shadow: 10px 10px 50px rgba(64, 125, 241, 0.2);
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  padding: 24px;
  background-color: #36498a;
`;

const Section02ViewSpacer = styled.View`
  height: 10px;
`;

const Frame165 = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;
const Frame163 = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

const Frame163Spacer = styled.View`
  width: 16px;
`;

const IconWrapView = styled.View`
  height: 40px;
  width: 40px;
`;
const Ellipse64 = styled.View`
  height: 40px;
  width: 40px;
`;
const Frame26 = styled.View`
  height: 24px;
  width: 26px;
`;
const Icon22View = styled.View`
  height: 18px;
  width: 21px;
`;
const Rectangle147 = styled.View`
  border-radius: 0px 0px 2.640001058578491px 2.640001058578491px;
  height: 13px;
  width: 21px;
  background-color: #bed0f3;
`;
const Rectangle148 = styled.View`
  border-radius: 2.640001058578491px 2.640001058578491px 0px 0px;
  height: 4px;
  width: 21px;
  background-color: #407df1;
`;
const Rectangle149 = styled.View`
  border-radius: 1.3200005292892456px;
  height: 3px;
  width: 2px;
  background-color: #bfd1f3;
`;
const Rectangle150 = styled.View`
  border-radius: 1.3200005292892456px;
  height: 3px;
  width: 2px;
  background-color: #bfd1f3;
`;
const Rectangle151 = styled.View`
  border-radius: 0.6600002646446228px;
  height: 2px;
  width: 3px;
  background-color: #ffffff;
`;
const Rectangle152 = styled.View`
  border-radius: 0.6600002646446228px;
  height: 2px;
  width: 3px;
  background-color: #ffffff;
`;
const Rectangle153 = styled.View`
  border-radius: 0.6600002646446228px;
  height: 2px;
  width: 3px;
  background-color: #ffffff;
`;
const Rectangle154 = styled.View`
  border-radius: 0.6600002646446228px;
  height: 2px;
  width: 3px;
  background-color: #ffffff;
`;
const Rectangle155 = styled.View`
  border-radius: 0.6600002646446228px;
  height: 2px;
  width: 3px;
  background-color: #ffffff;
`;
const Ellipse65 = styled.View`
  height: 11px;
  width: 11px;
`;
const Frame109 = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
`;

const Frame109Spacer = styled.View`
  height: 8px;
`;

const DummyTenText = styled.Text`
  text-align: left;
  vertical-align: top;
  font-family: Pretendard;
  font-weight: regular;
  font-size: 12px;
  letter-spacing: -0.20000000298023224%;
  line-height: 12%;
`;
const DummyApplyText = styled.Text`
  text-align: center;
  vertical-align: top;
  font-family: Pretendard;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: -0.20000000298023224%;
  line-height: 16%;
  color: #ffffff;
`;
const Frame164 = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;
const ChevronImageView = styled.View`
  opacity: 0.6000000238418579;
  height: 20px;
  width: 20px;
  background-color: #f4f6fb;
`;
const WorkerListView = styled.View`
  border-radius: 16px;
  box-shadow: 10px 10px 50px rgba(64, 125, 241, 0.2);
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  padding: 24px;
  background-color: #363f5e;
`;

const WorkerListViewSpacer = styled.View`
  height: 24px;
`;

const Title2View = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;
const DDDText = styled.Text`
  max-width: 150px;
  text-align: left;
  vertical-align: top;
  font-family: Pretendard;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: -0.20000000298023224%;
  line-height: 16%;
  color: #ffffff;
`;
const Group1 = styled.View`
  height: 85px;
  width: 319px;
`;
const ListView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
`;

const ListSpacerView = styled.View`
  width: 24px;
`;

const Worker2View = styled.View`
  height: 84px;
  width: 40px;
`;
const ProfileView = styled.View`
  box-shadow: 5px 5px 10px rgba(64, 125, 241, 0.25);
  height: 40px;
  width: 40px;
  background-color: #ffffff;
`;
const ProText = styled.Text`
  text-align: center;
  vertical-align: top;
  font-family: Pretendard;
  font-weight: regular;
  font-size: 14px;
  line-height: 12%;
  color: #ffffff;
`;
const TTTText = styled.Text`
  text-align: center;
  vertical-align: top;
  font-family: Pretendard;
  font-weight: medium;
  font-size: 12px;
  letter-spacing: -0.20000000298023224%;
  line-height: 12%;
  color: #ffffff;
`;
const AAAText = styled.Text`
  opacity: 0.5;
  text-align: center;
  vertical-align: top;
  font-family: Pretendard;
  font-weight: regular;
  font-size: 12px;
  letter-spacing: -0.20000000298023224%;
  line-height: 12%;
  color: #ffffff;
`;
const Ellipse67 = styled.View`
  height: 10px;
  width: 10px;
`;
const BagText = styled.Text`
  text-align: center;
  vertical-align: top;
  font-family: Pretendard;
  font-weight: regular;
  font-size: 14px;
  line-height: 12%;
  color: #ffffff;
`;
const Frame174 = styled.View`
  height: 85px;
  width: 78px;
  background-color: ;
`;
const PayText = styled.View`
  height: 40px;
  width: 32px;
`;
const SignView = styled.View`
  height: 24px;
  width: 24px;
`;
const Frame159Image = styled.View`
  height: 20px;
  width: 20px;
`;
const PayTextView = styled.Text`
  opacity: 0.6000000238418579;
  text-align: left;
  vertical-align: top;
  font-family: Pretendard;
  font-weight: medium;
  font-size: 12px;
  letter-spacing: -0.20000000298023224%;
  line-height: 12%;
  color: #ffffff;
`;
const NotificationCount = styled.View`
  height: 20px;
  width: 20px;
  background-color: #ffffff;
`;
const Badge = styled.View`
  border-radius: 100px;
  height: 16px;
  width: 16px;
  background-color: #ff4d4d;
  border: 0px solid #969696;
`;
const NumberText = styled.Text`
  max-width: 14px;
  text-align: center;
  vertical-align: top;
  font-family: Pretendard;
  font-weight: regular;
  font-size: 10px;
  line-height: 10px;
  color: #ffffff;
`;
