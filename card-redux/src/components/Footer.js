import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <div>
    <span>显示: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>所有</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>未完</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>完成</FilterLink>
  </div>
)

export default Footer