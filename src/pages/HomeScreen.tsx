import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DateInput from "../components/DateInput";
import { AgeContext } from "../context/AgeContext";
import { Ionicons } from "@expo/vector-icons"; // Importe o Ionicons

const HomeScreen = ({ navigation }) => {
  const [date, setDate] = useState("");
  const { setAge } = useContext(AgeContext);
  const [errorMessage, setErrorMessage] = useState("");

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setErrorMessage("");
  };

  const validateAndNavigate = () => {
    if (!date) {
      setErrorMessage("Por favor, insira sua data de nascimento.");
      return;
    }

    const today = new Date();
    const [day, month, year] = date.split("/"); // Extraímos dia, mês e ano

    // Convertemos day, month, year para números
    const inputDate = new Date(
      parseInt(year), // Ano como número
      parseInt(month) - 1, // Mês como número (deve subtrair 1)
      parseInt(day) // Dia como número
    );

    if (inputDate > today) {
      setErrorMessage("A data não pode ser no futuro.");
    } else {
      // Calcular a idade
      let age = today.getFullYear() - inputDate.getFullYear();
      const m = today.getMonth() - inputDate.getMonth();

      // Verificar se o aniversário já passou este ano
      if (m < 0 || (m === 0 && today.getDate() < inputDate.getDate())) {
        age--;
      }

      setErrorMessage("");
      setAge(age); // Define a idade no contexto
      navigation.jumpTo("Recomendações");
    }
  };

  return (
    <View style={styles.container}>
      <Ionicons
        name="calendar-outline"
        size={85}
        color="#FFFFFF"
        style={styles.icon}
      />

      <Text style={styles.title}>Insira sua data de nascimento</Text>

      <View style={styles.inputDate}>
        <DateInput
          value={date}
          onChange={handleDateChange}
          errorMessage={errorMessage}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={validateAndNavigate}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  icon: {
    marginBottom: "25%",
  },
  inputDate: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#d55a2d",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});

export default HomeScreen;
