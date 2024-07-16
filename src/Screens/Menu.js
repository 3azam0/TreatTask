import {StyleSheet, View, Text, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import Colors from '../Themes/Colors';
import {ScrollView} from 'react-native-gesture-handler';
import Images from '../Services/Images';
import {fontScale, scale, vScale} from '../Themes/Scale';
import FlavourCard from '../Components/Menu/FlavorCard';
import {AppButton, Header} from '../Components/Shared';
import {useDispatch, useSelector} from 'react-redux';
import {
  addRemoveBase,
  addRemoveCoating,
  addRemoveTopping,
  cancelTreat,
  handleStep,
} from '../Toolkit/treats';
import {
  useSharedValue,
  withTiming,
  Easing,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Font from '../Themes/Font';
import {navigate} from '../Navigation/Index';
import {
  AinmatedFlatList,
  CancelButton,
  Indicator,
  Stepper,
  ToppingCard,
  TreatCard,
} from '../Components/Menu';
import {bases, coatings, toppings} from '../Services/data';

const Menu = () => {
  const {treat} = useSelector(state => state.treats);

  const dispatch = useDispatch();

  const StickOpacity = useSharedValue(0);

  const BaseOpacity = useSharedValue(0);
  const CoatingOpacity = useSharedValue(0);

  const coatingsOpacity = useSharedValue(0);

  const toppingsOpacity = useSharedValue(0);
  const basesOpacity = useSharedValue(0);

  const stickStyle = useAnimatedStyle(() => {
    return {
      opacity: StickOpacity.value, // Use the value directly
    };
  });
  const baseStyle = useAnimatedStyle(() => {
    return {
      opacity: BaseOpacity.value, // Use the value directly
    };
  });
  const coatingStyle = useAnimatedStyle(() => {
    return {
      opacity: CoatingOpacity.value, // Use the value directly
    };
  });

  const coatingsStyle = useAnimatedStyle(() => {
    return {
      opacity: coatingsOpacity.value, // Use the value directly
    };
  });
  const basesStyle = useAnimatedStyle(() => {
    return {
      opacity: basesOpacity.value, // Use the value directly
    };
  });
  const toppingsStyle = useAnimatedStyle(() => {
    return {
      opacity: toppingsOpacity.value, // Use the value directly
    };
  });

  const cancelHandler = () => {
    dispatch(cancelTreat());
    navigate('Home');
  };
  const stepHandler = to => {
    dispatch(handleStep(to));
  };
  const renderCard = ({item}) => {
    const handleSelectBase = () => {
      dispatch(addRemoveBase(item.name));
      if (treat.baseSelected && treat.base === item.name) {
        StickOpacity.value = 0;
        BaseOpacity.value = withTiming(0, {
          duration: 100,
          easing: Easing.linear,
        });
        StickOpacity.value = withTiming(1, {
          duration: 1000,
          easing: Easing.linear,
        });
      } else if (treat.baseSelected && treat.base !== item.name) {
        BaseOpacity.value = 0;

        BaseOpacity.value = withTiming(1, {
          duration: 1000,
          easing: Easing.linear,
        });
      } else {
        BaseOpacity.value = withTiming(1, {
          duration: 1000,
          easing: Easing.linear,
        });
        StickOpacity.value = withTiming(0, {
          duration: 1,
          easing: Easing.linear,
        });
      }
    };
    const handleSelectTopping = () => {
      dispatch(addRemoveTopping(item.name));
    };
    const handleSelectCoating = () => {
      dispatch(addRemoveCoating(item.name));
      if (treat.coatingSelected && treat.coating === item.name) {
        CoatingOpacity.value = withTiming(0, {
          duration: 1000,
          easing: Easing.linear,
        });
        BaseOpacity.value = 0;
        BaseOpacity.value = withTiming(1, {
          duration: 1000,
          easing: Easing.linear,
        });
      } else if (treat.coatingSelected && treat.coating !== item.name) {
        CoatingOpacity.value = 0;

        CoatingOpacity.value = withTiming(1, {
          duration: 1000,
          easing: Easing.linear,
        });
      } else {
        CoatingOpacity.value = withTiming(1, {
          duration: 1000,
          easing: Easing.linear,
        });
        // BaseOpacity.value = withTiming(0, {
        //   duration: 1000,
        //   easing: Easing.linear,
        // });
      }
    };

    return (
      <View>
        <FlavourCard
          onPress={
            treat.step == 1
              ? handleSelectBase
              : treat.step == 2
              ? handleSelectCoating
              : handleSelectTopping
          }
          selected={
            treat.base === item.name ||
            treat.coating === item.name ||
            treat.toppings.includes(item.name)
          }
          {...item}
        />
      </View>
    );
  };

  useEffect(() => {
    switch (treat.step) {
      case 1:
        StickOpacity.value = withTiming(1, {
          duration: 1000,
          easing: Easing.linear,
        });
        basesOpacity.value = withTiming(1, {
          duration: 1000,
          easing: Easing.linear,
        });
        coatingsOpacity.value = withTiming(0, {
          duration: 1000,
          easing: Easing.linear,
        });
        toppingsOpacity.value = withTiming(0, {
          duration: 1000,
          easing: Easing.linear,
        });
        break;
      case 2:
        basesOpacity.value = withTiming(0, {
          duration: 1000,
          easing: Easing.linear,
        });
        coatingsOpacity.value = withTiming(1, {
          duration: 1000,
          easing: Easing.linear,
        });
        toppingsOpacity.value = withTiming(0, {
          duration: 1000,
          easing: Easing.linear,
        });
        break;
      case 3:
        basesOpacity.value = withTiming(0, {
          duration: 1000,
          easing: Easing.linear,
        });
        coatingsOpacity.value = withTiming(0, {
          duration: 1000,
          easing: Easing.linear,
        });
        toppingsOpacity.value = withTiming(1, {
          duration: 1000,
          easing: Easing.linear,
        });
        break;
      default:
        break;
    }
  }, [[treat.step]]);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.secondryColor}
      />
      <View style={StyleSheet.absoluteFill}>
        <Header backgroundColor={Colors.secondryColor} />

        <ScrollView
          contentContainerStyle={styles.scrollViewContentStyle}
          style={styles.container}>
          <View style={styles.wrapper}>
            {treat.step == 1 &&
              treat.baseSelected &&
              !treat.coatingSelected && (
                <TreatCard style={baseStyle} image={Images.chocklet} />
              )}
            {treat.baseSelected &&
              treat.step == 2 &&
              !treat.coatingSelected && (
                <TreatCard style={baseStyle} image={Images.chocklet} />
              )}
            {treat.step == 3 && (
              <View style={styles.toppingWrapper}>
                {treat.toppings[0] && (
                  <ToppingCard image={Images.topping1} id={1} />
                )}
                {treat.toppings[1] && (
                  <ToppingCard image={Images.topping2} id={2} />
                )}
                <TreatCard style={toppingsStyle} image={Images.chocklet} />
              </View>
            )}
            {treat.coatingSelected &&
              treat.step == 2 &&
              !treat.toppingSelected && (
                <TreatCard style={coatingStyle} image={Images.chocoMilk} />
              )}

            {treat.step == 1 &&
              !treat.baseSelected &&
              !treat.coatingSelected && (
                <TreatCard style={stickStyle} stick image={Images.stick} />
              )}
          </View>
          <Text style={styles.step}>Step {treat.step}</Text>
          <Text style={styles.choose}>Choose your base</Text>
          {treat.step === 3 && <Text style={styles.extras}>2 free extra</Text>}
          <AinmatedFlatList
            style={
              treat.step === 1
                ? basesStyle
                : treat.step === 2
                ? coatingsStyle
                : toppingsStyle
            }
            list={
              treat.step === 1 ? bases : treat.step === 2 ? coatings : toppings
            }
            renderCard={renderCard}
          />

          <Indicator
            alignSelf={
              treat.step === 1
                ? 'flex-start'
                : treat.step === 2
                ? 'center'
                : 'flex-end'
            }
          />

          <Stepper
            showNext={
              treat.baseSelected && treat.step < 4 && treat.toppings.length < 2
            }
            showBack={
              treat.step > 1 && treat.step < 4 && treat.toppings.length < 2
            }
            disabled={treat.step == 2 && !treat.coatingSelected}
            onNextPress={() => stepHandler('next')}
            onBackPress={() => stepHandler('back')}
            style={styles.backButton}
          />
          {treat.toppings.length >= 1 && (
            <>
              <AppButton
                title={'Add to cart'}
                containerStyle={styles.addToCart}
                rightImg={Images.cartCar}
                rightImgStyle={styles.cart}
              />
              <CancelButton onPress={cancelHandler} />
            </>
          )}
        </ScrollView>
      </View>
    </>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollViewContentStyle: {
    alignItems: 'center',
    paddingHorizontal: scale(24),
    paddingBottom: vScale(200),
  },
  wrapper: {
    height: vScale(350),
    backgroundColor: Colors.secondryColor,
    width: scale(430),
    borderBottomStartRadius: vScale(60),
    borderBottomEndRadius: vScale(60),
    justifyContent: 'flex-end',
  },

  addToCart: {
    width: scale(398),
    height: vScale(76),
    borderRadius: vScale(28),
    marginTop: vScale(24),
  },
  step: {
    ...Font.REGULAR,

    color: Colors.txtLightBrown,
    fontSize: fontScale(16),
    marginTop: vScale(24),
    // marginBottom: vScale(10),
  },
  choose: {
    ...Font.BOLD,

    color: Colors.txtDarkBrown,
    fontSize: fontScale(40),
    marginBottom: vScale(24),
  },
  extras: {
    ...Font.REGULAR,

    color: Colors.txtDarkBrown,
    fontSize: fontScale(20),
    marginBottom: vScale(24),
    marginTop: vScale(-16),
  },
  toppingWrapper: {
    width: scale(120),
    alignSelf: 'center',
  },
  cart: {
    width: scale(88),
    height: vScale(66),
    marginEnd: scale(10),
  },
});
