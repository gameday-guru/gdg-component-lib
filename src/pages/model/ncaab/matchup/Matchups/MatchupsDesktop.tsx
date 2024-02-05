import React, {FC, ReactElement} from 'react';
import { MainSidebar } from '../../../../../assemblies/meta';
import { MatchupsContent } from '../../../../../assemblies/meta/content/MatchupsContent';
import { ontology } from '../../../../../util';

export const MATCHUPS_CLASSNAMES : string[] = [
    "h-screen",
    "w-screen",
    "grid",
    "justify-items-center",
    "items-center",
    "text-drk-gray-900",
];
export const MATCHUPS_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 6fr"
};

export type MatchupsDesktopProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    teams ? : { [key : string] : ontology.Teamlike };
    onWhich ? : (which : "home" | "team" | "matchups" | "bracket")=>Promise<void>;
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
    gamesThisWeek ? : ontology.ProjectedGamelike[];
    allUpcomingGames ? : ontology.ProjectedGamelike[];
    headerProjectedGames ? : ontology.ProjectedGamelike[];
    headerTeams ? : ontology.Teamlike[];
    onFeedbackSubmit ?  : (feedback : string)=>Promise<void>;
    onAccountClick ? : ()=>Promise<void>;
};

export const MatchupsDesktop : FC<MatchupsDesktopProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? MATCHUPS_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? MATCHUPS_STYLE : {}, ...props.style}}>
            <div style={{
                height : '100%',
                width : '100%'
            }}>
                <MainSidebar
                onFeedbackSubmit={props.onFeedbackSubmit}
                onWhich={props.onWhich}
                 which='matchups'
                 style={{
                    height : '100%'
                }}/>
            </div>
            <div className='overflow-y-scroll' style={{
                height : '100%',
                width : '100%',
                overflow : 'scroll'
            }}>
                <MatchupsContent
                onAccountClick={props.onAccountClick}
                headerProjectedGames={props.headerProjectedGames}
                headerTeams={props.headerTeams}
                onMatchupClick={props.onMatchupClick}
                onTeamClick={props.onTeamClick}
                allUpcomingGames={props.allUpcomingGames}
                gamesThisWeek={props.gamesThisWeek}/>
            </div>
        </div>
    )
};