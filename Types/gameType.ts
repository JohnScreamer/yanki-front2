export interface Game {
    price: number;
    imgUrl: string;
    name: string;
    platform: string;
    localizetion: string;
    discType: string;
    genre: string;
    box: string;
    developer: string;
    pg: number;
    publisher: string;
    features: string;
    developCountry: string;
    brendFrom: string;
    release: string;
    releaseUkr: string;
    systemRequirements: string;
    playersNum: string;
    Guarantee: string;
    servicActiv: string;
    minRequireSis: string;
    distributorInUkraine: string;
    _id: string;
}
export interface AllGames {
    status: "ok";
    amount: number;
    games: Array<Game>;
}

export interface GetGame {
    status: "ok";
    game: Game;
}
