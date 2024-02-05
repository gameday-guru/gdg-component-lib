import React, { useEffect, useState } from "react";
import { MainDatabase } from "../../data/database";
import { Processorlike } from "../processor";
import { ontology } from "../../../util";
import { DateComparison } from "../../../util/date";
import { useMultiPowerStore } from "./useMultiPowerStore";

export const useTeams = () : {

    getTeams : Processorlike['getTeams'],
    getTeamsTable : Processorlike['getTeamsTable'],
    getTeam : Processorlike['getTeam']


}=>{

    const {
        get : _getTeamsTable
    } = useMultiPowerStore(MainDatabase.multiListeners.ncaabTeams);

    const getTeamsTable = ()=>_getTeamsTable(undefined);
    const getTeams = ()=>{
        const teamsTable = getTeamsTable();
        return teamsTable && Object.values(teamsTable);
    };

    const getTeam = (id : string)=>getTeamsTable()?.[id];

    


    return {
        getTeams,
        getTeamsTable,
        getTeam
    }

}