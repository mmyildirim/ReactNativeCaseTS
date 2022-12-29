import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { ISwiperProductItem } from "../../models/swiper";
import { useNavigation } from "@react-navigation/native";

interface IProductSwiperProps {
  item: ISwiperProductItem;
}

interface INavigation {
  navigate: (value: string, {}) => void;
}

const { width, height } = Dimensions.get("screen");

const ProductSwiper: React.FC<IProductSwiperProps> = (props) => {
  const translateYImage = new Animated.Value(40);
  const { id, imgUrl, price } = props.item;
  const { navigate } = useNavigation<INavigation>();
  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigate("ProductDetail", { id });
        }}
      >
        <View style={styles.imageContainer}>
          <Animated.Image
            source={{ uri: imgUrl }}
            resizeMode="contain"
            style={[
              styles.image,
              {
                transform: [
                  {
                    translateY: translateYImage,
                  },
                ],
              },
            ]}
          />
          <Text style={styles.price}>${price}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: "center",
  },
  imageContainer: { height: "100%", width: "90%" },
  image: {
    flex: 0.7,
    width: "100%",
  },

  content: {
    flex: 0.4,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 18,
    marginVertical: 12,
    color: "#333",
  },
  price: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});

export default ProductSwiper;
