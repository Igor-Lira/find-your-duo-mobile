import { useEffect, useState } from "react";
import { Image, FlatList } from "react-native";
import { styles } from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import { Heading } from "../../components/background/Heading";

import logoImg from "../../assets/logo-nlw-esports.png";
import { GameCard, GameCardProps } from "../../components/background/GameCard";
import { Background } from "../../components/background";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const [games, setGames] = useState<GameCardProps>();
  useEffect(() => {
    fetch("http://192.168.0.142:3333/games")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);
  const navigation = useNavigation();
  function handleOpenGame({ id, title, bannerUlr }: GameCardProps) {
    navigation.navigate("game", { id, title, bannerUlr });
  }
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo}></Image>
        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        ></Heading>
        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GameCard
              data={item}
              onPress={() => handleOpenGame(item)}
            ></GameCard>
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
          horizontal
        />
      </SafeAreaView>
    </Background>
  );
}
