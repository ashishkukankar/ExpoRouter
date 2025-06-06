import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const getNavigateToDetail = () => {
    router.push("./detail");
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderRadius: 20,
          backgroundColor: "blue",
          height: 50,
          marginHorizontal: 20,
          justifyContent: "center",
        }}
        onPress={getNavigateToDetail}
      >
        <Text
          style={{ alignSelf: "center",
             color: "white", fontWeight: "bold" }}
        >
          Click Me
        </Text>
      </TouchableOpacity>
    </View>
  );
}
