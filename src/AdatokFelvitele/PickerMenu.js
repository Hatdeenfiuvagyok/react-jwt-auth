import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native-web";

const PickerMenu = () => {
  const [selectedValue, setSelectedValue] = useState("Mell");
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: '50%' }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Mell" value="Mell" />
        <Picker.Item label="Bicepsz" value="Bicepsz" />
        <Picker.Item label="Tricepsz" value="Tricepsz" />
        <Picker.Item label="Váll" value="Vall" />
        <Picker.Item label="Hát" value="Hat" />
        <Picker.Item label="HasTörzs" value="HasTorzs" />
        <Picker.Item label="Vádli" value="Vadli" />
        <Picker.Item label="CombFar" value="CombFar" />
        <Picker.Item label="Alkar" value="Alkar" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});

export default PickerMenu;