import React, {FC, ReactElement, useEffect, useState, useRef} from 'react';
import { Home as HomePage } from "../pages";
import { ontology } from '../util';
import { 
    getGamesInNextWeekTable,
    getTeams,
    getTeamsTable
} from '../util/firebase';
import { MockHomeEff, MockProjection } from '../util/ontology';
import { getEfficiencyTable, getProjectionTable } from '../util/rpc';

export const HOME_CLASSNAMES : string[] = [ ];
export const HOME_STYLE : React.CSSProperties = {
};

export type HomeProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const Home : FC<HomeProps>  = (props) =>{

    const [games, setGames] = useState<{[key : string] : ontology.GameByDatelike}>({});
    useEffect(()=>{

        getGamesInNextWeekTable(new Date())
        .then((data)=>{
            console.log(data);
            setGames(data);
        });

    }, []);

    const [teams, setTeams] = useState<{
        [key : string] : ontology.Teamlike
    }>({});
    useEffect(()=>{

        getTeamsTable()
        .then((data)=>{
            setTeams(data);
        });

    }, []);

    const [efficiency, setEfficiency] = useState<{
        [key : string] : ontology.EfficiencyEntrylike
    }>({});
    useEffect(()=>{

        getEfficiencyTable()
        .then((data)=>{
            setEfficiency(data);
        });

    }, []);

    const [projectionTable, setProjectionTable] = useState<ontology.ProjectionTablelike>(
        {}
    );
    useEffect(()=>{

        getProjectionTable()
        .then((data)=>{
            setProjectionTable(data);
        });

    }, []);


    const _apTop25Teams = 
    Object.values(teams)
    .filter(team=>(team.ApRank||Number.MAX_SAFE_INTEGER) < 26)
    .sort((teamA, teamB)=>(teamA.ApRank||Number.MIN_SAFE_INTEGER)-(teamB.ApRank||Number.MIN_SAFE_INTEGER));
    const _apTop25RankedTeams : ontology.RankTrendTeamlike[] = [];
    for(const team of _apTop25Teams)
        _apTop25RankedTeams.push({
            team,
            rank : team.ApRank||25,
            trend : true,
            efficiency : efficiency[team.TeamID]
        })

    const _top25TeamIds =
    new Set(_apTop25Teams.map((team)=>team.TeamID));

    const _gdgTop25Teams = 
    Object.values(teams)
    .sort((teamA, teamB)=>{ 

        return (
            ((.56 * efficiency[teamB.TeamID]?.oe||0) - (.44 * efficiency[teamB.TeamID]?.de||0)) -
           ((.56 * efficiency[teamA.TeamID]?.oe||0) - (.44 * efficiency[teamA.TeamID]?.de||0)) 
        )

    })
    .filter((team, i)=>(i < 25))
    const _gdgTop25RankedTeams : ontology.RankTrendTeamlike[] = _gdgTop25Teams
    .map((team, i)=>{
        return (
            {
                team,
                rank : i + 1,
                trend : true,
                efficiency : efficiency[team.TeamID]
            }
        )
    });

    const _top25Games =
    Object.values(games)
    .filter(game=>_top25TeamIds.has(game.AwayTeamID)||_top25TeamIds.has(game.HomeTeamID));

    const _top25ProjectedGames : ontology.ProjectedGamelike[] = [];
    for(const game of _top25Games)
        _top25ProjectedGames.push({
            game,
            gameProjection : projectionTable[game.GameID]||MockProjection,
            home : teams[game.HomeTeamID],
            away : teams[game.AwayTeamID]
        })

    const _gameOfTheDay =
    _top25ProjectedGames.sort((a, b)=>{
        return (
            a.gameProjection.home_team_score
            + a.gameProjection.away_team_score
        ) - (
            b.gameProjection.home_team_score
            + b.gameProjection.away_team_score
        )
    })[0];

    return (
        <HomePage
            gdgTop25Teams={_gdgTop25RankedTeams}
            apTop25Teams={_apTop25RankedTeams}
            top25Games={_top25ProjectedGames}
            gameOfTheDay={_gameOfTheDay}/>
    )
};