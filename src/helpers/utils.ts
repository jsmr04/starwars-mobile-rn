import moment from 'moment';

export const getFormattedDateTime = (date: string)=>{
  return moment(date).format('MM/DD/YYYY HH:mm:ss');
}

export const getFormattedDate = (date: string)=>{
  return moment(date).format('MM/DD/YYYY');
}

export const formatDescription = (description: string) =>
  `${description.replace('\r', '').replace('\n', '').substring(0, 50)} ...`;