import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetail from "./src/components/product/ProductDetail";
import BannerSwiper from "./src/components/slider/BannerSwiper";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={BannerSwiper}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ title: " " }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
