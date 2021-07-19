export const timeDifference = (timestamp: number, locale: string) => {

  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const current = Date.now();
  const elapsed = current - timestamp;

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

  if (elapsed < msPerMinute) {
       return rtf.format(-Math.floor(elapsed/1000), 'seconds');
  }

  else if (elapsed < msPerHour) {
       return rtf.format(-Math.floor(elapsed/msPerMinute), 'minutes');
  }

  else if (elapsed < msPerDay) {
       return rtf.format(-Math.floor(elapsed/msPerHour), 'hours');
  }

  else {
      return new Date(timestamp).toLocaleDateString(locale);
  }
}