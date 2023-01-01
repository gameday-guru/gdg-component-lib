import React, {FC, ReactElement} from 'react';
import { Button, Wrapper } from '../../../../../components';
import { DateString } from '../../generic';
import { H2H } from '../H2H';
import { ProjectionZeroSum } from '../../team/ProjectionZeroSum';
import { ProjectionWinPercentage } from '../../team/ProjectionWinPercentage';
import { ontology } from '../../../../../util';
import { Viusagelike } from '../../../../../util/viusage/primary';
import { MockOver } from '../../../../../components/output/MockOver';

export const TEAM_DETAILED_MATCHUP_CONTAINER_CLASSNAMES : string[] = [ ];
export const TEAM_DETAILED_MATCHUP_CONTAINER_STYLE : React.CSSProperties = {
};

export const TEAM_DETAILED_MATCHUP_INNER_CLASSNAMES : string[] = [ 
    "grid",
    "gap-4"
];
export const TEAM_DETAILED_MATCHUP_INNER_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 2fr",
    justifyContent : "center",
    justifyItems : "center",
    alignContent : "center",
    alignItems : "center"
};

export type TeamSemiDetailedMatchupProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    home ? : ontology.Teamlike;
    away ? : ontology.Teamlike;
    game ? : ontology.GameByDatelike;
    gameProjection ? : ontology.ProjectionEntrylike;
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
    viusage ? : Viusagelike;
};

export const TeamSemiDetailedMatchup : FC<TeamSemiDetailedMatchupProps>  = (props) =>{

    const _home = props.home||ontology.MockHome;
    const _away = props.away||ontology.MockAway;
    const _gameProjection = props.gameProjection||ontology.MockProjectedGame.gameProjection;

    const handleMatchupClick = async ()=>{
        console.log(props.game);
        if(props.game) props.onMatchupClick && props.onMatchupClick(props.game.GameID.toString())
    }

    const _rowProjectionZeroSum = <MockOver
        Content={<ProjectionZeroSum
            homeScore={_gameProjection.home_team_score}
            awayScore={_gameProjection.away_team_score}/>}
        dependencies={[_gameProjection]}/>

    const _projectionWinPercentage = <MockOver
        Content={<ProjectionWinPercentage 
            homeTeam={_home}
            awayTeam={_away}
            gameProjection={_gameProjection}/>}
            dependencies={[_home, _away, _gameProjection]}/>

    return (
        <Button
            onClick={handleMatchupClick}
            viusage={props.viusage||"wrap"}
            classNames={[...!props.overrideClasses ? TEAM_DETAILED_MATCHUP_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? TEAM_DETAILED_MATCHUP_CONTAINER_STYLE : {}, ...props.style}}>
            {props.game ? <div style={{
                display : "grid",
                justifyContent : "center",
                justifyItems : "center"
            }}>
                <DateString date={new Date((props.game as any)?.DateTime||0)}/>
            </div> : <div>
                <h2 className="text-gdg-500 text-lg">Projection Only</h2>    
            </div>}
            <br/>
            <div
            className={[...!props.overrideClasses ? TEAM_DETAILED_MATCHUP_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? TEAM_DETAILED_MATCHUP_INNER_STYLE : {}, ...props.style}}>
                <div className='text-sm'>   
                    <H2H
                        viusage={props.viusage||"wrap"}
                        onTeamClick={props.onTeamClick}
                        Home={props.home}
                        Away={props.away}/>
                </div>
                <div className='gap-2' style={{
                    display : "grid",
                    alignContent : "center",
                    gridTemplateColumns : "1fr 1fr"
                }}>
                    {_rowProjectionZeroSum}
                    {_projectionWinPercentage}
                </div>
            </div>
        </Button>
    )
};