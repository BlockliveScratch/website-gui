import { createSlice } from '@reduxjs/toolkit'
import './searchBar.css'
import { useDispatch, useSelector } from 'react-redux'

export default function SearchBar() {

    let dispatch = useDispatch()
    let query = useSelector(s=>s.search.query)

    return (<searchBar>
        <glass>🔍</glass>
        <input type={'text'} onChange={(e)=>dispatch(setQuery({query:e.target.value}))} value={query}></input>
    </searchBar>)
}

export const searchSlice = createSlice({
    name:'search',
    initialState:{query:''},
    reducers:{
        setQuery:(state,action)=>{
            state.query = action.payload.query;
        }
    }
})
export const {setQuery} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;