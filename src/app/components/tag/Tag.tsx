import { FC } from "react"

type TagProps = {
    color: string,
    accentColor: string,
    pseudoColor: string,
    data: string
} 

export const Tag: FC<TagProps> = (tagProps) => {
    const { color, accentColor, data, pseudoColor} = tagProps
    return(
        <div className={`h-full absolute -right-2 left-initial lg:left-[-40px] top-[15px] after:content-[''] after:h-[calc(100%_-_40px)] after:w-[2px] after:absolute after:left-[5px] after:top-[10px] ${pseudoColor}`}>
            <div className={`top-[1px] rounded-[1px] relative h-3 w-3 ${color} rotate-45`}></div>
            <div className={`z-20 top-[-5.5px] left-[-2px] capitalize h-fit w-[16px] py-0.5 ${color} no-height-change-rotate relative z-10`}>
                <span className={`relative left-[4px] text-[11px] font-bold ${accentColor}`}>{data}</span>
            </div>
            <div className={`z-10 rounded-[1px] top-[-18px] relative h-3 w-3 ${color} rotate-45`}></div>
            <div></div>
        </div>
    )
}