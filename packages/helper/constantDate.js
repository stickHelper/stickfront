const { format, subDays, subMonths, subYears, getMonth, getYear } = require('date-fns')

const TODAY_DATE = format(new Date(), 'yyyy-MM-dd')

const LAST_WEEK_DATE = format(subDays(new Date(), 7), 'yyyy/MM/dd')

const LAST_MONTH_DATE = format(subMonths(new Date(), 1), 'yyyy/MM/dd')

const LAST_THREE_MONTH_DATE = format(subMonths(new Date(), 3), 'yyyy/MM/dd')

const LAST_YEAR_DATE = format(subYears(new Date(), 1), 'yyyy/MM/dd')

const GET_MONTH = getMonth(new Date()) + 1

const GET_YEAR = getYear(new Date())

const GET_FIRST_DAY_DATE = format(new Date(`${GET_YEAR}-${GET_MONTH}-1`), 'yyyy-MM-dd')

const DEFAULT_DATE_QUERY = {
  start_date: GET_FIRST_DAY_DATE,
  end_date: format(new Date(), 'yyyy-MM-dd')
}

const constantDate = {
  today: TODAY_DATE,
  lastWeekDate: LAST_WEEK_DATE,
  lastMonthDate: LAST_MONTH_DATE,
  lastThreeMonthDate: LAST_THREE_MONTH_DATE,
  lastYearDate: LAST_YEAR_DATE,
  getMonth: GET_MONTH,
  getYear: GET_YEAR,
  getFirstDay: GET_FIRST_DAY_DATE,
  defaultDateQuery:  DEFAULT_DATE_QUERY
}

module.exports = constantDate
