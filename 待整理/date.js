import moment from 'moment'

/**
 *
 * 日期格式字符串转换date类型
 * 19980909  -->>   1998-09-09 00:00:00
 *
 */
export function strToDate(msg) {
  let length = str.length
  let date = ''
  let str = ''
  if (length == 8) {
    date = msg.slice(0, 4) + '-' + msg.slice(4, 6) + '-' + msg.slice(6)
    str = moment(date).format('YYYY-MM-DD')
  } else if (length == 6) {
    date = msg.slice(0, 4) + '-' + msg.slice(4)
    str = moment(date).format('YYYY-MM')
  } else {
    date = msg
    str = moment(date).format('YYYY')
  }
  return str
}

/**
 *
 * 日期格式转字符串
 *
 */
export function dateToStr(time) {
  var date = new Date(time)
  var year = date.getFullYear()
  /* 在日期格式中，月份是从0开始的，因此要加0
   * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
   * */
  var month =
    date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  // var hours=date.getHours()<10 ? "0"+date.getHours() : date.getHours();
  // var minutes=date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes();
  // var seconds=date.getSeconds()<10 ? "0"+date.getSeconds() : date.getSeconds();
  // 拼接
  // return year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
  return year + '-' + month + '-' + day
}

export function test() {
  console.log('123123')
}
