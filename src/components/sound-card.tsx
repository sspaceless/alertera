import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
} from "react-native";
import { Text } from "react-native-paper";
import daFaultImage from "../assets/images/react-logo.png";

export const SoundCard: React.FC<{
  description: string;
  fileSrc?: string;
  imgSrc?: ImageSourcePropType;
  isSelected?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  title: string;
}> = ({
  description = "",
  fileSrc,
  imgSrc = daFaultImage,
  isSelected = false,
  onPress,
  title = "",
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ width: "100%" }}>
      <View
        style={[styles.container, styles.shadow, isSelected && styles.selected]}
      >
        <Image
          source={imgSrc}
          style={{ width: 50, height: 50, borderRadius: 16 }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 16,
    width: "100%",
    paddingHorizontal: 16,
    borderWidth: 2,
    paddingVertical: 19,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 17,
    borderColor: "white",
  },
  selected: {
    backgroundColor: "#E8F4FF",
    borderColor: "#70A6C9",
    borderWidth: 2,
  },
  shadow: {
    shadowColor: "#698CA326",
    shadowRadius: 30,
    shadowOpacity: 1,
    shadowOffset: {
      width: 15,
      height: 15,
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
  },
  titleText: {
    fontSize: 16,
    fontWeight: 500,
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: 400,
  },
});
