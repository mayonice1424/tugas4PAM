import { StyleSheet, Text, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Poppins_600SemiBold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { useFonts } from "@expo-google-fonts/poppins/useFonts";
import AppLoading from "expo-app-loading";

const Home = ({ navigation }) => {
  let [fontLoaded, error] = useFonts({
    Poppins_600SemiBold,
    Poppins_500Medium,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }
  return (
    <LinearGradient
      style={styles.container}
      colors={["#12225B", "#0162c8", "#55e7fc"]}
    >
      <Text style={styles.text}>Hello, i'm earth chan!!</Text>
      <Button
        style={styles.text}
        title="START YOUR ADVENTURE"
        onPress={() => navigation.navigate("Globe")}
      />
      <Text style={styles.cc}>
        copyright &copy; Ilham Nofri Yandra (119140133)
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  text: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    color: "white",
    justifyContent: "flex-start",
    alignContent: "center",
    textAlign: "center",
  },
  cc: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    color: "white",
    marginTop: 150,
    alignContent: "center",
    textAlign: "center",
  },
});

export default Home;
