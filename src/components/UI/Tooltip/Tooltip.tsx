import { SyntheticEvent, useState, FC } from "react";
import { ITooltipProps } from "../../../utils/types";
import classes from './Tooltip.module.scss'
import { contributionsText, noText } from "../../../utils/constants";
import { Typography } from "..";

const Tooltip: FC<ITooltipProps> = ({date, children, count, showDate = true}) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleClick = () => {
        setShowTooltip(prev => !prev)
    }

    const handleClose = (e: SyntheticEvent<HTMLDivElement>) => {
        e.stopPropagation()
        setShowTooltip(false)
    }

    const isActive = (style: string) => showTooltip ? style : '';
    const addText = !showDate ? '+' : ''

    return (
        <div className={`${classes.tooltip_body} ${isActive(classes.active_block)}`} onClick={handleClick}>
            <div onClick={handleClose} className={`${classes.tooltip} ${isActive(classes.show)}`}>
                <Typography variant="tooltip_title">
                    {count === 0 ? noText : count.toString() + addText} {contributionsText}
                </Typography>
                {
                    showDate && (
                        <Typography variant="tooltip_text">
                            {date}
                        </Typography>
                    )
                }
            </div>
            {children}
        </div>
    )
}
export default Tooltip;