import { View, Text } from "react-native";
import { styles } from "./style";
import CardView from "../../components/CardView";

export default function GarageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cameraBox}>
        <View style={styles.trianguleCorner}></View>
        <View style={[styles.trianguleCorner, styles.topRight]}></View>
        <View style={[styles.trianguleCorner, styles.bottomLeft]}></View>
        <View style={[styles.trianguleCorner, styles.bottomRight]}></View>
        <CardView />
      </View>
    </View>
  );
}