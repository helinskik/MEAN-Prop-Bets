import { ModuleWithProviders } from '@angular/core';

export interface IBet {
    _id: string;
    question:  string;
    questionText: string;
    guess:  string;
    answer:  string;
    playerId:  string;
    groupId:  string;
    eventId: string
}

export interface IEvent {
    _id: string;
    name:  string;
    start: Date;
    hasEnded?: boolean;
}

export interface IGame {
    _id: string;
    name:  string;
    eventId: string;
}

export  interface  IPlayer {
    _id: string;
    name:  string;
    gameId:  string;
    record?: string;
}

export interface IRouting {
    routes: ModuleWithProviders,
    components: any[]
}

export interface IPagedResults<T> {
    totalRecords: number;
    results: T;
}

export interface IBetResponse {
    bet: IBet;
    status: boolean;
    error: string;
}

export interface IGameResponse {
    game: IGame;
    status: boolean;
    error: string;
}

export interface IEventResponse {
    event: IEvent;
    status: boolean;
    error: string;
}

export interface IPlayerResponse {
    player: IPlayer;
    status: boolean;
    error: string;
}