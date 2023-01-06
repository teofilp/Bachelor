import { useNavigation } from "@react-navigation/native"
import { useContext, useLayoutEffect } from "react";
import { ColorThemeContext } from "../context/colorThemeContext";

export const useColorThemeHeader = () => {
  const navigation = useNavigation();
  const { color: themeColor } = useContext(ColorThemeContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTintColor: themeColor
    });
  }, [themeColor]);
}