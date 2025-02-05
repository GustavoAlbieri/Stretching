import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import stretches from "../dataBase/stretches";
import { AgeContext } from "../context/AgeContext";

const StretchingScreen = ({ navigation }) => {
  const { age } = useContext(AgeContext);

  if (!age) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Por favor, insira sua data de nascimento na tela inicial.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Início")}
        >
          <Text style={styles.buttonText}>Voltar para o Início</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const getStretchesByAge = (age) => {
    if (age <= 18) return stretches["0-18"];
    if (age <= 35) return stretches["19-35"];
    if (age <= 60) return stretches["36-60"];
    return stretches["61+"];
  };

  const recommendedStretches = getStretchesByAge(age);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alongamentos Recomendados</Text>
      <FlatList
        data={recommendedStretches}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.stretchItem}>
            <Text style={styles.stretchName}>{item.name}</Text>
            <Text style={styles.stretchDescription}>{item.description}</Text>
            {/* Exibe a imagem do alongamento */}
            {item.image && (
              <Image
                source={
                  typeof item.image === "string"
                    ? { uri: item.image } // Se for uma URL
                    : item.image // Se for um caminho local
                }
                style={styles.stretchImage}
                resizeMode="cover"
              />
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    marginTop: "10%",
    color: "#FFFFFF",
  },
  stretchItem: {
    marginBottom: 20,
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  stretchName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  stretchDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  stretchImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#d55a2d", // Cor de fundo
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    shadowColor: "#000", // Sombra para o efeito de destaque
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Sombra para Android
  },
  buttonText: {
    color: "#fff", // Cor do texto
    fontSize: 18,
    textAlign: "center",
  },
});

export default StretchingScreen;
