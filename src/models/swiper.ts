export interface ISwiperProductItem {
  id: number;
  price: number;
  imgUrl: string;
}
export interface ISwiperData {
  componentTitle: string;
  componentData: [ISwiperProductItem];
}
