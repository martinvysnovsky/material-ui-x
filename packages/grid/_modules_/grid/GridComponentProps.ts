import { GridState } from './hooks/features/core/gridState';
import { GridApiRef } from './models/api/gridApiRef';
import { GridColumns } from './models/colDef/gridColDef';
import { GridSlotsComponent } from './models/gridSlotsComponent';
import { GridOptions } from './models/gridOptions';
import { GridSlotsComponentsProps } from './models/gridSlotsComponentsProps';
import { GridStateChangeParams } from './models/params/gridStateChangeParams';
import { GridRowIdGetter, GridRowsProp } from './models/gridRows';

/**
 * Partial set of [[GridOptions]].
 */
export type GridOptionsProp = Partial<GridOptions>;

/**
 * The grid component react props interface.
 */
export interface GridComponentProps extends GridOptionsProp {
  /**
   * The ref object that allows grid manipulation. Can be instantiated with [[useGridApiRef()]].
   */
  apiRef?: GridApiRef;
  /**
   * Set of columns of type [[GridColumns]].
   */
  columns: GridColumns;
  /**
   * Overrideable components.
   */
  components?: GridSlotsComponent;
  /**
   * Overrideable components props dynamically passed to the component at rendering.
   */
  componentsProps?: GridSlotsComponentsProps;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: {
    /** Styles applied to the root element. */
    root?: string;
  };
  /**
   * @ignore
   */
  className?: string;
  /**
   * An error that will turn the grid into its error state and display the error component.
   */
  error?: any;
  /**
   * Nonce of the inline styles for [Content Security Policy](https://www.w3.org/TR/2016/REC-CSP2-20161215/#script-src-the-nonce-attribute).
   */
  nonce?: string;
  /**
   * @internal enum
   */
  licenseStatus: string;
  /**
   * If `true`, a  loading overlay is displayed.
   */
  loading?: boolean;
  /**
   * Set a callback fired when the state of the grid is updated.
   */
  onStateChange?: (params: GridStateChangeParams) => void; // We are overriding the handler in GridOptions to fix the params type and avoid the cycle dependency
  /**
   * Set of rows of type [[GridRowsProp]].
   */
  rows: GridRowsProp;
  /**
   * Set the whole state of the grid.
   */
  state?: Partial<GridState>;
  /**
   * Return the id of a given [[GridRowData]].
   */
  getRowId?: GridRowIdGetter;
}
