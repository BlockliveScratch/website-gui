import { configureStore } from '@reduxjs/toolkit'
import { filtersReducer } from './components/Home/Postings/Filters/filter'
import { searchReducer } from './components/Home/Postings/SearchBar/searchBar'
import { typeReducer } from './components/Home/Postings/Type/TypeSelector'

export default configureStore({
  reducer: {
    search: searchReducer,
    filters: filtersReducer,
    postType: typeReducer,
  },
})
