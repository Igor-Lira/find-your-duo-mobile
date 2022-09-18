import { View, TouchableOpacity, Text } from "react-native";
import { GameController } from "phosphor-react-native";

import { styles } from "./styles";
import { DuoInfo } from "../../DuoInfo";
import { THEME } from "../../../theme";

export interface DuoCardProps {
  id: string;
  hoursEnd: string;
  hoursStart: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}
interface Props {
  data: DuoCardProps;
  onConnnect: () => void;
}
export function DuoCard({ data, onConnnect }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={data.name} />
      <DuoInfo label="Tempo de jogo" value={`${data.yearsPlaying} anos`} />
      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hoursStart} - ${data.hoursEnd}`}
      />
      <DuoInfo
        label="Chamada de áudio"
        value={data.useVoiceChannel ? "Sim" : "Não"}
        colorValue={
          data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />
      <TouchableOpacity style={styles.button} onPress={onConnnect}>
        <GameController color={THEME.COLORS.TEXT} size={20} />
        <Text style={styles.buttonTitle}> Conectar </Text>
      </TouchableOpacity>
    </View>
  );
}
