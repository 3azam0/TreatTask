import moment from 'moment';

export const getNextMonthDays = () => {
  let data = [];

  for (let i = 0; i < 40; i++) {
    const inThirtyDays = moment().add('day', i);
    data.push(inThirtyDays);
  }

  return data;
};

export const getTagsText = list => {
  let text = '';
  list?.map((item, index) => {
    return (text += item + `${index == list.length - 1 ? '' : ' - '}`);
  });
  return text;
};

export const arabicNumbersToEnglish = text =>
  text.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));

export const getCursor = link => {
  let cursor = null;
  if (link) {
    const regex = /[\?&]cursor=([^&#]*)/;
    cursor = regex.exec(link)[1];
  }
  return cursor;
};
