import { useState, useMemo } from "react";

type ObjectKey<Obj> = keyof Obj;

export const useFilterableData = <T extends { [id: string]: any }>(items:  T[], field: ObjectKey<T>, filterValue: string): {filterItems: T[]}  => {

  const sortItems = useMemo(() => {
    return items.filter(item =>  item[field] === filterValue || filterValue === 'all');
  }, [items, field, filterValue])

  return {filterItems: sortItems}
}