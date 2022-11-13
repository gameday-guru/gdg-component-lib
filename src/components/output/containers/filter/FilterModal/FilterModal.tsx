import React, {FC, ReactElement, useState} from 'react';
import { FieldCase, FilterTerms, FilterToken } from '../filter';
import { FilterExpression } from '../FilterExpression/FilterExpression';

export const FILTER_MODAL_CLASSNAMES : string[] = [ ];
export const FILTER_MODAL_STYLE : React.CSSProperties = {
};

export type FilterModalProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    filters ? : FilterTerms;
    fieldCase ? : FieldCase;
    setFilters ? : (filters : FilterTerms)=>Promise<void>;
};

export const FilterModal : FC<FilterModalProps>  = (props) =>{

    // TODO: May need to refactor this into a reducer to deal with matching state conditions.
    const [filtersDraft, setFiltersDraft] = useState<FilterTerms>(props.filters||{
        relationship : "AND",
        terms : []
    });

    const filterExpressions = filtersDraft.terms.map((filter, index)=>{

        const setFilter = async (filter : FilterToken)=>{
            const filtersDraftCopy = {...filtersDraft};
            filtersDraftCopy.terms[index] = filter;
            setFiltersDraft(filtersDraftCopy);
        }

        return <FilterExpression 
            setFilter={setFilter}
            key={index}
            fieldCase={props.fieldCase}/>
    });

    const handleAdd = ()=>{
        if(!props.fieldCase || !Object.values(props.fieldCase)[0][0]) return;
        const filtersDraftCopy = {...filtersDraft};
        filtersDraftCopy.terms.push({
            field : Object.keys(props.fieldCase)[0],
            case : Object.values(props.fieldCase)[0][0],
            filter : "APPROX",
            right : null as any
        });
        setFiltersDraft(filtersDraftCopy)

    }
    
    const handleClear = async ()=>{
        const filtersDraftCopy = {...filtersDraft};
        filtersDraftCopy.terms = [];
        setFiltersDraft(filtersDraftCopy);
    };

    const handleSubmit = async ()=>{
        props.setFilters && props.setFilters(filtersDraft);
    };

    return (
        <div
        className={[...!props.overrideClasses ? FILTER_MODAL_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? FILTER_MODAL_STYLE : {}, ...props.style}}>
            <form onSubmit={e=>e.preventDefault()}>
                <div>
                    {filterExpressions}
                </div>
                <div>
                    {/** TODO: Adder */}
                </div>
                <div>
                    {/** TODO: ClearOrSubmit */}
                </div>
            </form>
        </div>
    )
};