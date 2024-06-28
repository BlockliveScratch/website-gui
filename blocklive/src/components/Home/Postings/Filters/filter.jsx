import { useSelector } from 'react-redux'
import './filter.css'
import { createSlice } from '@reduxjs/toolkit'
import SelectedTag from './Tags/selected';
import UnselectedTag from './Tags/unselected';

export default function Filter({ keyy }) {

    let filterState = useSelector(s=>{
        return s.filters[keyy]
    }); 

    return (
        <filter>
            <filtername>{FILTERS[keyy].name}:</filtername>
            <selected>
                {filterState.selected.map(name=>new SelectedTag({keyy,name}))}
            </selected>
            {filterState.selected.length*Object.keys(FILTERS[keyy].options).filter(name=>!filterState.selected.includes(name)).length==0?null:'|'}
            <unselected>
                {Object.keys(FILTERS[keyy].options).filter(name=>!filterState.selected.includes(name)).map(name=>new UnselectedTag({keyy,name}))}
            </unselected>
        </filter>
    )
}


export const FILTERS = {
    skill:{
        name:"Skill Needed",
        options:{
            'animator':'#00ace1',
            'coder':'#ff0095',
            'music':'#5900ff',
            'game designer':'#008241',
            'playtester':'#004be0',},
    },
    type:{
        name:"Project Type",
        options:{
            'game':'#e000d5',
            'animation':'#ffff00',
            'art':'#00e06c'},
    }
}
// add other option that autopopulates and let people make custom tags

export const filtersSlice = createSlice({
    name:'filters',
    initialState:Object.fromEntries(Object.entries(FILTERS).map(entry=>([entry[0],{selected:[]}]))),
    reducers:{
        disableFilter: (state,action)=>{
            let filterKey=action.payload.keyy;
            let name=action.payload.name;
            state[filterKey].selected = state[filterKey].selected.filter(o=>o!=name)
        },
        enableFilter: (state,action)=>{
            let filterKey=action.payload.keyy;
            let name=action.payload.name;

            state[filterKey].selected.push(name)
            //  = state[filterKey].selected.append(value)
        }
    }
});
export const {disableFilter, enableFilter} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer