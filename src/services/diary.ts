import diaryData from '../services/diaries.json'
import { DiaryEntry, NonSensitiveInfoDiaryEntries, newDiaryEntry } from '../types'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = ():DiaryEntry[] => diaries

export const findById = (id:number):NonSensitiveInfoDiaryEntries | undefined =>{
    const entry = diaries.find( d => d.id === id)
    if( entry != null ){
        const {comment, ...restOfDiary} = entry
        return restOfDiary
    }
    return undefined 
}

export const getEntriesWithoutSensitiveInfo = ():NonSensitiveInfoDiaryEntries[] => {
    return diaries.map( ({id, date, weather, visibility}) => {
        return{
            id,
            date,
            weather,
            visibility
        }
    })
}


export const addDiary = ( newDiaryEntry:newDiaryEntry ): DiaryEntry => {
    
    const newDiary = {
        id: Math.max(...diaries.map( d => d.id)) + 1,
        ...newDiaryEntry
    }

    diaries.push( newDiary )
    
    return newDiary
} 