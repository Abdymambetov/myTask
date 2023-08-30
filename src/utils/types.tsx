import { Dayjs } from "dayjs";
import { ReactNode } from "react";

export interface ICellProps{
    day: Dayjs;
    index: number;
    contribution: Record<string, number>;
    defaultCountTooltip?: number
}

export interface ITooltipProps{
    count: number;
    date: string;
    showDate: boolean;
    children: ReactNode
}

export interface ITypographyProps{
    children: ReactNode;
    variant?: 'text' | 'tooltip_title' | 'tooltip_text' | 'small' 
}

export interface IGraphProps{
    contribution: Record<string, number>
}


