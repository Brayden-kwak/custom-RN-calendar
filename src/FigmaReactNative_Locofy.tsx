import * as React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
// import {LinearGradient} from 'expo-linear-gradient';

/* fonts */
export const FontFamily = {
  bodySmall500: 'Pretendard_medium',
  bodySmall400: 'Pretendard_regular',
  titleLarge: 'Pretendard_bold',
  pretendardLight: 'Pretendard_light',
};
/* font sizes */
export const FontSize = {
  size_3xs: 10,
  bodySmall400_size: 12,
  titleLarge_size: 18,
  titleSmall_size: 14,
  titleMedium_size: 16,
  size_xl: 20,
  headlineMedium_size: 28,
};
/* Colors */
export const Color = {
  darkslategray_100: '#363f5e',
  darkslategray_200: '#2c344f',
  systemColoursLabelColourTertiaryLight: 'rgba(60, 60, 67, 0.3)',
  white: '#fff',
  systemColoursDefaultColorsSystemWhiteBlackDark: '#000',
  darkgray_100: '#999',
  gray500: '#93979f',
  gainsboro_100: '#e2e5ea',
  gainsboro_200: '#e3e3e3',
  gray400: '#b1b5bd',
  gray700: '#1a1818',
  gray_100: 'rgba(255, 255, 255, 0.3)',
  gray_200: 'rgba(255, 255, 255, 0.7)',
  gray100: '#f4f6fb',
  primaryRed: '#ff4e4e',
  gray600: '#6b6e77',
  primaryBlue: '#407df1',
};
/* Paddings */
export const Padding = {
  p_6xs: 7,
  p_10xs: 3,
  p_5xs: 8,
  p_9xs: 4,
  p_5xl: 24,
  p_base: 16,
};
/* border radiuses */
export const Border = {
  br_81xl: 100,
  br_12xs_5: 1,
  br_12xs: 1,
  br_11xs: 2,
  br_3xs: 10,
  br_xl: 20,
  br_xs: 12,
  br_base: 16,
};

