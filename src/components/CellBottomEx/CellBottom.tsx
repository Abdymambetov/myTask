import { FC } from "react"
import classes from './CellBottom.module.scss'
import { Typography } from "../UI"
import Cell from "../Cell/Cell"
import dayjs from "dayjs"

const CellBottom: FC = () => {
    const exemple = [0, 1, 10, 20, 30]
    return (
        <div className={classes.main}>
            <Typography variant="small">
                Меньше
            </Typography>
            <div className={classes.cells}>
                {exemple.map(item => 
                    <Cell defaultCountTooltip={item} contribution={{}} index={item} key={item} day={dayjs()}/>
                )}
            </div>
            <Typography variant="small">
                Больше
            </Typography>
        </div>
    )
}

export default CellBottom