import { View, Image, FlatList } from "react-native";
import { styles } from "./style";
import { Heading } from "../../components/background/Heading";

import logoImg from "../../assets/logo-nlw-esports.png";
import { GameCard } from "../../components/background/GameCard";
import { GAMES } from "../../utils/games";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo}></Image>
      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      ></Heading>
      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item}></GameCard>}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
        horizontal
      />
    </View>
  );
}
