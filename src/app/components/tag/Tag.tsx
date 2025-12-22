import { FC } from "react"

type TagProps = {
    color: string,
    accentColor: string,
    pseudoColorAfter: string,
    pseudoColorBefore: string,
    data: string
} 

export const Tag: FC<TagProps> = (tagProps) => {
    const { color, accentColor, data, pseudoColorAfter, pseudoColorBefore} = tagProps
    return(
        <div className={`lg:block hidden h-full absolute left-initial lg:left-[-40px] top-[15px] after:content-[''] after:h-[calc(100%_-_58px)] after:w-[3px] after:absolute after:left-[5px] after:top-[10px] ${pseudoColorAfter}
        before:z-0 before:content-[''] before:w-[3px] before:h-[60px] before:absolute before:left-[26px] before:-bottom-[2px] before:-rotate-45 ${pseudoColorBefore}
        `}>
            <div className={`top-[1px] rounded-[1px] relative h-3 w-3 ${color} rotate-45`}></div>
            <div className={`z-20 top-[-5.5px] left-[-2px] capitalize h-fit w-[16px] py-0.5 ${color} no-height-change-rotate relative z-10`}>
                <span className={`relative left-[4px] text-[11px] font-bold ${accentColor}`}>{data}</span>
            </div>
            <div className={`z-10 rounded-[1px] top-[-18px] relative h-3 w-3 ${color} rotate-45`}></div>
            <div></div>
        </div>
    )
}