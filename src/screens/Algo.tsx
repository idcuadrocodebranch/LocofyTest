import * as React from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const CarouselPage1 = () => {
  return (
    <View style={styles.carouselPage1}>
      <View style={styles.carouselItemIndicators}>
        <View style={styles.carouselItemIndicatorsChild} />
        <View
          style={[styles.carouselItemIndicatorsItem, styles.carouselItemLayout]}
        />
        <View
          style={[
            styles.carouselItemIndicatorsInner,
            styles.carouselItemLayout,
          ]}
        />
      </View>
      <Text style={[styles.trackYourSleep, styles.buttonFlexBox1]}>
        Track your sleep patterns and improve your sleep habits with SleepMate
      </Text>
      <View style={[styles.statusbar, styles.statusbarPosition]}>
        <View style={[styles.statusbarTime, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
        <View style={[styles.rightSide, styles.buttonFlexBox]}>
          <Image
            style={styles.iconMobileSignal}
            resizeMode="cover"
            source={require("../assets/icon--mobile-signal.png")}
          />
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.statusbarBatteryIcon}
            resizeMode="cover"
            source={require("../assets/-statusbarbattery.png")}
          />
        </View>
      </View>
      <View style={[styles.home, styles.homePosition]}>
        <View style={styles.homeIndicator} />
      </View>
      <Image
        style={[styles.illustrationOnboarding3Icon, styles.statusbarPosition]}
        resizeMode="cover"
        source={require("../assets/illustrationonboarding3.png")}
      />
      <Pressable style={[styles.button, styles.buttonFlexBox]}>
        <Image
          style={styles.addIconLayout}
          resizeMode="cover"
          source={require("../assets/add.png")}
        />
        <Text style={styles.button1}>Continue</Text>
        <Image
          style={[styles.addIcon1, styles.addIconLayout]}
          resizeMode="cover"
          source={require("../assets/add1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselItemLayout: {
    backgroundColor: Color.colorGray_100,
    width: 8,
    borderRadius: Border.br_9xs,
    top: 0,
    height: 8,
    position: "absolute",
  },
  buttonFlexBox1: {
    justifyContent: "center",
    alignItems: "center",
  },
  statusbarPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  buttonFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  homePosition: {
    height: 44,
    right: 0,
    left: 0,
  },
  addIconLayout: {
    display: "none",
    height: 18,
    width: 18,
    overflow: "hidden",
  },
  carouselItemIndicatorsChild: {
    backgroundColor: "#d9d9d9",
    width: 8,
    borderRadius: Border.br_9xs,
    left: 0,
    top: 0,
    height: 8,
    position: "absolute",
  },
  carouselItemIndicatorsItem: {
    left: 15,
  },
  carouselItemIndicatorsInner: {
    left: 30,
  },
  carouselItemIndicators: {
    top: 688,
    left: 176,
    width: 38,
    height: 8,
    position: "absolute",
  },
  trackYourSleep: {
    top: 515,
    left: 79,
    fontSize: 16,
    fontFamily: FontFamily.openSansRegular,
    display: "flex",
    width: 239,
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  time: {
    top: 1,
    fontSize: FontSize.size_mid,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.redHatDisplaySemiBold,
    height: 20,
    textAlign: "center",
    color: Color.colorWhite,
    left: 0,
    width: 54,
  },
  statusbarTime: {
    marginLeft: -159.76,
    top: 14,
    borderRadius: Border.br_5xl,
    height: 21,
    left: "50%",
  },
  iconMobileSignal: {
    height: 12,
    width: 18,
  },
  wifiIcon: {
    width: 17,
    marginLeft: 8,
    height: 12,
  },
  statusbarBatteryIcon: {
    width: 27,
    height: 13,
    marginLeft: 8,
  },
  rightSide: {
    top: 19,
    left: 274,
    alignItems: "flex-end",
  },
  statusbar: {
    height: 44,
    right: 0,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorWhite,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  home: {
    top: 800,
    position: "absolute",
  },
  illustrationOnboarding3Icon: {
    marginLeft: -155,
    top: 216,
    width: 311,
    height: 225,
    left: "50%",
  },
  button1: {
    fontSize: FontSize.inter18Medium_size,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.inter18Medium,
    color: Color.surface,
    marginLeft: 16,
    textAlign: "center",
  },
  addIcon1: {
    marginLeft: 16,
  },
  button: {
    marginLeft: -170,
    top: 725,
    borderRadius: Border.br_sm,
    backgroundColor: Color.primary,
    width: 340,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_xs,
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  carouselPage1: {
    backgroundColor: Color.background,
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default CarouselPage1;
