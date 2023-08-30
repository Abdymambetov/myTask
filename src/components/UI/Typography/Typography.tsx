import { FC } from "react";
import { ITypographyProps } from "../../../utils/types";
import classes from './Typography.module.scss'


const Typography: FC<ITypographyProps> = ({variant = 'text', children})=> {
    return (
        <p className={classes[variant]}>
            {children}
        </p>
    )
}

export default Typography;