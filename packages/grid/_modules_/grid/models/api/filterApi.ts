import { GridRowId, GridRowModel } from '../gridRows';
import { GridFilterModel } from '../../hooks/features/filter/gridFilterModelState';
import { GridFilterItem, GridLinkOperator } from '../gridFilterItem';

export interface FilterApi {
  showFilterPanel: (targetColumnField?: string) => void;
  hideFilterPanel: () => void;
  upsertFilter: (item: GridFilterItem) => void;
  applyFilters: () => void;
  applyFilter: (item: GridFilterItem, linkOperator?: GridLinkOperator) => void;
  deleteFilter: (item: GridFilterItem) => void;
  applyFilterLinkOperator: (operator: GridLinkOperator) => void;
  setFilterModel: (model: GridFilterModel) => void;
  getVisibleRowModels: () => Map<GridRowId, GridRowModel>;
}
