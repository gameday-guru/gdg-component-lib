import React, {FC, ReactElement} from 'react';
import { MainSidebar } from '../../../../../assemblies/meta';
import { MensNcaabTeamContent } from '../../../../../assemblies/meta/content/NcaabMensTeamContent';
import { ontology } from '../../../../../util';
import { MobileNav } from '../../../../../assemblies/meta/nav/NcaabMobileNav/MobileNav';

export const MENS_NCAAB_TEAMS_CLASSNAMES : string[] = [ 
    "h-screen",
    "w-screen",
    "grid",
    "justify-items-center",
    "items-center",
    "text-drk-gray-900",
];
export const MENS_NCAAB_TEAMS_STYLE : React.CSSProperties = {
    gridTemplateRows : "1fr 9fr"
};

export type MensNcaabTeamsMobileProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    tableEntries ? : ontology.EfficiencyEntrylike[];
    teams ? : { [key : string] : ontology.Teamlike };
    topOffensiveTeams ? : ontology.Teamlike[];
    topOffensiveTeamsStats ? : React.ReactNode[];
    topDefensiveTeams ? : ontology.Teamlike[];
    topDefensiveTeamsStats ? : React.ReactNode[];
    onWhich ? : (which : "home" | "team" | "matchups" | "bracket")=>Promise<void>;
    onBuildMatchup ? : (home : string, away : string)=>Promise<void>;
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
    headerProjectedGames ? : ontology.ProjectedGamelike[];
    headerTeams ? : ontology.Teamlike[];
    onFeedbackSubmit ?  : (feedback : string)=>Promise<void>;
    onAccountClick ? : ()=>Promise<void>;
};

export const MensNcaabTeamsMobile : FC<MensNcaabTeamsMobileProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? MENS_NCAAB_TEAMS_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? MENS_NCAAB_TEAMS_STYLE : {}, ...props.style}}>
            <div style={{
                height : '100%',
                width : '100%'
            }}>
                <MobileNav 
                onAccountClick={props.onAccountClick}
                onFeedbackSubmit={props.onFeedbackSubmit}
                onWhich={props.onWhich} 
                which='matchups'/>
            </div>
            <div className='overflow-y-scroll' style={{
                height : '100%',
                width : '100%',
                overflow : 'scroll'
            }}>
                <MensNcaabTeamContent
                onAccountClick={props.onAccountClick}
                headerProjectedGames={props.headerProjectedGames}
                headerTeams={props.headerTeams}
                onMatchupClick={props.onMatchupClick}
                onTeamClick={props.onTeamClick}
                onBuildMatchup={props.onBuildMatchup}
                topDefensiveTeams={props.topDefensiveTeams}
                topDefensiveTeamsStats={props.topDefensiveTeamsStats}
                topOffensiveTeams={props.topOffensiveTeams}
                topOffensiveTeamsStats={props.topOffensiveTeamsStats}
                tableEntries={props.tableEntries}
                teams={props.teams}/>
            </div>
        </div>
    )
};