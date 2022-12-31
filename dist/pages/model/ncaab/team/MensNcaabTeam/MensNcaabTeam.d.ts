import React, { FC } from 'react';
import { ontology } from '../../../../../util';
export declare const MENS_NCAAB_TEAM_CLASSNAMES: string[];
export declare const MENS_NCAAB_TEAM_STYLE: React.CSSProperties;
export declare type MensNcaabTeamIndividualProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    tableEntries?: ontology.EfficiencyEntrylike[];
    teams?: {
        [key: string]: ontology.Teamlike;
    };
    team?: ontology.Teamlike;
    leagueAverages?: ontology.LeagueAverageslike;
    pointDistribution?: ontology.PointDistributionlike;
    games?: ontology.ProjectedGamelike[];
    onWhich?: (which: "home" | "team" | "matchups") => Promise<void>;
    efficiency?: ontology.EfficiencyEntrylike;
    onTeamClick?: (teamId: string) => Promise<void>;
    onMatchupClick?: (gameId: string) => Promise<void>;
    players?: ontology.Playerlike[];
};
export declare const MensNcaabTeam: FC<MensNcaabTeamIndividualProps>;