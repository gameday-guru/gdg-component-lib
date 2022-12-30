import React, {FC, ReactElement} from 'react';
import { MainSidebar } from '../../../../../assemblies/meta';
import { MatchupContent } from '../../../../../assemblies/meta/content/MatchupContent';
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

export type MatchupProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    teams ? : { [key : string] : ontology.Teamlike };
    onWhich ? : (which : "home" | "team" | "matchups")=>Promise<void>;
    homeDistro ? : ontology.PointDistributionlike;
    home ? : ontology.Teamlike;
    homeEfficiency ? : ontology.EfficiencyEntrylike;
    awayDistro ? : ontology.PointDistributionlike;
    away ? : ontology.Teamlike;
    awayEfficiency ? : ontology.EfficiencyEntrylike;
    gameProjection ? : ontology.ProjectionEntrylike;
    gameProjections ? : ontology.ProjectionEntrylike[];
    leagueAverages ? : ontology.LeagueAverageslike;
    homeGameProjections ? : ontology.ProjectedGamelike[];
    awayGameProjections ? : ontology.ProjectedGamelike[];
    game ? : ontology.GameByDatelike;
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
};

export const Matchup : FC<MatchupProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? MATCHUPS_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? MATCHUPS_STYLE : {}, ...props.style}}>
            <div style={{
                height : '100%',
                width : '100%'
            }}>
                <MainSidebar
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
                <MatchupContent
                onMatchupClick={props.onMatchupClick}
                onTeamClick={props.onTeamClick}
                game={props.game}
                home={props.home}
                homeDistro={props.homeDistro}
                homeEfficiency={props.homeEfficiency}
                away={props.away}
                awayDistro={props.awayDistro}
                awayEfficiency={props.awayEfficiency}
                gameProjection={props.gameProjection}
                gameProjections={props.gameProjections}
                leagueAverages={props.leagueAverages}
                homeGameProjections={props.homeGameProjections}
                awayGameProjections={props.awayGameProjections}/>
            </div>
        </div>
    )
};