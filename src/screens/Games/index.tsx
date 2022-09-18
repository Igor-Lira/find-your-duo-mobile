import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

import logoImg from "../../assets/logo-nlw-esports.png";
import { THEME } from "../../theme";
import { styles } from "./styles";

import { GameParams } from "../../@types/@navigation";
import { Heading } from "../../components/background/Heading";
import { Background } from "../../components/background";
import { DuoCard, DuoCardProps } from "../../components/background/DuoCard";

export function Game() {
  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;

  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  useEffect(() => {
    fetch(`http://192.168.0.142:3333/games/${game.id}/ads`)
      .then((res) => res.json())
      .then((data) => setDuos(data));
  }, []);

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo name="chevron-thin-left" color={THEME.COLORS.CAPTION_300} />
          </TouchableOpacity>

          <Image source={logoImg} style={styles.logo}></Image>

          <View style={styles.right}></View>
        </View>

        <Image
          source={{ uri: game.bannerUlr }}
          style={styles.cover}
          resizeMode="cover"
        ></Image>
        <Heading
          title={game.title}
          subtitle="Conecte-se e comece a jogar!"
        ></Heading>

        <FlatList
          data={duos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DuoCard data={item} onConnnect={() => {}} />
          )}
          style={styles.containerList}
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </SafeAreaView>
    </Background>
  );
}
