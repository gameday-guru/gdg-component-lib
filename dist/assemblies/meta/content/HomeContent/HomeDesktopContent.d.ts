import React, { FC } from 'react';
import { viusage } from '../../../../util';
import { ontology } from '../../../../util';
export declare const HOME_DESKTOP_CONTENT_CONTAINER_CLASSNAMES: string[];
export declare const HOME_DESKTOP_CONTENT_CONTAINER_STYLE: React.CSSProperties;
export declare const HOME_DESKTOP_CONTENT_INNER_CLASSNAMES: string[];
export declare const HOME_DESKTOP_CONTENT_INNER_STYLE: React.CSSProperties;
export declare type HomeDesktopContentProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    viusage?: viusage.primary.Viusagelike;
    gameOfTheDay?: ontology.ProjectedGamelike;
    top25Games?: ontology.ProjectedGamelike[];
    apTop25Teams?: ontology.RankTrendTeamlike[];
    gdgTop25Teams?: ontology.RankTrendTeamlike[];
    onTeamClick?: (teamId: string) => Promise<void>;
    onMatchupClick?: (gameId: string) => Promise<void>;
    headerProjectedGames?: ontology.ProjectedGamelike[];
    headerTeams?: ontology.Teamlike[];
    blogs?: ontology.BlogArticlelike[];
    onBlogClick?: (id: string) => Promise<void>;
    onAccountClick?: () => Promise<void>;
};
export declare const HomeDesktopContent: FC<HomeDesktopContentProps>;
