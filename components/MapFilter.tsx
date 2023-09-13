
"use client"
import { IFilterState } from '@/types/filters.types';
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface MapFilterProps {
  filterState: IFilterState;
  onFiltersChanged: Dispatch<SetStateAction<IFilterState>>
}

export const MapFilter = (props: MapFilterProps) => {
  const { filterState, onFiltersChanged } = props;

  const toggleFilter = (category: keyof IFilterState) => {
    onFiltersChanged({
      ...filterState,
      [category]: !filterState[category],
    })
  }

  return (
    <form>
      <label>
      <input type="checkbox" value="business" checked={filterState.business} onChange={() => {toggleFilter('business')}}/>
        Business</label>
      <label>
      <input type="checkbox" value="sights" checked={filterState.sights} onChange={() =>{toggleFilter('sights')}}/>
        Sight Seeing</label>
      <label>
      <input type="checkbox" value="government" checked={filterState.government} onChange={()=>{toggleFilter("government")}}/>
        Government</label>
    </form>
  )
}
