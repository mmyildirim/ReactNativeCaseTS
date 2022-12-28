import { FlatList, View } from "react-native";
import React, { useEffect, useRef } from "react";
import ProductSwiper from "./ProductSwiper";
import useProduct from "../../hooks/useProduct";
import CustomProgresBar from "../common/CustomProgresBar";

const BannerSwiper = () => {
  const { getSwiperComponentData, swiperComponentData } = useProduct();
  useEffect(() => {
    getSwiperComponentData();
  }, []);

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return !swiperComponentData ? (
    <CustomProgresBar />
  ) : (
    <View>
      <FlatList
        data={swiperComponentData!.componentData}
        renderItem={({ item }) => <ProductSwiper item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={viewabilityConfig}
      />
    </View>
  );
};

export default BannerSwiper;
