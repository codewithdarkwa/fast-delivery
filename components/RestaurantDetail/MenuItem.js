import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
    color:"#000"
  },
});

export default function MenuItems({
  restaurantName,
  foods,
  localFoods,
  hideCheckbox,
  marginLeft,
}) {
  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName:restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );
  const isFoodInCart = (food, cartItems) => Boolean(cartItems.find((item) => item.title === food.title));


let localfoods = ['Gari and Beans','Fufu','Jollof','Waakye','Banku','Ampesi', 'Fried rice','Rice ball with Groundnut soup','Kenkey','Fried plantain',];
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {localfoods.includes(restaurantName)
        ? (localFoods.map((food,index)=>(
        <View key={index}>
        <View style={styles.menuItemStyle}>
          {hideCheckbox ? (
            <></>
          ) : (
            <BouncyCheckbox
              iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
              fillColor="green"
              isChecked={isFoodInCart(food, cartItems)}
              onPress={(checkboxValue) => selectItem(food, checkboxValue)}
            />
          )}
          <LocalFoodInfo food={food} />
          <LocalFoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
        </View>
        <Divider
          width={0.5}
          orientation="vertical"
          style={{ marginHorizontal: 20 }}
        />
      </View>
      )) )
      :
      (foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            {hideCheckbox ? (
              <></>
            ) : (
              <BouncyCheckbox
                iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                fillColor="green"
                isChecked={isFoodInCart(food, cartItems)}
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
              />
            )}
            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
        )))
      }
      </ScrollView>
  );
}
const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text style={{color:"#000"}}>{props.food.description}</Text>
    <Text style={{color:"#000"}}>{props.food.price}</Text>
  </View>
);
const FoodImage = ({ marginLeft, ...props }) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft: marginLeft,
      }}
    />
  </View>
);

const LocalFoodInfo = ({food}) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{food.title}</Text>
    <Text style={{color:"#000"}}>{food.description}</Text>
    <Text style={{color:"#000"}}>Ghs {food.price}</Text>
  </View>
);
const LocalFoodImage = ({ marginLeft, food }) => (
  <View>
    <Image
      source={{uri:food.image_url}}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft: marginLeft,
      }}
    />
  </View>
);

