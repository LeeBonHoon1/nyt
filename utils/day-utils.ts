import dayjs from "dayjs";

export const getDate = (date: string) => {
  return dayjs(date).format('YYYY.MM.DD');
}

export const getDayOfWeek = (date: string) => {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const day = dayjs(date).day();
  return `(${daysOfWeek[day]})`;
}
