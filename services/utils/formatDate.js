import Moment from "moment";
import "moment/locale/pl";

export default formatDate = (date) => {
  return Moment(new Date(date.toDate())).format("LL");
};
