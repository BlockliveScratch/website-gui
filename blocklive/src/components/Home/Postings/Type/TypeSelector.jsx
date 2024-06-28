import { createSlice } from '@reduxjs/toolkit'
import Type from './Type'
import './type.css'

const TypeSelector=()=>(
    <div class='types'>
        {
            Object.keys(TYPES).map(type=>(<Type typeName={type}></Type>))
        }
    </div>
)
export default TypeSelector;


export const TYPES={
    'project':null,
    'user':null,
    'studio':null,
}

export const typeSlice=createSlice({
    name:'postType',
    initialState:{
        selected:Object.keys(TYPES)[0]
    },
    reducers:{
        setType:(state,action)=>{
            state.selected=action.payload.type
        }
    }
})
export const {setType}=typeSlice.actions;
export const typeReducer=typeSlice.reducer;