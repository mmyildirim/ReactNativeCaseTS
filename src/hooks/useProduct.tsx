import axios from "axios";
import { useState } from "react";
import Constants from "expo-constants";

import { IProductItem } from "../models/product";
import { ISwiperData } from "../models/swiper";

interface IUseProduct {
  getProductDetailData: (routeId: number) => Promise<void>;
  getSwiperComponentData: () => Promise<void>;
  productDetailData: IProductItem | undefined;
  swiperComponentData: ISwiperData | undefined;
}
const useProduct = (): IUseProduct => {
  const { manifest } = Constants;
  const baseURL =
    "http://192.168.1.102:" + manifest?.debuggerHost?.split(":")[1];
  const [productDetailData, setProductDetailData] = useState<
    IProductItem | undefined
  >();
  const getProductDetailData = async (routeId: number) => {
    try {
      const { data } = await axios.get(
        `${baseURL}/src/data/ProductDetail.json`
      );

      const componentTitle = data.comeponentTitle;
      if (data && componentTitle.toLowerCase() === "productdetail") {
        const filterProductData = data.componentData.find(
          (item: IProductItem) => item.id == routeId
        );
        setProductDetailData(filterProductData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [swiperComponentData, setSwiperComponentData] = useState<
    ISwiperData | undefined
  >();
  const getSwiperComponentData = async () => {
    try {
      const { data } = await axios.get(`${baseURL}/src/data/SwiperData.json`);
      if (
        data.length != 0 &&
        data.comeponentTitle.toLowerCase() === "bannerswiper"
      )
        setSwiperComponentData(data);
    } catch (error) {
      console.error(error);
    }
  };
  return {
    getProductDetailData,
    productDetailData,
    getSwiperComponentData,
    swiperComponentData,
  };
};

export default useProduct;
