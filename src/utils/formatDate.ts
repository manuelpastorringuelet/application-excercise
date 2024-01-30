import dateFormat from "dateformat";

export const formatDate = (date: Date, format = "mmmm dS, yyyy, h:MM TT") => {
  if (!date) return "";
  return dateFormat(new Date(date), format);
};

export default formatDate;
