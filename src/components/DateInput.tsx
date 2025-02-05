import React, { useState } from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";

const DateInput = ({ value, onChange, errorMessage }) => {
  const [inputValue, setInputValue] = useState(value || "");

  const handleChange = (text) => {
    // Remover qualquer caractere que não seja número
    const formattedText = text.replace(/[^\d]/g, "");

    // Adicionar as barras automaticamente
    let newText = formattedText;

    if (newText.length >= 3 && newText.length <= 4) {
      newText = `${newText.slice(0, 2)}/${newText.slice(2)}`;
    } else if (newText.length >= 5 && newText.length <= 6) {
      newText = `${newText.slice(0, 2)}/${newText.slice(2, 4)}/${newText.slice(
        4
      )}`;
    } else if (newText.length > 6) {
      newText = `${newText.slice(0, 2)}/${newText.slice(2, 4)}/${newText.slice(
        4,
        8
      )}`;
    }

    // Atualiza o valor do input
    setInputValue(newText);
    onChange(newText);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={handleChange}
        placeholder="dd/mm/aaaa"
        keyboardType="numeric"
        placeholderTextColor="#FFFFFF"
      />
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    color: "#FFFFFF",
    borderColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 18,
    width: 200,
    textAlign: "center",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});

export default DateInput;
