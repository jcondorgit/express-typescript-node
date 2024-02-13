import { newDiaryEntry} from '../types';
import { Weather, Visibility } from '../enums';

const parseComment = (commentFromRequest: any): string =>{
  if (!isString( commentFromRequest )) {
    throw new Error('Incorrect or missing comment')
  }

  return commentFromRequest
}
const parseDate = (dateFromRequest: any): string =>{
  if (!isString( dateFromRequest ) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }

  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any):Weather=>{
  if (!isString( weatherFromRequest ) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing Weather')
  }

  return weatherFromRequest
}

const parseVisibility = ( visibilityFromRequest: any ):Visibility => {
  if (!isString( visibilityFromRequest ) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing Visibility')
  }

  return visibilityFromRequest
}

const isString = (string:string):boolean => {
  return typeof string === 'string'
}
const isDate = (date:string):boolean => {
  return Boolean(Date.parse(date))
}

const isWeather = (weather:any):boolean => {
  return Object.values(Weather).includes(weather)
}

const isVisibility = (visibility:any):boolean => {
  return Object.values(Visibility).includes(visibility)
}

const toNewDiaryEntry = (object:any): newDiaryEntry => {
  
  const newEntry: newDiaryEntry = {
    comment: parseComment( object.comment ),
    date: parseDate( object.date ),
    weather: parseWeather( object.weather ),
    visibility:parseVisibility( object.visibility )
  }
  
  return newEntry
}

export default toNewDiaryEntry
