import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../../components';
import { ontology, viusage } from '../../../../../util';
import { Pill } from '../../../../../components';
import { Stacked } from '../../../../../components/output/containers/comparison';
import { TeamMatchupRowProjection } from '../../matchup/TeamMatchupRowProjection';
import { UpcomingGames } from '../../matchup';

export const NCAAB_MENS_ALL_UPCOMING_GAMES_CONTAINER_CLASSNAMES : string[] = [ 
    "p-4"
];
export const NCAAB_MENS_ALL_UPCOMING_GAMES_CONTAINER_STYLE : React.CSSProperties = {
};

export const NCAAB_MENS_ALL_UPCOMING_GAMES_INNER_CLASSNAMES : string[] = [ ];
export const NCAAB_MENS_ALL_UPCOMING_GAMES_INNER_STYLE : React.CSSProperties = {
    textAlign : "left"
};

export type NcaabMensAllUpcomingGamesProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    viusage ? : viusage.primary.Viusagelike
    which ? : string;
    allUpcomingGames ? : ontology.ProjectedGamelike[];
    onTeamClick ? : (teamId : string)=>Promise<void>;
};

const OPTIONS = [
    "This Week",
    "Big 12",
    "ACC", 
    "PAC 12", 
    "On the Bubble"
];

export const NcaabMensAllUpcomingGames : FC<NcaabMensAllUpcomingGamesProps>  = (props) =>{

    

    return (
        <Wrapper
            viusage={props.viusage||"wrap"}
            classNames={[...!props.overrideClasses ? NCAAB_MENS_ALL_UPCOMING_GAMES_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? NCAAB_MENS_ALL_UPCOMING_GAMES_CONTAINER_STYLE : {}, ...props.style}}>
            <div
            className={[...!props.overrideClasses ? NCAAB_MENS_ALL_UPCOMING_GAMES_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? NCAAB_MENS_ALL_UPCOMING_GAMES_INNER_STYLE : {}, ...props.style}}>
                <h2 className='text-xl'>All Upcoming Games</h2>
                <br/>
                <hr/>
                <br/>
                <UpcomingGames
                options={OPTIONS}
                onTeamClick={props.onTeamClick}
                games={props.allUpcomingGames}/>
            </div>
        </Wrapper>
    )
};