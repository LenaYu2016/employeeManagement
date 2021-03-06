import { ElementRef } from "angular2/core";
import { Validator, ControlValueAccessor, Control } from "angular2/common";
export declare class RadioGroup {
    required: boolean;
    model: any;
    private onChange;
    private onTouched;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    validate(c: Control): {
        required: boolean;
    };
    change(value: any): void;
}
export declare class RadioItem {
    private radioGroup;
    value: any;
    disabled: boolean;
    constructor(radioGroup: RadioGroup);
    check(): void;
    isChecked(): boolean;
}
export declare class RadioBox implements ControlValueAccessor, Validator {
    private element;
    private radioGroup;
    required: boolean;
    private model;
    private onChange;
    private onTouched;
    constructor(element: ElementRef, radioGroup: RadioGroup);
    checked: boolean;
    check(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    validate(c: Control): {
        required: boolean;
    };
}
