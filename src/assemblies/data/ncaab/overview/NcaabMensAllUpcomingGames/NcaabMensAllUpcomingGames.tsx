import React, { FC, ReactElement, useState } from "react";
import { ontology, viusage } from "../../../../../util";
import { UpcomingGames } from "../../matchup";
import { formatDate } from "../../generic/FormatDate/formatDate";

export const NCAAB_MENS_ALL_UPCOMING_GAMES_CONTAINER_CLASSNAMES: string[] = [
  "p-4",
];
export const NCAAB_MENS_ALL_UPCOMING_GAMES_CONTAINER_STYLE: React.CSSProperties =
  {};

export const NCAAB_MENS_ALL_UPCOMING_GAMES_INNER_CLASSNAMES: string[] = [];
export const NCAAB_MENS_ALL_UPCOMING_GAMES_INNER_STYLE: React.CSSProperties = {
  textAlign: "left",
};

export type NcaabMensAllUpcomingGamesProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  overrideStyle?: boolean;
  classNames?: string[];
  overrideClasses?: boolean;
  responsive?: boolean;
  viusage?: viusage.primary.Viusagelike;
  which?: string;
  allUpcomingGames?: ontology.ProjectedGamelike[];
  onTeamClick?: (teamId: string) => Promise<void>;
  onMatchupClick?: (gameId: string) => Promise<void>;
};

export const isOnTheBubble = (team: ontology.Teamlike) => {
  // ranked teams are not on the bubble
  if (team.ApRank) return false;

  const wins = team.Wins || 0;
  const losses = team.Losses || 0;
  const total = wins + losses || 1;
  return wins / total > 0.75;
};

export const NcaabMensAllUpcomingGames: FC<NcaabMensAllUpcomingGamesProps> = (
  props
) => {
  return (
    <UpcomingGames
      stackedGamblers={true}
      onMatchupClick={props.onMatchupClick}
      onTeamClick={props.onTeamClick}
      Title={<h2 className="text-2xl">Matchups</h2>}
      games={props.allUpcomingGames}
    />
  );
};
