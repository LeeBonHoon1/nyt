export const convertLanguage = (countries: string[]) => {
  const countryMap: { [key: string]: string } = {
    china: '중국',
    japan: '일본',
    northkorea: '북한',
    korea: '한국',
    usa: '미국',
    russia: '러시아',
    france: '프랑스',
    uk: '영국',
  };

  return countries.map(item => countryMap[item] || item);
};
