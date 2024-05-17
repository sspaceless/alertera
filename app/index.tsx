import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Home() {
  const [isAirRaidAlert, setIsAirRaidAlert] = useState<boolean>(false);
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <Text variant="displayMedium" style={styles.titleText}>
        AlertEra
      </Text>

      <View style={styles.container}>
        <Text variant="bodyMedium">
          {isAirRaidAlert ? "Повітряна тривога" : "Відбій тривоги"}
        </Text>
        <Button
          mode="contained"
          onPress={() => setIsAirRaidAlert(!isAirRaidAlert)}
        >
          закрий пиздак запукскаю атомное
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
  },
  titleText: {
    paddingLeft: 12,
    paddingBottom: 12,
  },
});
