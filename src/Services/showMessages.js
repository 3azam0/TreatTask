import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import {fontScale, sWidth, vScale} from '../Themes/Scale';
import Font from '../Themes/Font';
import Colors from '../Themes/Colors';

export const showToast = (
  message = '',
  type = 'success',
  fromNotification = false,
  onPress,
) => {
  Toast.show({
    type: type,
    text2: message,
    onPress: () => {
      fromNotification && onPress();
    },
  });
};

export const toastConfig = {
  /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
  success: props => (
    <BaseToast
      {...props}
      style={{borderLeftColor: Colors.mainColor, width: sWidth * 0.95}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontSize: fontScale(14),
        ...Font.REGULAR,
      }}
      text2Style={{
        fontSize: fontScale(14),
        ...Font.REGULAR,
        textAlign: 'left',
        color: Colors.mainColor,
        opacity: 0.6,
      }}
    />
  ),
  /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
  error: props => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 13,
        color: Colors.white,
      }}
      style={{borderLeftColor: Colors.red, width: sWidth * 0.95}}
      contentContainerStyle={{
        backgroundColor: '#fff',
        borderStartColor: Colors.red,
        borderRadius: 10,
        height: vScale(65),
      }}
      text2Style={{
        fontSize: fontScale(12),
        ...Font.REGULAR,
        textAlign: 'left',
        color: Colors.black,
      }}
    />
  ),
  /*
      Or create a completely new type - `tomatoToast`,
      building the layout from scratch.
  
      I can consume any custom `props` I want.
      They will be passed when calling the `show` method (see below)
    */
  tomatoToast: ({text1, props}) => (
    <View style={{height: 60, width: '100%', backgroundColor: 'tomato'}}>
      <Text>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  ),
};
