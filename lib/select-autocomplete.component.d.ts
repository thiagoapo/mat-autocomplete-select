import { EventEmitter, OnChanges, DoCheck } from "@angular/core";
import { FormControl } from "@angular/forms";
import * as ɵngcc0 from '@angular/core';
export declare class SelectAutocompleteComponent implements OnChanges, DoCheck {
    selectPlaceholder: string;
    placeholder: string;
    options: any;
    disabled: boolean;
    display: string;
    value: string;
    formControl: FormControl;
    errorMsg: string;
    showErrorMsg: boolean;
    selectedOptions: any;
    multiple: boolean;
    labelCount: number;
    appearance: "standard" | "fill" | "outline";
    selectionChange: EventEmitter<any>;
    selectElem: any;
    filteredOptions: Array<any>;
    selectedValue: Array<any>;
    selectAllChecked: boolean;
    displayString: string;
    constructor();
    ngOnChanges(): void;
    ngDoCheck(): void;
    toggleDropdown(): void;
    toggleSelectAll(val: any): void;
    filterItem(value: any): void;
    hideOption(option: any): boolean;
    getFilteredOptionsValues(): any[];
    onDisplayString(): string;
    onSelectionChange(val: any): void;
    trackByFn(index: any, item: any): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SelectAutocompleteComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SelectAutocompleteComponent, "mat-select-autocomplete", never, { "selectPlaceholder": "selectPlaceholder"; "disabled": "disabled"; "display": "display"; "value": "value"; "formControl": "formControl"; "errorMsg": "errorMsg"; "showErrorMsg": "showErrorMsg"; "multiple": "multiple"; "labelCount": "labelCount"; "appearance": "appearance"; "placeholder": "placeholder"; "options": "options"; "selectedOptions": "selectedOptions"; }, { "selectionChange": "selectionChange"; }, never, never>;
}

//# sourceMappingURL=select-autocomplete.component.d.ts.map