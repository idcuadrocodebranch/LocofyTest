import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {FontFamily, Color, Padding, Border, FontSize} from '../GlobalStyles';

const LogInEmptyState = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.logInEmptyState}>
      <View style={styles.staart}>
        <View style={styles.navbar}>
          <View style={styles.back}>
            <Pressable
              style={[styles.iconBack, styles.labelFlexBox1]}
              onPress={() => navigation.goBack()}>
              <Image
                style={styles.angleIconLayout}
                resizeMode="contain"
                source={require('../assets/angle-small-left.png')}
              />
            </Pressable>
            <View style={styles.text}>
              <Text style={[styles.inicio, styles.orTypo]}>Log In</Text>
            </View>
            <Pressable
              style={[styles.iconBack, styles.labelFlexBox1]}
              onPress={() => navigation.goBack()}>
              {/* <Image
                style={[styles.angleSmallLeftIcon1, styles.angleIconLayout]}
                resizeMode="cover"
                source={require('../assets/anglesmallleft1.png')}
              /> */}
            </Pressable>
          </View>
          {/* <View style={styles.icon3}>
            <Image
              style={styles.addIconLayout}
              resizeMode="cover"
              source={require('../assets/Logo.png')}
            />
          </View>
          <View style={styles.icon3}>
            <Image
              style={styles.addIconLayout}
              resizeMode="cover"
              source={require('../assets/add1.png')}
            />
          </View>
          <View style={styles.icon3}>
            <Image
              style={styles.addIconLayout}
              resizeMode="cover"
              source={require('../assets/add2.png')}
            />
          </View> */}
        </View>
      </View>
      <Image
        style={styles.logoIcon}
        resizeMode="cover"
        source={require('../assets/Logo.png')}
      />
      <View style={styles.buttonParent}>
        <View style={[styles.button, styles.buttonSpaceBlock]}>
          {/* <Image
            style={styles.addIconLayout}
            resizeMode="cover"
            source={require('../assets/google.png')}
          /> */}
          <Text style={[styles.button1, styles.buttonTypo]}>
            Sign in with Google
          </Text>
          {/* <Image
            style={[styles.addIcon3, styles.addIconLayout]}
            resizeMode="cover"
            source={require('../assets/add3.png')}
          /> */}
        </View>
        <View style={[styles.button2, styles.buttonSpaceBlock]}>
          {/* <Image
            style={styles.addIconLayout}
            resizeMode="cover"
            source={require('../assets/facebook.png')}
          /> */}
          <Text style={[styles.button1, styles.buttonTypo]}>
            Sign in with Facebook
          </Text>
          {/* <Image
            style={[styles.addIcon3, styles.addIconLayout]}
            resizeMode="cover"
            source={require('../assets/add4.png')}
          /> */}
        </View>
      </View>
      <View style={styles.signUp}>
        <Text
          style={[
            styles.doNotHave,
            styles.doNotHaveTypo,
          ]}>{`Do not have an account yet?  `}</Text>
        <Text style={[styles.signUp1, styles.signUp1Typo]}>Sign Up</Text>
      </View>
      <Text style={[styles.or, styles.orLayout]}>OR</Text>
      <View style={[styles.form, styles.formPosition]}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#c0c0c0"
        />
        <View style={styles.input1}>
          <View style={[styles.label, styles.labelFlexBox]}>
            <Text style={[styles.label1, styles.text1Typo]}>Password</Text>
          </View>
          <View style={[styles.textInput, styles.textFlexBox]}>
            {/* <Image
              style={[styles.addIcon5, styles.addIconLayout]}
              resizeMode="cover"
              source={require('../assets/add5.png')}
            /> */}
            <Text style={[styles.text1, styles.text1Typo]} />
            {/* <Image
              style={[styles.eyeIcon, styles.addIconLayout]}
              resizeMode="cover"
              source={require('../assets/eye.png')}
            /> */}
          </View>
          <View style={[styles.supportText, styles.textFlexBox]}>
            <Text style={[styles.support, styles.supportTypo]}>
              Support Text
            </Text>
            <Text style={[styles.numbers, styles.supportTypo]}>0/50</Text>
          </View>
        </View>
        <Text style={[styles.forgotYourPassword, styles.labelFlexBox]}>
          Forgot your password?
        </Text>
      </View>
      <View style={[styles.button4, styles.formPosition]}>
        {/* <Image
          style={[styles.addIcon5, styles.addIconLayout]}
          resizeMode="cover"
          source={require('../assets/add6.png')}
        /> */}
        <Text style={[styles.button5, styles.buttonTypo]}>Login</Text>
        {/* <Image
          style={[styles.addIcon3, styles.addIconLayout]}
          resizeMode="cover"
          source={require('../assets/add7.png')}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelFlexBox1: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  orTypo: {
    fontFamily: FontFamily.inter16Light,
    fontWeight: '300',
    color: Color.colorWhite,
  },
  angleIconLayout: {
    height: 24,
    width: 24,
    overflow: 'hidden',
  },
  buttonSpaceBlock: {
    paddingVertical: Padding.p_xs,
    borderRadius: Border.br_sm,
    paddingHorizontal: Padding.p_5xl,
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonTypo: {
    fontFamily: FontFamily.inter12Medium,
    fontWeight: '500',
    lineHeight: 22,
    marginLeft: 16,
    fontSize: FontSize.inter18Medium_size,
    textAlign: 'center',
  },
  addIconLayout: {
    height: 18,
    width: 18,
    overflow: 'hidden',
  },
  doNotHaveTypo: {
    display: 'flex',
    fontFamily: FontFamily.inter16Light,
    fontWeight: '300',
  },
  signUp1Typo: {
    color: Color.primary,
    textAlign: 'left',
    lineHeight: 16,
    fontSize: FontSize.inter14Link_size,
  },
  orLayout: {
    lineHeight: 16,
    fontSize: FontSize.inter14Link_size,
  },
  formPosition: {
    marginLeft: -171,
    left: '50%',
    position: 'absolute',
  },
  labelFlexBox: {
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  text1Typo: {
    color: Color.surface3,
    textAlign: 'left',
    fontFamily: FontFamily.inter16Light,
    fontWeight: '300',
    flex: 1,
  },
  textFlexBox: {
    marginTop: 4,
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
  },
  supportTypo: {
    color: Color.lightGray,
    fontSize: FontSize.inter12Medium_size,
    lineHeight: 16,
    fontFamily: FontFamily.inter12Medium,
    fontWeight: '500',
  },
  time: {
    top: 1,
    fontSize: FontSize.size_mid,
    letterSpacing: 0,
    fontWeight: '600',
    fontFamily: FontFamily.redHatDisplaySemiBold,
    height: 20,
    textAlign: 'center',
    color: Color.colorWhite,
    width: 54,
    left: 0,
    position: 'absolute',
  },
  statusbarTime: {
    marginLeft: -159.76,
    top: 14,
    borderRadius: Border.br_5xl,
    height: 21,
    width: 54,
    left: '50%',
    position: 'absolute',
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
    alignItems: 'flex-end',
    flexDirection: 'row',
    position: 'absolute',
  },
  statusbar: {
    height: 44,
    width: 390,
    overflow: 'hidden',
  },
  iconBack: {
    padding: Padding.p_base,
    alignItems: 'center',
  },
  inicio: {
    lineHeight: 24,
    fontSize: FontSize.inter18Medium_size,
    fontWeight: '300',
    textAlign: 'center',
    flex: 1,
  },
  text: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xl,
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  angleSmallLeftIcon1: {
    display: 'none',
  },
  back: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  icon3: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_base,
    display: 'none',
    flexDirection: 'row',
  },
  navbar: {
    height: 56,
    alignItems: 'center',
    flexDirection: 'row',
    width: 390,
    backgroundColor: Color.background,
  },
  staart: {
    left: 0,
    top: 0,
    position: 'absolute',
  },
  logoIcon: {
    top: 168,
    left: 165,
    width: 59,
    height: 48,
    position: 'absolute',
  },
  button1: {
    color: Color.surface,
    marginLeft: 16,
  },
  addIcon3: {
    marginLeft: 16,
    display: 'none',
  },
  button: {
    backgroundColor: Color.colorWhite,
    paddingVertical: Padding.p_xs,
    borderRadius: Border.br_sm,
    width: 274,
    marginLeft: -137,
    left: '50%',
    position: 'absolute',
    top: 0,
  },
  button2: {
    top: 59,
    backgroundColor: Color.colorWhite,
    paddingVertical: Padding.p_xs,
    borderRadius: Border.br_sm,
    width: 274,
    marginLeft: -137,
    left: '50%',
    position: 'absolute',
  },
  buttonParent: {
    top: 595,
    height: 105,
    width: 274,
    marginLeft: -137,
    left: '50%',
    position: 'absolute',
  },
  doNotHave: {
    width: 192,
    textAlign: 'left',
    lineHeight: 16,
    fontSize: FontSize.inter14Link_size,
    alignItems: 'center',
    color: Color.colorWhite,
    display: 'flex',
  },
  signUp1: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontFamily: FontFamily.inter14Link,
  },
  signUp: {
    top: 772,
    left: 24,
    flexDirection: 'row',
    position: 'absolute',
  },
  or: {
    marginLeft: -10,
    top: 556,
    textAlign: 'left',
    fontFamily: FontFamily.inter16Light,
    fontWeight: '300',
    color: Color.colorWhite,
    left: '50%',
    lineHeight: 16,
    position: 'absolute',
  },
  input: {
    width: 342,
    fontSize: FontSize.inter14Link_size,
    fontFamily: FontFamily.inter16Light,
    fontWeight: '300',
  },
  label1: {
    lineHeight: 16,
    fontSize: FontSize.inter14Link_size,
  },
  label: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  addIcon5: {
    display: 'none',
  },
  text1: {
    fontSize: FontSize.inter16Light_size,
    lineHeight: 19,
    marginLeft: 8,
  },
  eyeIcon: {
    marginLeft: 8,
  },
  textInput: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.surface,
    borderStyle: 'solid',
    borderColor: Color.surface3,
    borderWidth: 1,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_sm,
  },
  support: {
    textAlign: 'left',
    flex: 1,
  },
  numbers: {
    textAlign: 'right',
    marginLeft: 16,
  },
  supportText: {
    justifyContent: 'flex-end',
    display: 'none',
  },
  input1: {
    marginTop: 16,
    width: 342,
  },
  forgotYourPassword: {
    marginTop: 16,
    color: Color.primary,
    textAlign: 'left',
    lineHeight: 16,
    fontSize: FontSize.inter14Link_size,
    display: 'flex',
    fontFamily: FontFamily.inter16Light,
    fontWeight: '300',
    height: 20,
  },
  form: {
    top: 272,
  },
  button5: {
    color: Color.colorSilver_100,
    marginLeft: 16,
  },
  button4: {
    top: 484,
    backgroundColor: Color.surface2,
    width: 342,
    paddingVertical: Padding.p_xs,
    borderRadius: Border.br_sm,
    paddingHorizontal: Padding.p_5xl,
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: -171,
    justifyContent: 'center',
  },
  logInEmptyState: {
    width: '100%',
    height: 844,
    overflow: 'hidden',
    flex: 1,
    backgroundColor: Color.background,
  },
});

export default LogInEmptyState;
