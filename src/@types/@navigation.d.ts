export interface GameParams {
  id: string;
  title: string;
  bannerUlr: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      game: {
        id: string;
        title: string;
        bannerUlr: string;
      };
    }
  }
}
