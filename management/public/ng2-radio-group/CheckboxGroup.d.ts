import { Validator, ControlValueAccessor, Control } from "angular2/common";
export declare class CheckboxGroup implements ControlValueAccessor, Validator {
    required: boolean;
    private model;
    private onChange;
    private onTouched;
    writeValue(value: any[]): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    validate(c: Control): {
        required: boolean;
    };
    addOrRemoveValue(value: any): void;
    hasValue(value: any): boolean;
}
export declare class CheckboxItem {
    private checkboxGroup;
    value: any;
    constructor(checkboxGroup: CheckboxGroup);
    check(): void;
    isChecked(): boolean;
}
export declare class CheckBox implements ControlValueAccessor, Validator {
    private checkboxGroup;
    value: any;
    uncheckedValue: any;
    required: boolean;
    private model;
    private onChange;
    private onTouched;
    constructor(checkboxGroup: CheckboxGroup);
    checked: boolean;
    check(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    validate(c: Control): {
        required: boolean;
    };
    private hasModelValue();
    private addOrRemoveValue();
}
