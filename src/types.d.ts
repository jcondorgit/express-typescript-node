//Todos los tipos admitidos en este paquete
//export type Weather = 'sunny' | 'rayni' | 'cloudy' | 'windy' | 'stormy'
//export type Visibility = 'great' | 'poor' | 'good' | 'ok'

import { Visibility, Weather } from "./enums"


export interface DiaryEntry{
    id: number
    date: string
    weather: Weather
    visibility: Visibility
    comment: string
}

export type NonSensitiveInfoDiaryEntries = Omit<DiaryEntry, 'comment'>
export type newDiaryEntry = Omit<DiaryEntry, 'id'>