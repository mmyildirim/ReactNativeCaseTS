import { useEffect } from "react";
import { useRoute, RouteProp } from "@react-navigation/native";
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import useProduct from "../../hooks/useProduct";
import CustomProgresBar from "../common/CustomProgresBar";
type TParamList = {
  ProductDetail: {
    id: number;
  };
};
const { width, height } = Dimensions.get("screen");
const ProductDetail = () => {
  const route = useRoute<RouteProp<TParamList, "ProductDetail">>();
  const routeId = route.params.id;
  const { getProductDetailData, productDetailData } = useProduct();

  useEffect(() => {
    getProductDetailData(routeId);
  }, [routeId]);

  return !productDetailData ? (
    <CustomProgresBar />
  ) : (
    <>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{ uri: productDetailData?.imgUrl }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{productDetailData?.name}</Text>
        <Text style={styles.text}>{productDetailData?.description}</Text>
        <Text style={styles.text}>${productDetailData?.price}</Text>
        <Button
          title={
            productDetailData?.stockQuantity > 0
              ? "Sepete Ekle"
              : "Stoğa Gelince Haber Ver"
          }
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 3,
    paddingTop: 80,
  },
  image: {
    height: height * 0.6,
    width: width * 0.9,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    paddingTop: 75,
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 2,
  },
  text: {
    fontSize: 16,
    padding: 5,
    fontWeight: "bold",
  },
  nameText: {
    fontSize: 24,
    padding: 5,
    fontWeight: "bold",
  },
});

export default ProductDetail;
