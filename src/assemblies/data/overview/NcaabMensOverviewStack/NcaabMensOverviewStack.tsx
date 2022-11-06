import React, {FC, ReactElement} from 'react';

export const NCAAB_MENS_OVERVIEW_STACK_CLASSNAMES : string[] = [ 
    "grid",
    "gap-4"
];
export const NCAAB_MENS_OVERVIEW_STACK_STYLE : React.CSSProperties = {
};

export type NcaabMensOverviewStackProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const NcaabMensOverviewStack : FC<NcaabMensOverviewStackProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? NCAAB_MENS_OVERVIEW_STACK_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? NCAAB_MENS_OVERVIEW_STACK_STYLE : {}, ...props.style}}>
            <div>
                {/** TODO: NcaabMensBlogs */}
            </div>
            <div>
                {/** TODO: NcaabMensGameOfTheDay */}
            </div>
            <div>
                {/** TODO: NcaabMensUpcomingGames */}
            </div>
        </div>
    )
};