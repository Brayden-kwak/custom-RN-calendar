import React, {memo} from 'react';
//@ts-ignore
import styled from 'styled-components/native';
import moment from 'moment';
import {screenWidth} from './AnimationPractice';

interface ItemProps {
  item: any;
}

const CoWorkersAgendaItem = (props: ItemProps) => {
  const {item} = props;

  if (typeof item === 'string') {
    return (
      <ListHeaderView>
        {moment().format('YYYY-MM-DD') ===
          moment(item).format('YYYY-MM-DD') && (
          <ListHeaderTodayText>
            {moment(item).format('오늘 ・ M월 D일 ddd요일')}
          </ListHeaderTodayText>
        )}
        {moment().format('YYYY-MM-DD') !==
          moment(item).format('YYYY-MM-DD') && (
          <ListHeaderText>
            {moment(item).format('M월 D일 ddd요일')}
          </ListHeaderText>
        )}
      </ListHeaderView>
    );
  } else {
    return (
      <ListView>
        {/* {item.type !== '발생연차' && ( */}
        <AvatarView>
          <AvatarBoxView>
            <AvatarBoxText>{item.name.slice(1, 3)}</AvatarBoxText>
            {/* 아이콘 자리 -> 텍스트로 대체 */}
            {/* <BusinessTrip
              style={{position: 'absolute', left: 25, top: 25}}
              width={15}
              height={15}
            /> */}
            {/* 아이콘 자리 -> 텍스트로 대체 */}
          </AvatarBoxView>
          <AvatarInfoView>
            <AvatarInnerView>
              <AvatarNameText>{item.name}</AvatarNameText>
              <DividerView />
              <AvatarTypeText>{item.type}</AvatarTypeText>
            </AvatarInnerView>
            <HolidayPeriodText>1일</HolidayPeriodText>
          </AvatarInfoView>
        </AvatarView>
        {/* )} */}
      </ListView>
    );
  }
};

export default memo(CoWorkersAgendaItem);

const ListView = styled.View`
  align-items: flex-start;
  justify-content: center;
  background-color: #fff;
  margin-left: 20px;
  width: ${screenWidth * 0.9}px;
  height: 70px;
  flex: 1;
  bottom: 10px;
`;

const AvatarView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const AvatarBoxView = styled.View`
  width: 40px;
  height: 40px;
  background-color: #936ffa;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`;

const AvatarBoxText = styled.Text`
  color: #fff;
`;

const AvatarInfoView = styled.View`
    width: auto;
    height: 35px
    flex-direction: column;
    margin-left: 15px;
    justify-content: space-between;
`;

const AvatarInnerView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const AvatarNameText = styled.Text`
  color: #1a1818;
  font-size: 16px;
  padding-right: 5px;
`;

const DividerView = styled.View`
  height: 8px;
  width: 2px;
  background-color: #e2e5ea;
`;

const AvatarTypeText = styled.Text`
  color: #1a1818;
  font-size: 16px;
  padding-left: 5px;
`;

const HolidayPeriodText = styled.Text`
  color: #93979f;
  font-size: 12px;
  padding-left: 3px;
`;

const ListHeaderView = styled.View`
  width: ${screenWidth}px;
  background-color: #fff;
  height: 60px;
  padding-top: 10px;
  justify-content: center;
`;

const ListHeaderTodayText = styled.Text`
  width: ${screenWidth}px;
  background-color: #fff;
  height: 45px;
  font-weight: 400;
  font-size: 12px;
  color: #407df1;
  margin-left: 20px;
  padding: 12px 0px 0px 0px;
  justify-content: center;
`;

const ListHeaderText = styled.Text`
  width: ${screenWidth}px;
  background-color: #fff;
  height: 45px;
  font-weight: 400;
  font-size: 12px;
  color: #93979f;
  margin-left: 20px;
  padding: 12px 0px 0px 0px;
  justify-content: center;
`;
