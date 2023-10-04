
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
      <input type="checkbox" value="Shops and Services" checked={filterState.shopsAndServices} onChange={() => {toggleFilter('shopsAndServices')}}/>
        Shops and Services</label>
      <label>
      <input type="checkbox" value="Sights" checked={filterState.sights} onChange={() =>{toggleFilter('sights')}}/>
        Sight Seeing</label>
      <label>
      <input type="checkbox" value="Public Services" checked={filterState.publicServices} onChange={()=>{toggleFilter("publicServices")}}/>
        Public services</label>
      <label>  
      <input type="checkbox" value="Utilities" checked={filterState.utilities} onChange={()=>{toggleFilter("utilities")}}/>
        Utilities</label>
      <label>  
      <input type="checkbox" value="Restaurants" checked={filterState.restaurants} onChange={()=>{toggleFilter("restaurants")}}/>
        Restaurants</label>
    </form>
  )
}
