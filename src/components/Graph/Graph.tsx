import { FC } from "react";
import { IGraphProps } from "../../utils/types";
import dayjs from "dayjs";
import { Typography } from "../UI";
import { cutMonthText } from "../../utils/helps";
import { formDate } from "../../utils/constants";
import classes from './Graph.module.scss'
import Cell from "../Cell/Cell";


const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const weekDaysColumns = ['Пн', '', 'Ср', '', 'Пт', '', ''];
const allDaysNum = 357;
const numberofColumns = 51;

const Graph: FC<IGraphProps> =({contribution}) => {
    const today = dayjs();
    const weekStart = today.endOf('week').add(1, 'day');
    const startDate = weekStart.subtract(allDaysNum, 'days')

    const renderColumns = () => {
        let previousMonth = null;
        const columns = [];
        const month = [];

        for(let i =0; i< numberofColumns; i++){
            const startOfWeek = startDate.add(i * 7, 'day')
            const currentMonth = startOfWeek.format('MMMM')

            if(currentMonth !== previousMonth){
                previousMonth = currentMonth;
                month.push(
                    <Typography variant="text">
                        {cutMonthText(currentMonth)}
                    </Typography>
                )
            }

            columns.push(
                <div key={startOfWeek.format(formDate)} className={classes.week_columns}>
                    {weekdays.map((day, index) => (
                        <Cell key={day} day={startOfWeek} index={index} contribution={contribution}/>
                    ))}
                </div>
            );
        }
        return [columns, month];
    };
    const [columns, month] = renderColumns()

    return(
        <div className={classes.main}>
            <div className={classes.week_days}>
                {weekDaysColumns.map(item => (
                    <Typography key={item} variant="text">
                        {item}
                    </Typography>
                ))}
            </div>
            <div className={classes.graph}>
                <div className={classes.month_wrapper}>
                {month}
                </div>
                {columns}
            </div>
        </div>
    )
}

export default Graph;