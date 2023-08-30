import { FC } from "react";
import { ICellProps } from "../../utils/types";
import classes from './Cell.module.scss'
import { formDate } from "../../utils/constants";
import { Tooltip } from "../UI";


const getContributionRange = (count: number) => {
    if(count >= 1 && count <=9){
        return classes.two;
    } else if(count >=10 && count <=19){
        return classes.three;
    } else if(count >= 20 && count <=29){
        return classes.four;
    } else if(count >= 30){
        return classes.five
    } else{
        return classes.one
    }
};

const Cell: FC<ICellProps> =({day, index, contribution, defaultCountTooltip}) => {
    const date = day.add(index, 'day');
    const contributionCount = contribution?.[date.format(formDate)] ?? 0;

    return(
        <Tooltip 
            showDate={defaultCountTooltip ? false : true} 
            count={defaultCountTooltip ?? contributionCount} 
            date={date.format('dddd, MMMM D, YYYY')}
        >
            <div className={`${classes.cell} ${getContributionRange(defaultCountTooltip ?? contributionCount)}`}/>
        </Tooltip>
    )
}
export default Cell;