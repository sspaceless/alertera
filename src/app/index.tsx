import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SoundCard } from "../components/";
import { SOUNDS } from "../constants";

export default function Home() {
  const [isAirRaidAlert, setIsAirRaidAlert] = useState(false);
  const [selectedSound, setSelectedSound] = useState(0);
  const insets = useSafeAreaInsets();

  const sounds = SOUNDS.map((sound, index) => {
    const handleElementPress = () => {
      setSelectedSound(index);
    };

    return (
      <SoundCard
        key={sound.title}
        isSelected={index === selectedSound}
        onPress={handleElementPress}
        {...sound}
      />
    );
  });

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        ...styles.global,
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

        {sounds}
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          gap: 17,
          marginTop: 20,
        }}
      >
        <Text>Версія 0.1.0</Text>
        <Text>Для українців з ❤️ від Univera</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  global: {
    backgroundColor: "#EFF2F4",
    flex: 1,
  },
  container: {
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 12,
  },
  titleText: {
    fontSize: 28,
    paddingBottom: 12,
    paddingLeft: 12,
  },
});