const FigmaReactNAtive_Locofy = () => {
  return (
    <View style={styles.iphone13Mini42}>
      <View style={styles.contentsBody}>
        <Text style={[styles.text, styles.textTypo6]}>출근 30분 전 입니다</Text>
        <View style={[styles.sectionWrap, styles.textPosition2]}>
          <View style={styles.section}>
            <View style={styles.sectionChild} />
            <View style={[styles.date, styles.dateLayout]}>
              <View style={[styles.number, styles.dateLayout]}>
                <Text style={styles.text1}>일</Text>
                <Image
                  style={[styles.numberChild, styles.numberLayout]}
                  resizeMode="cover"
                  source={require('../assets/ellipse-55.png')}
                />
                <Text style={styles.text2}>월</Text>
                <Text style={[styles.text3, styles.text3Position]}>화</Text>
                <Text style={styles.text4}>수</Text>
                <Text style={styles.text5}>목</Text>
                <Text style={styles.text6}>금</Text>
                <Text style={[styles.text7, styles.textClr]}>토</Text>
              </View>
              <View style={styles.number1}>
                <Text style={[styles.text8, styles.textTypo4]}>26</Text>
                <Image
                  style={[styles.numberItem, styles.text3Position]}
                  resizeMode="cover"
                  source={require('../assets/ellipse-551.png')}
                />
                <Text style={[styles.text9, styles.textTypo4]}>27</Text>
                <Text style={styles.text10}>28</Text>
                <View style={styles.wrapper}>
                  <Text style={[styles.text11, styles.textTypo6]}>1 💎</Text>
                </View>
                <Text style={[styles.text12, styles.textTypo4]}>2</Text>
                <Text style={[styles.text13, styles.textTypo4]}>3 ✈️</Text>
                <Text style={[styles.text14, styles.textTypo4]}>4</Text>
              </View>
            </View>
            <View style={styles.weeks}>
              <Image
                style={styles.ic24arrowIconLayout}
                resizeMode="cover"
                source={require('../assets/ic24arrowright.png')}
              />
              <Text style={[styles.text15, styles.textTypo3]}>2월 4째주</Text>
              <Image
                style={[styles.ic24arrowLeftIcon, styles.ic24arrowIconLayout]}
                resizeMode="cover"
                source={require('../assets/ic24arrowleft.png')}
              />
            </View>
            <View style={styles.dashboarditemParent}>
              <View style={styles.dashboarditemLayout}>
                <View>
                  <Text style={styles.text16}>이번주 근무</Text>
                  <View style={styles.frameParent}>
                    <View style={styles.group}>
                      <Text style={[styles.text17, styles.textTypo6]}>30</Text>
                      <Text style={[styles.text18, styles.textTypo4]}>
                        시간
                      </Text>
                    </View>
                    <Text style={styles.text19}>(120시간)</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.dashboarditem1, styles.dashboarditemLayout]}>
                <View>
                  <Text style={styles.text16}>이번주 휴가</Text>
                  <View style={styles.frameParent}>
                    <View style={styles.group}>
                      <Text style={[styles.text17, styles.textTypo6]}>1</Text>
                      <Text style={[styles.text18, styles.textTypo4]}>일</Text>
                    </View>
                    <Text style={styles.text19}>(120시간)</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.section1, styles.section1SpaceBlock]}>
            <View style={[styles.frameContainer, styles.titleFlexBox]}>
              <View style={styles.iconwrapParent}>
                <Image
                  style={styles.iconwrap}
                  resizeMode="cover"
                  source={require('../assets/iconwrap.png')}
                />
                <View style={styles.i13Parent}>
                  <Text style={styles.i13Container}>
                    <Text style={styles.text24}>잔여 연차</Text>
                    <Text style={styles.i}>{` I `}</Text>
                    <Text style={styles.text24}>13일 보유</Text>
                  </Text>
                  <Text style={[styles.text26, styles.textTypo2]}>
                    휴가 신청하기
                  </Text>
                </View>
                <Text style={styles.i13Container1}>
                  <Text style={styles.text27}>잔여 연차</Text>
                  <Text style={styles.i1}>{` I `}</Text>
                  <Text style={styles.text27}>13개 보유</Text>
                </Text>
              </View>
              <View style={styles.frameChild} />
              <View style={styles.iconwrapParent}>
                <View style={[styles.frameWrapper, styles.frameSpaceBlock]}>
                  <View>
                    <Text style={[styles.text29, styles.textLayout]}>
                      연차 일반 휴가
                    </Text>
                    <Text style={styles.i13Container2}>
                      <Text style={styles.text27}>잔여 연차</Text>
                      <Text style={styles.i1}>{` I `}</Text>
                      <Text style={styles.text27}>13개 보유</Text>
                    </Text>
                    <Text style={[styles.text32, styles.textLayout]}>
                      휴가 신청하기
                    </Text>
                  </View>
                </View>
                <Image
                  style={[
                    styles.ic24chevronRightIcon,
                    styles.notificationCountLayout,
                  ]}
                  resizeMode="cover"
                  source={require('../assets/ic24chevronright.png')}
                />
              </View>
            </View>
          </View>
          <View style={[styles.workerlist, styles.section1SpaceBlock]}>
            <View style={[styles.title, styles.titleFlexBox]}>
              <Text style={[styles.text33, styles.textTypo2]}>
                오늘 부재중/휴가 동료
              </Text>
              <Image
                style={[
                  styles.ic24chevronRightIcon,
                  styles.notificationCountLayout,
                ]}
                resizeMode="cover"
                source={require('../assets/ic24chevronright.png')}
              />
            </View>
            <View style={[styles.view, styles.viewLayout]}>
              <View style={[styles.child, styles.childLayout1]} />
              <Text style={styles.text34}>오늘은 휴가중인 동료가 없어요</Text>
            </View>
            <View style={styles.listParent}>
              <View style={[styles.list, styles.listPosition]}>
                <View style={styles.worker}>
                  <View style={styles.profile}>
                    <Image
                      style={[styles.vectorIcon, styles.iconLayout2]}
                      resizeMode="cover"
                      source={require('../assets/vector.png')}
                    />
                    <Text style={[styles.text35, styles.badgePosition]}>
                      규빈
                    </Text>
                  </View>
                  <Text style={[styles.text36, styles.textPosition1]}>💼</Text>
                  <Text style={[styles.text37, styles.textTypo4]}>김규빈</Text>
                  <Text style={[styles.text38, styles.textTypo1]}>부재중</Text>
                  <Image
                    style={styles.workerPosition}
                    resizeMode="cover"
                    source={require('../assets/ellipse-67.png')}
                  />
                </View>
                <View style={styles.worker1}>
                  <View style={styles.profile}>
                    <Image
                      style={[styles.vectorIcon, styles.iconLayout2]}
                      resizeMode="cover"
                      source={require('../assets/vector1.png')}
                    />
                    <Text style={[styles.text35, styles.badgePosition]}>
                      민석
                    </Text>
                  </View>
                  <Text style={[styles.text36, styles.textPosition1]}>💼</Text>
                  <Text style={[styles.text37, styles.textTypo4]}>김민석</Text>
                  <Text style={[styles.text38, styles.textTypo1]}>부재중</Text>
                  <Image
                    style={styles.workerPosition}
                    resizeMode="cover"
                    source={require('../assets/ellipse-67.png')}
                  />
                </View>
                <View style={styles.worker1}>
                  <View style={styles.profile}>
                    <Image
                      style={[styles.vectorIcon, styles.iconLayout2]}
                      resizeMode="cover"
                      source={require('../assets/vector2.png')}
                    />
                    <Text style={[styles.text35, styles.badgePosition]}>
                      주선
                    </Text>
                  </View>
                  <Text style={styles.textPosition1}>💼</Text>
                  <Text style={[styles.text37, styles.textTypo4]}>배주선</Text>
                  <Text style={[styles.text46, styles.textTypo1]}>출장</Text>
                  <Image
                    style={[styles.workerInner, styles.workerPosition]}
                    resizeMode="cover"
                    source={require('../assets/ellipse-67.png')}
                  />
                </View>
                <View style={styles.worker1}>
                  <View style={styles.profile}>
                    <Image
                      style={[styles.vectorIcon, styles.iconLayout2]}
                      resizeMode="cover"
                      source={require('../assets/vector3.png')}
                    />
                    <Text style={[styles.text35, styles.badgePosition]}>
                      유진
                    </Text>
                  </View>
                  <Text style={styles.textPosition1}>💼</Text>
                  <Text style={[styles.text37, styles.textTypo4]}>정유진</Text>
                  <Text style={[styles.text46, styles.textTypo1]}>출장</Text>
                  <Image
                    style={[styles.workerInner, styles.workerPosition]}
                    resizeMode="cover"
                    source={require('../assets/ellipse-67.png')}
                  />
                </View>
                <View style={styles.worker1}>
                  <View style={styles.profile}>
                    <Image
                      style={[styles.vectorIcon, styles.iconLayout2]}
                      resizeMode="cover"
                      source={require('../assets/vector4.png')}
                    />
                    <Text style={[styles.text35, styles.badgePosition]}>
                      시언
                    </Text>
                  </View>
                  <Text style={styles.textPosition1}>✈️</Text>
                  <Text style={[styles.text37, styles.textTypo4]}>이시언</Text>
                  <Text style={[styles.text46, styles.textTypo1]}>연차</Text>
                  <Image
                    style={[styles.workerInner, styles.workerPosition]}
                    resizeMode="cover"
                    source={require('../assets/ellipse-67.png')}
                  />
                </View>
                <View style={styles.worker1}>
                  <View style={styles.profile}>
                    <Image
                      style={[styles.vectorIcon, styles.iconLayout2]}
                      resizeMode="cover"
                      source={require('../assets/vector5.png')}
                    />
                    <Text style={[styles.text35, styles.badgePosition]}>
                      자헌
                    </Text>
                  </View>
                  <Text style={styles.textPosition1}>✈️</Text>
                  <Text style={[styles.text37, styles.textTypo4]}>구자헌</Text>
                  <Text style={[styles.text46, styles.textTypo1]}>연차</Text>
                  <Image
                    style={[styles.workerInner, styles.workerPosition]}
                    resizeMode="cover"
                    source={require('../assets/ellipse-67.png')}
                  />
                </View>
              </View>
              {/* <LinearGradient
                style={styles.groupChild}
                locations={[0.09, 0.18, 0.3, 0.43]}
                colors={[
                  '#363f5e',
                  'rgba(55, 64, 95, 0.9)',
                  'rgba(55, 64, 95, 0.5)',
                  'rgba(55, 64, 95, 0)',
                ]}
              /> */}
            </View>
          </View>
        </View>
        <View style={styles.view1}>
          <Image
            style={[styles.ic24signstampIcon, styles.ic24arrowIconLayout]}
            resizeMode="cover"
            source={require('../assets/ic24signstamp.png')}
          />
          <Text style={styles.text59}>결재함</Text>
          <View
            style={[styles.notificationCount, styles.notificationCountLayout]}>
            <View style={[styles.badge, styles.badgePosition]} />
            <Text style={[styles.number2, styles.label2Typo]}>9</Text>
          </View>
        </View>
      </View>
      <View style={[styles.bottom, styles.bottomShadowBox]}>
        <View style={styles.bg}>
          <View style={[styles.bgChild, styles.listPosition]} />
          <View style={[styles.resizeIndicator, styles.indicatorPosition]} />
        </View>
        <View style={[styles.btnMain, styles.btnLayout]}>
          <View style={[styles.btnMainChild, styles.btnLayout]} />
          <Text style={[styles.text60, styles.textTypo]}>출근하기</Text>
        </View>
        <View style={[styles.parent2, styles.view2Position]}>
          <Text style={[styles.text61, styles.textTypo]}>0분</Text>
          <View style={[styles.frame, styles.frameSpaceBlock]}>
            <Text style={styles.text62}>근무 전</Text>
          </View>
        </View>
        <Text style={[styles.text63, styles.view2Position]}>
          기준: 9:00~18:00 (8시간 근무)
        </Text>
        <View style={[styles.view2, styles.view2Position]}>
          <Text style={[styles.text64, styles.textPosition]}>-</Text>
          <View style={[styles.item, styles.itemLayout]} />
          <View style={[styles.inner, styles.itemLayout]} />
          <Text style={[styles.text65, styles.textPosition]}>-</Text>
          <View style={[styles.rectangleView, styles.itemLayout]} />
          <Text style={[styles.text66, styles.textPosition]}>-</Text>
          <Text style={styles.text67}>+2시간 08분</Text>
          <View style={[styles.child1, styles.childLayout]} />
          <View style={[styles.child2, styles.childLayout]} />
          <View style={[styles.child3, styles.childLayout]} />
          <View style={[styles.child4, styles.childLayout]} />
          <View style={[styles.child5, styles.childLayout]} />
        </View>
      </View>
      <View style={styles.tabBarIphone}>
        <View style={styles.icon18ptLabelIphoneParent}>
          <View style={styles.icon18ptLabelIphone}>
            <Image
              style={styles.iconLayout1}
              resizeMode="cover"
              source={require('../assets/icontabbar01home.png')}
            />
            <Text style={[styles.label, styles.labelTypo]}>홈</Text>
          </View>
          <View style={styles.icon18ptLabelIphone}>
            <Image
              style={styles.iconLayout1}
              resizeMode="cover"
              source={require('../assets/icontabbar02timecard.png')}
            />
            <Text style={[styles.label1, styles.labelTypo]}>근태</Text>
          </View>
          <View style={styles.icon18ptLabelIphone}>
            <View style={styles.iconParent}>
              <View style={[styles.icon, styles.iconLayout1]}>
                <View style={[styles.icon, styles.iconLayout1]}>
                  <View style={[styles.icon, styles.iconLayout1]}>
                    <View style={styles.icon1}>
                      <View style={styles.iconChild} />
                      <Image
                        style={[styles.pathStrokeIcon, styles.iconLayout2]}
                        resizeMode="cover"
                        source={require('../assets/path-stroke.png')}
                      />
                      <View style={styles.iconItem} />
                      <View style={[styles.iconInner, styles.iconLayout]} />
                      <View style={[styles.iconChild1, styles.iconLayout]} />
                      <View
                        style={[styles.iconChild2, styles.iconChildLayout1]}
                      />
                      <View
                        style={[styles.iconChild3, styles.iconChildLayout1]}
                      />
                      <View
                        style={[styles.iconChild4, styles.iconChildLayout1]}
                      />
                      <View
                        style={[styles.iconChild5, styles.iconChildLayout]}
                      />
                      <View
                        style={[styles.iconChild6, styles.iconChildLayout]}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <Text style={[styles.label2, styles.label2Typo]}>휴가</Text>
            </View>
          </View>
          <View style={styles.icon18ptLabelIphone}>
            <Image
              style={styles.iconLayout1}
              resizeMode="cover"
              source={require('../assets/icontabbar04salary.png')}
            />
            <Text style={[styles.label1, styles.labelTypo]}>급여</Text>
          </View>
          <View style={styles.icon18ptLabelIphone}>
            <Image
              style={styles.iconLayout1}
              resizeMode="cover"
              source={require('../assets/icontabbar05all.png')}
            />
            <Text style={[styles.label1, styles.labelTypo]}>전체</Text>
          </View>
        </View>
        <View style={styles.homeIndicatorIphone}>
          <View style={[styles.homeIndicator, styles.indicatorPosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo6: {
    fontFamily: FontFamily.titleLarge,
    fontWeight: '700',
  },
  textPosition2: {
    left: 16,
    position: 'absolute',
  },
  dateLayout: {
    width: 294,
    position: 'absolute',
  },
  numberLayout: {
    height: 30,
    display: 'none',
  },
  text3Position: {
    left: 88,
    width: 30,
    top: 0,
    position: 'absolute',
  },
  textClr: {
    color: Color.primaryBlue,
    left: 264,
  },
  textTypo4: {
    fontFamily: FontFamily.bodySmall500,
    fontWeight: '500',
  },
  textTypo3: {
    fontSize: FontSize.titleSmall_size,
    textAlign: 'center',
  },
  ic24arrowIconLayout: {
    height: 24,
    width: 24,
  },
  dashboarditemLayout: {
    padding: Padding.p_base,
    width: 142,
    backgroundColor: Color.gray100,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: Border.br_base,
  },
  section1SpaceBlock: {
    marginTop: 16,
    padding: Padding.p_5xl,
    borderRadius: Border.br_base,
    width: 343,
    overflow: 'hidden',
  },
  titleFlexBox: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textTypo2: {
    fontSize: FontSize.titleMedium_size,
    fontFamily: FontFamily.titleLarge,
    fontWeight: '700',
  },
  frameSpaceBlock: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_xl,
    flexDirection: 'row',
  },
  textLayout: {
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'center',
    color: Color.white,
  },
  notificationCountLayout: {
    height: 20,
    width: 20,
  },
  viewLayout: {
    height: 60,
    width: 295,
  },
  childLayout1: {
    borderRadius: Border.br_xs,
    top: 0,
  },
  listPosition: {
    top: 1,
    left: 0,
    position: 'absolute',
  },
  iconLayout2: {
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  badgePosition: {
    top: '50%',
    position: 'absolute',
  },
  textPosition1: {
    left: 26,
    top: 28,
    fontSize: FontSize.titleSmall_size,
    textAlign: 'center',
    fontFamily: FontFamily.bodySmall400,
    lineHeight: 12,
    color: Color.white,
    position: 'absolute',
  },
  textTypo1: {
    top: 68,
    opacity: 0.5,
    textAlign: 'center',
    fontFamily: FontFamily.bodySmall400,
    lineHeight: 12,
    fontSize: FontSize.bodySmall400_size,
    color: Color.white,
    position: 'absolute',
  },
  workerPosition: {
    height: 10,
    width: 10,
    left: 30,
    top: 30,
    position: 'absolute',
  },
  label2Typo: {
    fontSize: FontSize.size_3xs,
    top: '50%',
    textAlign: 'center',
    position: 'absolute',
  },
  bottomShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -10,
    },
    left: 0,
  },
  indicatorPosition: {
    height: 5,
    left: '50%',
    position: 'absolute',
  },
  btnLayout: {
    height: 56,
    width: 120,
    position: 'absolute',
  },
  textTypo: {
    lineHeight: 18,
    fontSize: FontSize.titleLarge_size,
    fontFamily: FontFamily.titleLarge,
    fontWeight: '700',
  },
  view2Position: {
    left: 20,
    position: 'absolute',
  },
  textPosition: {
    top: 14,
    fontFamily: FontFamily.bodySmall400,
    lineHeight: 12,
    fontSize: FontSize.bodySmall400_size,
    position: 'absolute',
  },
  itemLayout: {
    height: 8,
    backgroundColor: Color.gainsboro_100,
    top: 16,
    width: 1,
    position: 'absolute',
  },
  childLayout: {
    borderRadius: Border.br_3xs,
    height: 10,
    top: 0,
    position: 'absolute',
  },
  labelTypo: {
    marginTop: 6,
    fontSize: FontSize.size_3xs,
    width: 24,
    fontFamily: FontFamily.bodySmall500,
    fontWeight: '500',
    letterSpacing: 0,
    textAlign: 'center',
  },
  iconLayout1: {
    height: 22,
    width: 22,
  },
  iconLayout: {
    width: 2,
    borderRadius: Border.br_12xs,
    height: 4,
    backgroundColor: Color.gainsboro_200,
    top: -1,
    position: 'absolute',
  },
  iconChildLayout1: {
    height: 2,
    borderRadius: Border.br_12xs_5,
    width: 2,
    top: 7,
    display: 'none',
    backgroundColor: Color.white,
    position: 'absolute',
  },
  iconChildLayout: {
    top: 11,
    height: 2,
    borderRadius: Border.br_12xs_5,
    width: 2,
    display: 'none',
    backgroundColor: Color.white,
    position: 'absolute',
  },
  text: {
    top: 93,
    fontSize: FontSize.headlineMedium_size,
    letterSpacing: -0.1,
    lineHeight: 28,
    textAlign: 'left',
    color: Color.white,
    left: 16,
    position: 'absolute',
  },
  sectionChild: {
    backgroundColor: Color.white,
    borderRadius: Border.br_base,
    height: 239,
    width: 343,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  text1: {
    width: 30,
    textAlign: 'center',
    color: Color.primaryRed,
    fontFamily: FontFamily.bodySmall400,
    lineHeight: 12,
    fontSize: FontSize.bodySmall400_size,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  numberChild: {
    left: 39,
    display: 'none',
    top: -8,
    position: 'absolute',
    width: 30,
  },
  text2: {
    color: Color.gray500,
    letterSpacing: 0,
    left: 44,
    width: 30,
    textAlign: 'center',
    fontFamily: FontFamily.bodySmall400,
    fontSize: FontSize.bodySmall400_size,
    top: 0,
    position: 'absolute',
  },
  text3: {
    color: Color.gray500,
    textAlign: 'center',
    fontFamily: FontFamily.bodySmall400,
    lineHeight: 12,
    fontSize: FontSize.bodySmall400_size,
  },
  text4: {
    left: 132,
    color: Color.gray500,
    width: 30,
    textAlign: 'center',
    fontFamily: FontFamily.bodySmall400,
    lineHeight: 12,
    fontSize: FontSize.bodySmall400_size,
    top: 0,
    position: 'absolute',
  },
  text5: {
    left: 176,
    color: Color.gray500,
    width: 30,
    textAlign: 'center',
    fontFamily: FontFamily.bodySmall400,
    lineHeight: 12,
    fontSize: FontSize.bodySmall400_size,
    top: 0,
    position: 'absolute',
  },
  text6: {
    left: 220,
    color: Color.gray500,
    width: 30,
    textAlign: 'center',
    fontFamily: FontFamily.bodySmall400,
    lineHeight: 12,
    fontSize: FontSize.bodySmall400_size,
    top: 0,
    position: 'absolute',
  },
  text7: {
    width: 30,
    textAlign: 'center',
    fontFamily: FontFamily.bodySmall400,
    lineHeight: 12,
    fontSize: FontSize.bodySmall400_size,
    top: 0,
    position: 'absolute',
  },
  number: {
    height: 18,
    left: 0,
    top: 0,
  },
  text8: {
    top: 8,
    fontFamily: FontFamily.bodySmall500,
    fontWeight: '500',
    width: 30,
    textAlign: 'center',
    lineHeight: 12,
    fontSize: FontSize.bodySmall400_size,
    position: 'absolute',
    color: Color.primaryRed,
    left: 0,
  },
  numberItem: {
    display: 'none',
    height: 30,
  },
  text9: {
    color: Color.gray700,
    top: 8,
    fontFamily: FontFamily.bodySmall500,
    fontWeight: '500',
    width: 30,
    textAlign: 'center',
    lineHeight: 12,
    fontSize: FontSize.bodySmall400_size,
    position: 'absolute',
    left: 44,
  },
  text10: {
    top: 7,
    color: Color.gray700,
    fontFamily: FontFamily.bodySmall500,
    fontWeight: '500',
    left: 88,
    width: 30,
    textAlign: 'center',
    lineHeight: 12,
    fontSize: FontSize.bodySmall400_size,
    position: 'absolute',
  },
  text11: {
    letterSpacing: 0,
    textAlign: 'center',
    fontSize: FontSize.bodySmall400_size,
    color: Color.white,
  },
  wrapper: {
    left: 127,
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: Padding.p_5xs,
    flexDirection: 'row',
    top: 0,
    position: 'absolute',
    backgroundColor: Color.darkslategray_200,
  },
  text12: {
    color: Color.gray700,
    top: 8,
    fontFamily: FontFamily.bodySmall500,
    fontWeight: '500',
    width: 30,
    textAlign: 'center',
    lineHeight: 12,
    fontSize: FontSize.bodySmall400_size,
    position: 'absolute',
    left: 176,
  },
  text13: {
    color: Color.gray700,
    top: 8,
    fontFamily: FontFamily.bodySmall500,
    fontWeight: '500',
    width: 30,
    textAlign: 'center',
    lineHeight: 12,
    fontSize: FontSize.bodySmall400_size,
    position: 'absolute',
    left: 220,
  },
  text14: {
    top: 8,
    fontFamily: FontFamily.bodySmall500,
    fontWeight: '500',
    width: 30,
    textAlign: 'center',
    lineHeight: 12,
    fontSize: FontSize.bodySmall400_size,
    position: 'absolute',
    color: Color.primaryBlue,
    left: 264,
  },
  number1: {
    top: 20,
    height: 30,
    width: 294,
    left: 0,
    position: 'absolute',
  },
  date: {
    marginLeft: -147.5,
    top: 71,
    height: 50,
    left: '50%',
  },
  text15: {
    lineHeight: 14,
    marginLeft: 16,
    color: Color.gray600,
    fontFamily: FontFamily.titleLarge,
    fontWeight: '700',
  },
  ic24arrowLeftIcon: {
    marginLeft: 16,
  },
  weeks: {
    marginLeft: -69,
    top: 24,
    alignItems: 'center',
    flexDirection: 'row',
    left: '50%',
    position: 'absolute',
  },
  text16: {
    opacity: 0.6,
    color: Color.gray600,
    fontFamily: FontFamily.bodySmall400,
    lineHeight: 12,
    fontSize: FontSize.bodySmall400_size,
    textAlign: 'left',
  },
  text17: {
    fontSize: FontSize.size_xl,
    lineHeight: 22,
    textAlign: 'right',
    color: Color.gray700,
    letterSpacing: 0,
  },
  text18: {
    lineHeight: 19,
    marginLeft: 4,
    textAlign: 'right',
    color: Color.gray700,
    letterSpacing: 0,
    fontSize: FontSize.bodySmall400_size,
  },
  group: {
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  text19: {
    display: 'none',
    textAlign: 'center',
    fontFamily: FontFamily.bodySmall400,
    lineHeight: 12,
    fontSize: FontSize.bodySmall400_size,
    color: Color.white,
  },
  frameParent: {
    marginTop: 8,
    alignItems: 'center',
  },
  dashboarditem1: {
    marginLeft: 11,
  },
  dashboarditemParent: {
    top: 137,
    left: 24,
    flexDirection: 'row',
    position: 'absolute',
  },
  section: {
    height: 239,
    width: 343,
  },
  iconwrap: {
    height: 40,
    width: 40,
  },
  text24: {
    color: Color.gray_200,
  },
  i: {
    color: Color.gray_100,
  },
  i13Container: {
    fontFamily: FontFamily.bodySmall400,
    lineHeight: 12,
    fontSize: FontSize.bodySmall400_size,
    textAlign: 'left',
  },
  text26: {
    lineHeight: 16,
    marginTop: 8,
    textAlign: 'center',
    color: Color.white,
  },
  i13Parent: {
    justifyContent: 'center',
    marginLeft: 16,
  },
  text27: {
    color: Color.gray_200,
    fontFamily: FontFamily.bodySmall400,
  },
  i1: {
    fontWeight: '300',
    fontFamily: FontFamily.pretendardLight,
    color: Color.gray_100,
  },
  i13Container1: {
    lineHeight: 16,
    marginLeft: 16,
    letterSpacing: 0,
    display: 'none',
    fontSize: FontSize.bodySmall400_size,
    textAlign: 'left',
  },
  iconwrapParent: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  frameChild: {
    height: 43,
    opacity: 0.2,
    width: 1,
    display: 'none',
    backgroundColor: Color.white,
  },
  text29: {
    display: 'none',
    fontFamily: FontFamily.bodySmall400,
    fontSize: FontSize.bodySmall400_size,
  },
  i13Container2: {
    lineHeight: 16,
    letterSpacing: 0,
    fontSize: FontSize.bodySmall400_size,
    textAlign: 'left',
  },
  text32: {
    fontSize: FontSize.titleMedium_size,
    fontFamily: FontFamily.titleLarge,
    fontWeight: '700',
  },
  frameWrapper: {
    display: 'none',
  },
  ic24chevronRightIcon: {
    opacity: 0.6,
    overflow: 'hidden',
  },
  frameContainer: {
    width: 295,
    justifyContent: 'space-between',
  },
  section1: {
    backgroundColor: '#37498a',
  },
  text33: {
    width: 150,
    lineHeight: 16,
    textAlign: 'left',
    color: Color.white,
  },
  title: {
    alignSelf: 'stretch',
  },
  child: {
    height: 60,
    width: 295,
    backgroundColor: Color.darkslategray_100,
    left: 0,
    position: 'absolute',
  },
  text34: {
    left: 65,
    opacity: 0.5,
    lineHeight: 20,
    fontSize: FontSize.titleSmall_size,
    top: 20,
    letterSpacing: 0,
    textAlign: 'center',
    fontFamily: FontFamily.bodySmall400,
    color: Color.white,
    position: 'absolute',
  },
  view: {
    marginTop: 24,
    display: 'none',
  },
  vectorIcon: {
    height: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    width: '100%',
  },
  text35: {
    marginTop: -6,
    marginLeft: -12.5,
    fontSize: FontSize.titleSmall_size,
    textAlign: 'center',
    fontFamily: FontFamily.bodySmall400,
    lineHeight: 12,
    left: '50%',
    color: Color.white,
  },
  profile: {
    height: 40,
    width: 40,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  text36: {
    display: 'none',
  },
  text37: {
    top: 52,
    left: 4,
    textAlign: 'center',
    lineHeight: 12,
    fontSize: FontSize.bodySmall400_size,
    color: Color.white,
    position: 'absolute',
  },
  text38: {
    left: 4,
  },
  worker: {
    height: 84,
    width: 40,
  },
  worker1: {
    marginLeft: 24,
    height: 84,
    width: 40,
  },
  text46: {
    left: 10,
  },
  workerInner: {
    display: 'none',
  },
  list: {
    right: 0,
    height: 84,
    flexDirection: 'row',
  },
  groupChild: {
    right: 3,
    left: 238,
    backgroundColor: 'transparent',
    height: 85,
    top: 0,
    position: 'absolute',
    overflow: 'hidden',
  },
  listParent: {
    width: 319,
    height: 85,
    marginTop: 24,
  },
  workerlist: {
    backgroundColor: Color.darkslategray_100,
  },
  sectionWrap: {
    top: 161,
  },
  ic24signstampIcon: {
    left: 4,
    top: 0,
    position: 'absolute',
    overflow: 'hidden',
  },
  text59: {
    top: 28,
    opacity: 0.6,
    fontFamily: FontFamily.bodySmall500,
    fontWeight: '500',
    lineHeight: 12,
    fontSize: FontSize.bodySmall400_size,
    textAlign: 'left',
    color: Color.white,
    left: 0,
    position: 'absolute',
  },
  badge: {
    marginTop: -8,
    right: 2,
    backgroundColor: Color.primaryRed,
    height: 16,
    borderRadius: Border.br_81xl,
    left: 2,
  },
  number2: {
    marginTop: -5,
    lineHeight: 10,
    width: 14,
    left: 3,
    fontFamily: FontFamily.bodySmall400,
    color: Color.white,
  },
  notificationCount: {
    right: -3,
    top: -8,
    position: 'absolute',
  },
  view1: {
    top: 89,
    right: 20,
    width: 32,
    height: 40,
    position: 'absolute',
  },
  contentsBody: {
    height: 1179,
    width: 375,
    left: 0,
    top: 0,
    position: 'absolute',
    overflow: 'hidden',
    backgroundColor: Color.darkslategray_200,
  },
  bgChild: {
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    height: 231,
    backgroundColor: Color.white,
    width: 375,
  },
  resizeIndicator: {
    marginLeft: -17.5,
    borderRadius: 5,
    backgroundColor: Color.systemColoursLabelColourTertiaryLight,
    width: 36,
    top: 5,
    height: 5,
    display: 'none',
  },
  bg: {
    height: 335,
    top: -1,
    width: 375,
    left: 0,
    position: 'absolute',
  },
  btnMainChild: {
    backgroundColor: Color.primaryBlue,
    shadowColor: 'rgba(64, 125, 241, 0.2)',
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -10,
    },
    left: 0,
    borderRadius: Border.br_xs,
    top: 0,
  },
  text60: {
    top: 19,
    left: 29,
    textAlign: 'center',
    color: Color.white,
    position: 'absolute',
  },
  btnMain: {
    left: 235,
    top: 40,
  },
  text61: {
    color: Color.gray400,
    textAlign: 'left',
  },
  text62: {
    color: '#555',
    fontFamily: FontFamily.bodySmall400,
    lineHeight: 12,
    fontSize: FontSize.bodySmall400_size,
    textAlign: 'left',
  },
  frame: {
    marginLeft: 8,
    backgroundColor: Color.gray100,
  },
  parent2: {
    top: 40,
    alignItems: 'center',
    flexDirection: 'row',
  },
  text63: {
    top: 118,
    color: Color.gray500,
    fontFamily: FontFamily.bodySmall400,
    lineHeight: 12,
    fontSize: FontSize.bodySmall400_size,
    textAlign: 'left',
  },
  text64: {
    left: 5,
    color: Color.gray500,
    letterSpacing: 0,
    textAlign: 'left',
  },
  item: {
    left: 0,
  },
  inner: {
    left: 181,
  },
  text65: {
    left: 171,
    textAlign: 'right',
    color: Color.gray500,
    letterSpacing: 0,
  },
  rectangleView: {
    left: 138,
    display: 'none',
  },
  text66: {
    right: 48,
    color: Color.darkgray_100,
    textAlign: 'right',
    display: 'none',
  },
  text67: {
    top: -53,
    left: 60,
    letterSpacing: 0,
    display: 'none',
    textAlign: 'center',
    color: Color.primaryRed,
    fontFamily: FontFamily.bodySmall400,
    lineHeight: 12,
    fontSize: FontSize.bodySmall400_size,
    position: 'absolute',
  },
  child1: {
    width: 182,
    backgroundColor: Color.gray100,
    left: 0,
  },
  child2: {
    width: 182,
    backgroundColor: Color.gray100,
    display: 'none',
    left: 0,
  },
  child3: {
    backgroundColor: '#020202',
    width: 44,
    display: 'none',
    left: 0,
  },
  child4: {
    left: 128,
    backgroundColor: '#ffeded',
    width: 54,
    display: 'none',
  },
  child5: {
    width: 139,
    backgroundColor: Color.gray100,
    display: 'none',
    left: 0,
  },
  view2: {
    top: 72,
    height: 26,
    width: 182,
  },
  bottom: {
    bottom: 2,
    shadowColor: 'rgba(44, 52, 79, 0.3)',
    shadowRadius: 20,
    elevation: 20,
    height: 241,
    width: 375,
    position: 'absolute',
  },
  label: {
    color: Color.gray700,
  },
  icon18ptLabelIphone: {
    width: 75,
    paddingTop: Padding.p_6xs,
    paddingBottom: Padding.p_10xs,
    alignItems: 'center',
  },
  label1: {
    color: Color.darkgray_100,
  },
  iconChild: {
    borderBottomRightRadius: Border.br_11xs,
    borderBottomLeftRadius: Border.br_11xs,
    backgroundColor: Color.gainsboro_200,
    width: 16,
    top: 5,
    height: 10,
    left: 0,
    position: 'absolute',
  },
  pathStrokeIcon: {
    height: '33.33%',
    width: '37.5%',
    top: '46.67%',
    right: '31.25%',
    bottom: '20%',
    left: '31.25%',
  },
  iconItem: {
    borderTopLeftRadius: Border.br_11xs,
    borderTopRightRadius: Border.br_11xs,
    backgroundColor: '#bebebe',
    height: 4,
    width: 16,
    top: 1,
    left: 0,
    position: 'absolute',
  },
  iconInner: {
    left: 3,
  },
  iconChild1: {
    left: 11,
  },
  iconChild2: {
    left: 2,
  },
  iconChild3: {
    left: 6,
  },
  iconChild4: {
    left: 10,
  },
  iconChild5: {
    left: 2,
  },
  iconChild6: {
    left: 6,
  },
  icon1: {
    top: 4,
    height: 15,
    width: 16,
    left: 3,
    position: 'absolute',
  },
  icon: {
    left: 0,
    top: 0,
    position: 'absolute',
  },
  label2: {
    marginLeft: -9,
    color: Color.darkgray_100,
    marginTop: 8,
    fontFamily: FontFamily.bodySmall500,
    fontWeight: '500',
    letterSpacing: 0,
    left: '50%',
  },
  iconParent: {
    width: 22,
    height: 40,
  },
  icon18ptLabelIphoneParent: {
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackDark,
    width: 134,
    borderRadius: Border.br_81xl,
  },
  homeIndicatorIphone: {
    height: 34,
    alignSelf: 'stretch',
  },
  tabBarIphone: {
    bottom: 0,
    borderStyle: 'solid',
    borderColor: '#f1f1f1',
    borderTopWidth: 0.5,
    backgroundColor: Color.white,
    left: 0,
    position: 'absolute',
  },
  iphone13Mini42: {
    flex: 1,
    height: 960,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: Color.darkslategray_200,
  },
});

export default FigmaReactNAtive_Locofy;
