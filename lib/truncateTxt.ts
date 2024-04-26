export function truncateText(text: any, maxLength: any) {
    if (text.length <= maxLength) {
      return text;
    } else {
      const truncatedText = text.substring(0, 7) + ' ... ' + text.substring(text.length - 3);
      return truncatedText;
    }
  }