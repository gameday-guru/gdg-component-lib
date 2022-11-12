import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { viusage } from '../../../../util';
import { MensCollegeBasketballHeader } from '../../header';
import { NcaabMensOverview } from '../../../data/overview/NcaabMensOverview/NcaabMensOverview';
import { Teams } from '../../../data/team/Teams';

export const MENS_NCAAB_TEAM_CONTENT_CONTAINER_CLASSNAMES : string[] = [ ];
export const MENS_NCAAB_TEAM_CONTENT_CONTAINER_STYLE : React.CSSProperties = {
};

export const MENS_NCAAB_TEAM_CONTENT_INNER_CLASSNAMES : string[] = [ ];
export const MENS_NCAAB_TEAM_CONTENT_INNER_STYLE : React.CSSProperties = {
    
};

export type MensNcaabTeamContentProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    viusage ? : viusage.primary.Viusagelike;
};

export const MensNcaabTeamContent : FC<MensNcaabTeamContentProps>  = (props) =>{

    return (
        <Wrapper
            viusage={props.viusage||"backdrop"}
            classNames={[...!props.overrideClasses ? MENS_NCAAB_TEAM_CONTENT_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? MENS_NCAAB_TEAM_CONTENT_CONTAINER_STYLE : {}, ...props.style}}>
            <div
            className={[...!props.overrideClasses ? MENS_NCAAB_TEAM_CONTENT_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? MENS_NCAAB_TEAM_CONTENT_INNER_STYLE : {}, ...props.style}}>
                <div>
                    <MensCollegeBasketballHeader/>
                </div>
                <div>
                    <Teams />
                </div>
            </div>
        </Wrapper>
    )
};