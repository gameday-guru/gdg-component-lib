import React, { FC } from 'react';
import { ontology, viusage } from '../../../../util';
export declare const MATCHUPS_CONTENT_CONTAINER_CLASSNAMES: string[];
export declare const MATCHUPS_CONTENT_CONTAINER_STYLE: React.CSSProperties;
export declare const MATCHUPS_CONTENT_INNER_CLASSNAMES: string[];
export declare const MATCHUPS_CONTENT_INNER_STYLE: React.CSSProperties;
export declare type MatchupsContentProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    viusage?: viusage.primary.Viusagelike;
    gamesThisWeek?: ontology.ProjectedGamelike[];
    allUpcomingGames?: ontology.ProjectedGamelike[];
    onTeamClick?: (teamId: string) => Promise<void>;
    onMatchupClick?: (gameId: string) => Promise<void>;
};
export declare const MatchupsContent: FC<MatchupsContentProps>;