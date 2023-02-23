(self["webpackChunkegret"] = self["webpackChunkegret"] || []).push([["src_app_views_sessions_sessions_module_ts"],{

/***/ 14588:
/*!******************************************************************************!*\
  !*** ./node_modules/ngx-custom-validators/fesm2015/ngx-custom-validators.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomFormsModule": function() { return /* binding */ CustomFormsModule; },
/* harmony export */   "CustomValidators": function() { return /* binding */ CustomValidators; },
/* harmony export */   "ɵa": function() { return /* binding */ arrayLength; },
/* harmony export */   "ɵb": function() { return /* binding */ base64; },
/* harmony export */   "ɵba": function() { return /* binding */ ArrayLengthValidator; },
/* harmony export */   "ɵbb": function() { return /* binding */ Base64Validator; },
/* harmony export */   "ɵbc": function() { return /* binding */ CreditCardValidator; },
/* harmony export */   "ɵbd": function() { return /* binding */ DateValidator; },
/* harmony export */   "ɵbe": function() { return /* binding */ DateISOValidator; },
/* harmony export */   "ɵbf": function() { return /* binding */ DigitsValidator; },
/* harmony export */   "ɵbg": function() { return /* binding */ EmailValidator; },
/* harmony export */   "ɵbh": function() { return /* binding */ EqualValidator; },
/* harmony export */   "ɵbi": function() { return /* binding */ EqualToValidator; },
/* harmony export */   "ɵbj": function() { return /* binding */ GreaterThanValidator; },
/* harmony export */   "ɵbk": function() { return /* binding */ GreaterThanEqualValidator; },
/* harmony export */   "ɵbl": function() { return /* binding */ JSONValidator; },
/* harmony export */   "ɵbm": function() { return /* binding */ LessThanValidator; },
/* harmony export */   "ɵbn": function() { return /* binding */ LessThanEqualValidator; },
/* harmony export */   "ɵbo": function() { return /* binding */ MaxValidator; },
/* harmony export */   "ɵbp": function() { return /* binding */ MaxDateValidator; },
/* harmony export */   "ɵbq": function() { return /* binding */ MinValidator; },
/* harmony export */   "ɵbr": function() { return /* binding */ MinDateValidator; },
/* harmony export */   "ɵbs": function() { return /* binding */ NotEqualValidator; },
/* harmony export */   "ɵbt": function() { return /* binding */ NotEqualToValidator; },
/* harmony export */   "ɵbu": function() { return /* binding */ NumberValidator; },
/* harmony export */   "ɵbv": function() { return /* binding */ PropertyValidator; },
/* harmony export */   "ɵbw": function() { return /* binding */ RangeValidator; },
/* harmony export */   "ɵbx": function() { return /* binding */ RangeLengthValidator; },
/* harmony export */   "ɵby": function() { return /* binding */ UrlValidator; },
/* harmony export */   "ɵbz": function() { return /* binding */ UUIDValidator; },
/* harmony export */   "ɵc": function() { return /* binding */ creditCard; },
/* harmony export */   "ɵd": function() { return /* binding */ date; },
/* harmony export */   "ɵe": function() { return /* binding */ dateISO; },
/* harmony export */   "ɵf": function() { return /* binding */ digits; },
/* harmony export */   "ɵg": function() { return /* binding */ email; },
/* harmony export */   "ɵh": function() { return /* binding */ equal; },
/* harmony export */   "ɵi": function() { return /* binding */ equalTo; },
/* harmony export */   "ɵj": function() { return /* binding */ gt; },
/* harmony export */   "ɵk": function() { return /* binding */ gte; },
/* harmony export */   "ɵl": function() { return /* binding */ json; },
/* harmony export */   "ɵm": function() { return /* binding */ lt; },
/* harmony export */   "ɵn": function() { return /* binding */ lte; },
/* harmony export */   "ɵo": function() { return /* binding */ max; },
/* harmony export */   "ɵp": function() { return /* binding */ maxDate; },
/* harmony export */   "ɵq": function() { return /* binding */ min; },
/* harmony export */   "ɵr": function() { return /* binding */ minDate; },
/* harmony export */   "ɵs": function() { return /* binding */ notEqual; },
/* harmony export */   "ɵt": function() { return /* binding */ notEqualTo; },
/* harmony export */   "ɵu": function() { return /* binding */ number; },
/* harmony export */   "ɵv": function() { return /* binding */ property; },
/* harmony export */   "ɵw": function() { return /* binding */ range; },
/* harmony export */   "ɵx": function() { return /* binding */ rangeLength; },
/* harmony export */   "ɵy": function() { return /* binding */ url; },
/* harmony export */   "ɵz": function() { return /* binding */ uuid; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 24751);





function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
function isDate(obj) {
    try {
        const date = new Date(obj);
        return !isNaN(date.getTime());
    }
    catch (e) {
        return false;
    }
}
function parseDate(obj) {
    try {
        // Moment.js
        if (obj._d instanceof Date) {
            const d = obj._d;
            const month = +d.getMonth() + 1;
            const day = +d.getDate();
            return `${d.getFullYear()}-${formatDayOrMonth(month)}-${formatDayOrMonth(day)}`;
        }
        // NgbDateStruct
        if (typeof obj === 'object' && obj.year != null && obj.month != null && obj.day != null) {
            const month = +obj.month;
            const day = +obj.day;
            return `${obj.year}-${formatDayOrMonth(month)}-${formatDayOrMonth(day)}`;
        }
    }
    catch (e) { }
    return obj;
}
function formatDayOrMonth(month) {
    return month < 10 ? `0${month}` : month;
}

const arrayLength = (value) => {
    return (control) => {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required(control))) {
            return null;
        }
        const obj = control.value;
        return Array.isArray(obj) && obj.length >= +value ? null : { arrayLength: { minLength: value } };
    };
};

const base64 = (control) => {
    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required(control))) {
        return null;
    }
    const v = control.value;
    return /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i.test(v) ? null : { base64: true };
};

const creditCard = (control) => {
    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required(control))) {
        return null;
    }
    const v = control.value;
    const sanitized = v.replace(/[^0-9]+/g, '');
    // problem with chrome
    /* tslint:disable */
    if (!(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|(?:9792)\d{12})$/.test(sanitized))) {
        return { creditCard: true };
    }
    /* tslint:enable */
    let sum = 0;
    let digit;
    let tmpNum;
    let shouldDouble;
    for (let i = sanitized.length - 1; i >= 0; i--) {
        digit = sanitized.substring(i, (i + 1));
        tmpNum = parseInt(digit, 10);
        if (shouldDouble) {
            tmpNum *= 2;
            if (tmpNum >= 10) {
                sum += ((tmpNum % 10) + 1);
            }
            else {
                sum += tmpNum;
            }
        }
        else {
            sum += tmpNum;
        }
        shouldDouble = !shouldDouble;
    }
    if (Boolean((sum % 10) === 0 ? sanitized : false)) {
        return null;
    }
    return { creditCard: true };
};

const date = (control) => {
    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required(control))) {
        return null;
    }
    let v = control.value;
    v = parseDate(v);
    return isDate(v) ? null : { date: true };
};

const dateISO = (control) => {
    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required(control))) {
        return null;
    }
    const v = control.value;
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(v) ? null : { dateISO: true };
};

const digits = (control) => {
    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required(control))) {
        return null;
    }
    const v = control.value;
    return /^\d+$/.test(v) ? null : { digits: true };
};

const email = (control) => {
    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required(control))) {
        return null;
    }
    const v = control.value;
    /* tslint:disable */
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) ? null : { 'email': true };
    /* tslint:enable */
};

const equal = (val) => {
    return (control) => {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required(control))) {
            return null;
        }
        const v = control.value;
        return val === v ? null : { equal: { value: val } };
    };
};

const equalTo = (equalControl) => {
    let subscribe = false;
    return (control) => {
        if (!subscribe) {
            subscribe = true;
            equalControl.valueChanges.subscribe(() => {
                control.updateValueAndValidity();
            });
        }
        const v = control.value;
        return equalControl.value === v ? null : { equalTo: { control: equalControl, value: equalControl.value } };
    };
};

const gt = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required(control))) {
            return null;
        }
        const v = +control.value;
        return v > +value ? null : { gt: { value: value } };
    };
};

const gte = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required(control))) {
            return null;
        }
        const v = +control.value;
        return v >= +value ? null : { gte: { value: value } };
    };
};

const json = (control) => {
    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required(control))) {
        return null;
    }
    const v = control.value;
    try {
        const obj = JSON.parse(v);
        if (Boolean(obj) && typeof obj === 'object') {
            return null;
        }
    }
    catch (e) { }
    return { json: true };
};

const lt = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required(control))) {
            return null;
        }
        const v = +control.value;
        return v < +value ? null : { lt: { value: value } };
    };
};

const lte = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required(control))) {
            return null;
        }
        const v = +control.value;
        return v <= +value ? null : { lte: { value: value } };
    };
};

const max = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required(control))) {
            return null;
        }
        const v = +control.value;
        return v <= +value ? null : { max: { value: value } };
    };
};

const maxDate = (maxInput) => {
    let value;
    let subscribe = false;
    let maxValue = maxInput;
    const isForm = maxInput instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl || maxInput instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgModel;
    return (control) => {
        if (!subscribe && isForm) {
            subscribe = true;
            maxInput.valueChanges.subscribe(() => {
                control.updateValueAndValidity();
            });
        }
        if (isForm) {
            maxValue = maxInput.value;
        }
        value = parseDate(maxValue);
        if (!isDate(value) && !(value instanceof Function)) {
            if (value == null) {
                return null;
            }
            else if (isForm) {
                return { maxDate: { error: 'maxDate is invalid' } };
            }
            else {
                throw Error('maxDate value must be or return a formatted date');
            }
        }
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required(control))) {
            return null;
        }
        const d = new Date(parseDate(control.value)).getTime();
        if (!isDate(d)) {
            return { value: true };
        }
        if (value instanceof Function) {
            value = value();
        }
        return d <= new Date(value).getTime() ? null : (isForm ? { maxDate: { control: maxInput, value: maxInput.value } } : { maxDate: { value: maxValue, control: undefined } });
    };
};

const min = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required(control))) {
            return null;
        }
        const v = +control.value;
        return v >= +value ? null : { min: { value: value } };
    };
};

const minDate = (minInput) => {
    let value;
    let subscribe = false;
    let minValue = minInput;
    const isForm = minInput instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl || minInput instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgModel;
    return (control) => {
        if (!subscribe && isForm) {
            subscribe = true;
            minInput.valueChanges.subscribe(() => {
                control.updateValueAndValidity();
            });
        }
        if (isForm) {
            minValue = minInput.value;
        }
        value = parseDate(minValue);
        if (!isDate(value) && !(value instanceof Function)) {
            if (value == null) {
                return null;
            }
            else if (isForm) {
                return { minDate: { error: 'minDate is invalid' } };
            }
            else {
                throw Error('minDate value must be or return a formatted date');
            }
        }
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required(control))) {
            return null;
        }
        const d = new Date(parseDate(control.value)).getTime();
        if (!isDate(d)) {
            return { value: true };
        }
        if (value instanceof Function) {
            value = value();
        }
        return d >= new Date(value).getTime() ? null : (isForm ? { minDate: { control: minInput, value: minInput.value } } : { minDate: { value: minValue, control: undefined } });
    };
};

const notEqual = (val) => {
    return (control) => {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required(control))) {
            return null;
        }
        const v = control.value;
        return val !== v ? null : { notEqual: { value: val } };
    };
};

const notEqualTo = (notEqualControl) => {
    let subscribe = false;
    return (control) => {
        if (!subscribe) {
            subscribe = true;
            notEqualControl.valueChanges.subscribe(() => {
                control.updateValueAndValidity();
            });
        }
        const v = control.value;
        if (notEqualControl.value == null && v == null) {
            return null;
        }
        return notEqualControl.value !== v ? null : { notEqualTo: { control: notEqualControl, value: notEqualControl.value } };
    };
};

const number = (control) => {
    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required(control))) {
        return null;
    }
    const v = control.value;
    return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(v) ? null : { 'number': true };
};

const property = (value) => {
    return (control) => {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required(control))) {
            return null;
        }
        const properties = value.split(',');
        const obj = control.value;
        let isValid = true;
        for (const prop of properties) {
            if (obj[prop] == null) {
                isValid = false;
                break;
            }
        }
        return isValid ? null : { hasProperty: { value: value } };
    };
};

const range = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required(control))) {
            return null;
        }
        const v = +control.value;
        return v >= value[0] && v <= value[1] ? null : { range: { value: value } };
    };
};

const rangeLength = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required(control))) {
            return null;
        }
        const v = control.value;
        return v.length >= value[0] && v.length <= value[1] ? null : { rangeLength: { value: value } };
    };
};

const uuids = {
    '3': /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    '4': /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    '5': /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    'all': /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};
const uuid = (version) => {
    return (control) => {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required(control))) {
            return null;
        }
        const v = control.value;
        const pattern = uuids[version] || uuids.all;
        return (new RegExp(pattern)).test(v) ? null : { uuid: true };
    };
};

const url = (control) => {
    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required(control))) {
        return null;
    }
    const v = control.value;
    /* tslint:disable */
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v) ? null : { 'url': true };
    /* tslint:enable */
};

const ARRAY_LENGTH_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => ArrayLengthValidator),
    multi: true
};
let ArrayLengthValidator = class ArrayLengthValidator {
    ngOnInit() {
        this.validator = arrayLength(this.arrayLength);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'arrayLength') {
                this.validator = arrayLength(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
ArrayLengthValidator.ɵfac = function ArrayLengthValidator_Factory(t) { return new (t || ArrayLengthValidator)(); };
ArrayLengthValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ArrayLengthValidator, selectors: [["", "arrayLength", "", "formControlName", ""], ["", "arrayLength", "", "formControl", ""], ["", "arrayLength", "", "ngModel", ""]], inputs: { arrayLength: "arrayLength" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([ARRAY_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Number)
], ArrayLengthValidator.prototype, "arrayLength", void 0);

const BASE64_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => Base64Validator),
    multi: true
};
let Base64Validator = class Base64Validator {
    validate(c) {
        return base64(c);
    }
};
Base64Validator.ɵfac = function Base64Validator_Factory(t) { return new (t || Base64Validator)(); };
Base64Validator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: Base64Validator, selectors: [["", "base64", "", "formControlName", ""], ["", "base64", "", "formControl", ""], ["", "base64", "", "ngModel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([BASE64_VALIDATOR])] });

const CREDIT_CARD_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => CreditCardValidator),
    multi: true
};
let CreditCardValidator = class CreditCardValidator {
    validate(c) {
        return creditCard(c);
    }
};
CreditCardValidator.ɵfac = function CreditCardValidator_Factory(t) { return new (t || CreditCardValidator)(); };
CreditCardValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CreditCardValidator, selectors: [["", "creditCard", "", "formControlName", ""], ["", "creditCard", "", "formControl", ""], ["", "creditCard", "", "ngModel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([CREDIT_CARD_VALIDATOR])] });

const DATE_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => DateValidator),
    multi: true
};
let DateValidator = class DateValidator {
    validate(c) {
        return date(c);
    }
};
DateValidator.ɵfac = function DateValidator_Factory(t) { return new (t || DateValidator)(); };
DateValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DateValidator, selectors: [["", "date", "", "formControlName", ""], ["", "date", "", "formControl", ""], ["", "date", "", "ngModel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([DATE_VALIDATOR])] });

const DATE_ISO_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => DateISOValidator),
    multi: true
};
let DateISOValidator = class DateISOValidator {
    validate(c) {
        return dateISO(c);
    }
};
DateISOValidator.ɵfac = function DateISOValidator_Factory(t) { return new (t || DateISOValidator)(); };
DateISOValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DateISOValidator, selectors: [["", "dateISO", "", "formControlName", ""], ["", "dateISO", "", "formControl", ""], ["", "dateISO", "", "ngModel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([DATE_ISO_VALIDATOR])] });

const DIGITS_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => DigitsValidator),
    multi: true
};
let DigitsValidator = class DigitsValidator {
    validate(c) {
        return digits(c);
    }
};
DigitsValidator.ɵfac = function DigitsValidator_Factory(t) { return new (t || DigitsValidator)(); };
DigitsValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DigitsValidator, selectors: [["", "digits", "", "formControlName", ""], ["", "digits", "", "formControl", ""], ["", "digits", "", "ngModel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([DIGITS_VALIDATOR])] });

const EMAIL_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => EmailValidator),
    multi: true
};
let EmailValidator = class EmailValidator {
    validate(c) {
        return email(c);
    }
};
EmailValidator.ɵfac = function EmailValidator_Factory(t) { return new (t || EmailValidator)(); };
EmailValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: EmailValidator, selectors: [["", "ngvemail", "", "formControlName", ""], ["", "ngvemail", "", "formControl", ""], ["", "ngvemail", "", "ngModel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([EMAIL_VALIDATOR])] });

const EQUAL_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => EqualValidator),
    multi: true
};
let EqualValidator = class EqualValidator {
    ngOnInit() {
        this.validator = equal(this.equal);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'equal') {
                this.validator = equal(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
EqualValidator.ɵfac = function EqualValidator_Factory(t) { return new (t || EqualValidator)(); };
EqualValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: EqualValidator, selectors: [["", "equal", "", "formControlName", ""], ["", "equal", "", "formControl", ""], ["", "equal", "", "ngModel", ""]], inputs: { equal: "equal" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([EQUAL_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)
], EqualValidator.prototype, "equal", void 0);

const EQUAL_TO_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => EqualToValidator),
    multi: true
};
let EqualToValidator = class EqualToValidator {
    ngOnInit() {
        this.validator = equalTo(this.equalTo);
    }
    validate(c) {
        return this.validator(c);
    }
};
EqualToValidator.ɵfac = function EqualToValidator_Factory(t) { return new (t || EqualToValidator)(); };
EqualToValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: EqualToValidator, selectors: [["", "equalTo", "", "formControlName", ""], ["", "equalTo", "", "formControl", ""], ["", "equalTo", "", "ngModel", ""]], inputs: { equalTo: "equalTo" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([EQUAL_TO_VALIDATOR])] });
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl)
], EqualToValidator.prototype, "equalTo", void 0);

const GREATER_THAN_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => GreaterThanValidator),
    multi: true
};
let GreaterThanValidator = class GreaterThanValidator {
    ngOnInit() {
        this.validator = gt(this.gt);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'gt') {
                this.validator = gt(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
GreaterThanValidator.ɵfac = function GreaterThanValidator_Factory(t) { return new (t || GreaterThanValidator)(); };
GreaterThanValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GreaterThanValidator, selectors: [["", "gt", "", "formControlName", ""], ["", "gt", "", "formControl", ""], ["", "gt", "", "ngModel", ""]], inputs: { gt: "gt" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([GREATER_THAN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Number)
], GreaterThanValidator.prototype, "gt", void 0);

const GREATER_THAN_EQUAL_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => GreaterThanEqualValidator),
    multi: true
};
let GreaterThanEqualValidator = class GreaterThanEqualValidator {
    ngOnInit() {
        this.validator = gte(this.gte);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'gte') {
                this.validator = gte(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
GreaterThanEqualValidator.ɵfac = function GreaterThanEqualValidator_Factory(t) { return new (t || GreaterThanEqualValidator)(); };
GreaterThanEqualValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GreaterThanEqualValidator, selectors: [["", "gte", "", "formControlName", ""], ["", "gte", "", "formControl", ""], ["", "gte", "", "ngModel", ""]], inputs: { gte: "gte" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([GREATER_THAN_EQUAL_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Number)
], GreaterThanEqualValidator.prototype, "gte", void 0);

const JSON_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => JSONValidator),
    multi: true
};
let JSONValidator = class JSONValidator {
    validate(c) {
        return json(c);
    }
};
JSONValidator.ɵfac = function JSONValidator_Factory(t) { return new (t || JSONValidator)(); };
JSONValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: JSONValidator, selectors: [["", "json", "", "formControlName", ""], ["", "json", "", "formControl", ""], ["", "json", "", "ngModel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([JSON_VALIDATOR])] });

const LESS_THAN_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => LessThanValidator),
    multi: true
};
let LessThanValidator = class LessThanValidator {
    ngOnInit() {
        this.validator = lt(this.lt);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'lt') {
                this.validator = lt(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
LessThanValidator.ɵfac = function LessThanValidator_Factory(t) { return new (t || LessThanValidator)(); };
LessThanValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: LessThanValidator, selectors: [["", "lt", "", "formControlName", ""], ["", "lt", "", "formControl", ""], ["", "lt", "", "ngModel", ""]], inputs: { lt: "lt" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([LESS_THAN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Number)
], LessThanValidator.prototype, "lt", void 0);

const LESS_THAN_EQUAL_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => LessThanEqualValidator),
    multi: true
};
let LessThanEqualValidator = class LessThanEqualValidator {
    ngOnInit() {
        this.validator = lte(this.lte);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'lte') {
                this.validator = lte(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
LessThanEqualValidator.ɵfac = function LessThanEqualValidator_Factory(t) { return new (t || LessThanEqualValidator)(); };
LessThanEqualValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: LessThanEqualValidator, selectors: [["", "lte", "", "formControlName", ""], ["", "lte", "", "formControl", ""], ["", "lte", "", "ngModel", ""]], inputs: { lte: "lte" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([LESS_THAN_EQUAL_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Number)
], LessThanEqualValidator.prototype, "lte", void 0);

const MAX_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => MaxValidator),
    multi: true
};
let MaxValidator = class MaxValidator {
    ngOnInit() {
        this.validator = max(this.max);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'max') {
                this.validator = max(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
MaxValidator.ɵfac = function MaxValidator_Factory(t) { return new (t || MaxValidator)(); };
MaxValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MaxValidator, selectors: [["", "max", "", "formControlName", ""], ["", "max", "", "formControl", ""], ["", "max", "", "ngModel", ""]], inputs: { max: "max" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAX_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Number)
], MaxValidator.prototype, "max", void 0);

const MAX_DATE_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => MaxDateValidator),
    multi: true
};
let MaxDateValidator = class MaxDateValidator {
    ngOnInit() {
        this.validator = maxDate(this.maxDate);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'maxDate') {
                this.validator = maxDate(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
MaxDateValidator.ɵfac = function MaxDateValidator_Factory(t) { return new (t || MaxDateValidator)(); };
MaxDateValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MaxDateValidator, selectors: [["", "maxDate", "", "formControlName", ""], ["", "maxDate", "", "formControl", ""], ["", "maxDate", "", "ngModel", ""]], inputs: { maxDate: "maxDate" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAX_DATE_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)
], MaxDateValidator.prototype, "maxDate", void 0);

const MIN_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => MinValidator),
    multi: true
};
let MinValidator = class MinValidator {
    ngOnInit() {
        this.validator = min(this.min);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'min') {
                this.validator = min(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
MinValidator.ɵfac = function MinValidator_Factory(t) { return new (t || MinValidator)(); };
MinValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MinValidator, selectors: [["", "min", "", "formControlName", ""], ["", "min", "", "formControl", ""], ["", "min", "", "ngModel", ""]], inputs: { min: "min" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MIN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Number)
], MinValidator.prototype, "min", void 0);

const MIN_DATE_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => MinDateValidator),
    multi: true
};
let MinDateValidator = class MinDateValidator {
    ngOnInit() {
        this.validator = minDate(this.minDate);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'minDate') {
                this.validator = minDate(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
MinDateValidator.ɵfac = function MinDateValidator_Factory(t) { return new (t || MinDateValidator)(); };
MinDateValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MinDateValidator, selectors: [["", "minDate", "", "formControlName", ""], ["", "minDate", "", "formControl", ""], ["", "minDate", "", "ngModel", ""]], inputs: { minDate: "minDate" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MIN_DATE_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)
], MinDateValidator.prototype, "minDate", void 0);

const NOT_EQUAL_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => NotEqualValidator),
    multi: true
};
let NotEqualValidator = class NotEqualValidator {
    ngOnInit() {
        this.validator = notEqual(this.notEqual);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'notEqual') {
                this.validator = notEqual(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
NotEqualValidator.ɵfac = function NotEqualValidator_Factory(t) { return new (t || NotEqualValidator)(); };
NotEqualValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NotEqualValidator, selectors: [["", "notEqual", "", "formControlName", ""], ["", "notEqual", "", "formControl", ""], ["", "notEqual", "", "ngModel", ""]], inputs: { notEqual: "notEqual" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([NOT_EQUAL_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)
], NotEqualValidator.prototype, "notEqual", void 0);

const NOT_EQUAL_TO_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => NotEqualToValidator),
    multi: true
};
let NotEqualToValidator = class NotEqualToValidator {
    ngOnInit() {
        this.validator = notEqualTo(this.notEqualTo);
    }
    validate(c) {
        return this.validator(c);
    }
};
NotEqualToValidator.ɵfac = function NotEqualToValidator_Factory(t) { return new (t || NotEqualToValidator)(); };
NotEqualToValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NotEqualToValidator, selectors: [["", "notEqualTo", "", "formControlName", ""], ["", "notEqualTo", "", "formControl", ""], ["", "notEqualTo", "", "ngModel", ""]], inputs: { notEqualTo: "notEqualTo" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([NOT_EQUAL_TO_VALIDATOR])] });
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl)
], NotEqualToValidator.prototype, "notEqualTo", void 0);

const NUMBER_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => NumberValidator),
    multi: true
};
let NumberValidator = class NumberValidator {
    validate(c) {
        return number(c);
    }
};
NumberValidator.ɵfac = function NumberValidator_Factory(t) { return new (t || NumberValidator)(); };
NumberValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NumberValidator, selectors: [["", "number", "", "formControlName", ""], ["", "number", "", "formControl", ""], ["", "number", "", "ngModel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([NUMBER_VALIDATOR])] });

const PROPERTY_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => PropertyValidator),
    multi: true
};
let PropertyValidator = class PropertyValidator {
    ngOnInit() {
        this.validator = property(this.property);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'property') {
                this.validator = property(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
PropertyValidator.ɵfac = function PropertyValidator_Factory(t) { return new (t || PropertyValidator)(); };
PropertyValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: PropertyValidator, selectors: [["", "property", "", "formControlName", ""], ["", "property", "", "formControl", ""], ["", "property", "", "ngModel", ""]], inputs: { property: "property" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([PROPERTY_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)
], PropertyValidator.prototype, "property", void 0);

const RANGE_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => RangeValidator),
    multi: true
};
let RangeValidator = class RangeValidator {
    ngOnInit() {
        this.validator = range(this.range);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'range') {
                this.validator = range(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
RangeValidator.ɵfac = function RangeValidator_Factory(t) { return new (t || RangeValidator)(); };
RangeValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: RangeValidator, selectors: [["", "range", "", "formControlName", ""], ["", "range", "", "formControl", ""], ["", "range", "", "ngModel", ""]], inputs: { range: "range" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([RANGE_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Array)
], RangeValidator.prototype, "range", void 0);

const RANGE_LENGTH_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => RangeLengthValidator),
    multi: true
};
let RangeLengthValidator = class RangeLengthValidator {
    ngOnInit() {
        this.validator = rangeLength(this.rangeLength);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'rangeLength') {
                this.validator = rangeLength(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
RangeLengthValidator.ɵfac = function RangeLengthValidator_Factory(t) { return new (t || RangeLengthValidator)(); };
RangeLengthValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: RangeLengthValidator, selectors: [["", "rangeLength", "", "formControlName", ""], ["", "rangeLength", "", "formControl", ""], ["", "rangeLength", "", "ngModel", ""]], inputs: { rangeLength: "rangeLength" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([RANGE_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Array)
], RangeLengthValidator.prototype, "rangeLength", void 0);

const URL_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => UrlValidator),
    multi: true
};
let UrlValidator = class UrlValidator {
    validate(c) {
        return url(c);
    }
};
UrlValidator.ɵfac = function UrlValidator_Factory(t) { return new (t || UrlValidator)(); };
UrlValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: UrlValidator, selectors: [["", "url", "", "formControlName", ""], ["", "url", "", "formControl", ""], ["", "url", "", "ngModel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([URL_VALIDATOR])] });

const UUID_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => UUIDValidator),
    multi: true
};
let UUIDValidator = class UUIDValidator {
    ngOnInit() {
        this.validator = uuid(this.uuid);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'uuid') {
                this.validator = uuid(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
UUIDValidator.ɵfac = function UUIDValidator_Factory(t) { return new (t || UUIDValidator)(); };
UUIDValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: UUIDValidator, selectors: [["", "uuid", "", "formControlName", ""], ["", "uuid", "", "formControl", ""], ["", "uuid", "", "ngModel", ""]], inputs: { uuid: "uuid" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([UUID_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)
], UUIDValidator.prototype, "uuid", void 0);

const CustomValidators = {
    arrayLength,
    base64,
    creditCard,
    date,
    dateISO,
    digits,
    email,
    equal,
    equalTo,
    gt,
    gte,
    json,
    lt,
    lte,
    max,
    maxDate,
    min,
    minDate,
    notEqual,
    notEqualTo,
    number,
    property,
    range,
    rangeLength,
    url,
    uuid
};
const CustomDirectives = [
    ArrayLengthValidator,
    Base64Validator,
    CreditCardValidator,
    DateValidator,
    DateISOValidator,
    DigitsValidator,
    EmailValidator,
    EqualValidator,
    EqualToValidator,
    GreaterThanValidator,
    GreaterThanEqualValidator,
    JSONValidator,
    LessThanValidator,
    LessThanEqualValidator,
    MaxValidator,
    MaxDateValidator,
    MinValidator,
    MinDateValidator,
    NotEqualValidator,
    NotEqualToValidator,
    NumberValidator,
    PropertyValidator,
    RangeValidator,
    RangeLengthValidator,
    UrlValidator,
    UUIDValidator
];
let CustomFormsModule = class CustomFormsModule {
};
CustomFormsModule.ɵfac = function CustomFormsModule_Factory(t) { return new (t || CustomFormsModule)(); };
CustomFormsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CustomFormsModule });
CustomFormsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ArrayLengthValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[arrayLength][formControlName],[arrayLength][formControl],[arrayLength][ngModel]',
                providers: [ARRAY_LENGTH_VALIDATOR]
            }]
    }], null, { arrayLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Base64Validator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[base64][formControlName],[base64][formControl],[base64][ngModel]',
                providers: [BASE64_VALIDATOR]
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreditCardValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]',
                providers: [CREDIT_CARD_VALIDATOR]
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DateValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[date][formControlName],[date][formControl],[date][ngModel]',
                providers: [DATE_VALIDATOR]
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DateISOValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[dateISO][formControlName],[dateISO][formControl],[dateISO][ngModel]',
                providers: [DATE_ISO_VALIDATOR]
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DigitsValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[digits][formControlName],[digits][formControl],[digits][ngModel]',
                providers: [DIGITS_VALIDATOR]
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmailValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[ngvemail][formControlName],[ngvemail][formControl],[ngvemail][ngModel]',
                providers: [EMAIL_VALIDATOR]
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EqualValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[equal][formControlName],[equal][formControl],[equal][ngModel]',
                providers: [EQUAL_VALIDATOR]
            }]
    }], null, { equal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EqualToValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]',
                providers: [EQUAL_TO_VALIDATOR]
            }]
    }], null, { equalTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GreaterThanValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[gt][formControlName],[gt][formControl],[gt][ngModel]',
                providers: [GREATER_THAN_VALIDATOR]
            }]
    }], null, { gt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GreaterThanEqualValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[gte][formControlName],[gte][formControl],[gte][ngModel]',
                providers: [GREATER_THAN_EQUAL_VALIDATOR]
            }]
    }], null, { gte: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JSONValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[json][formControlName],[json][formControl],[json][ngModel]',
                providers: [JSON_VALIDATOR]
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LessThanValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[lt][formControlName],[lt][formControl],[lt][ngModel]',
                providers: [LESS_THAN_VALIDATOR]
            }]
    }], null, { lt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LessThanEqualValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[lte][formControlName],[lte][formControl],[lte][ngModel]',
                providers: [LESS_THAN_EQUAL_VALIDATOR]
            }]
    }], null, { lte: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaxValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[max][formControlName],[max][formControl],[max][ngModel]',
                providers: [MAX_VALIDATOR]
            }]
    }], null, { max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaxDateValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[maxDate][formControlName],[maxDate][formControl],[maxDate][ngModel]',
                providers: [MAX_DATE_VALIDATOR]
            }]
    }], null, { maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MinValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[min][formControlName],[min][formControl],[min][ngModel]',
                providers: [MIN_VALIDATOR]
            }]
    }], null, { min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MinDateValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[minDate][formControlName],[minDate][formControl],[minDate][ngModel]',
                providers: [MIN_DATE_VALIDATOR]
            }]
    }], null, { minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NotEqualValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[notEqual][formControlName],[notEqual][formControl],[notEqual][ngModel]',
                providers: [NOT_EQUAL_VALIDATOR]
            }]
    }], null, { notEqual: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NotEqualToValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[notEqualTo][formControlName],[notEqualTo][formControl],[notEqualTo][ngModel]',
                providers: [NOT_EQUAL_TO_VALIDATOR]
            }]
    }], null, { notEqualTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NumberValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[number][formControlName],[number][formControl],[number][ngModel]',
                providers: [NUMBER_VALIDATOR]
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PropertyValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[property][formControlName],[property][formControl],[property][ngModel]',
                providers: [PROPERTY_VALIDATOR]
            }]
    }], null, { property: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RangeValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[range][formControlName],[range][formControl],[range][ngModel]',
                providers: [RANGE_VALIDATOR]
            }]
    }], null, { range: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RangeLengthValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[rangeLength][formControlName],[rangeLength][formControl],[rangeLength][ngModel]',
                providers: [RANGE_LENGTH_VALIDATOR]
            }]
    }], null, { rangeLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UrlValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[url][formControlName],[url][formControl],[url][ngModel]',
                providers: [URL_VALIDATOR]
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UUIDValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[uuid][formControlName],[uuid][formControl],[uuid][ngModel]',
                providers: [UUID_VALIDATOR]
            }]
    }], null, { uuid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomFormsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
        args: [{
                declarations: [CustomDirectives],
                exports: [CustomDirectives]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CustomFormsModule, { declarations: [ArrayLengthValidator, Base64Validator, CreditCardValidator, DateValidator, DateISOValidator, DigitsValidator, EmailValidator, EqualValidator, EqualToValidator, GreaterThanValidator, GreaterThanEqualValidator, JSONValidator, LessThanValidator, LessThanEqualValidator, MaxValidator, MaxDateValidator, MinValidator, MinDateValidator, NotEqualValidator, NotEqualToValidator, NumberValidator, PropertyValidator, RangeValidator, RangeLengthValidator, UrlValidator, UUIDValidator], exports: [ArrayLengthValidator, Base64Validator, CreditCardValidator, DateValidator, DateISOValidator, DigitsValidator, EmailValidator, EqualValidator, EqualToValidator, GreaterThanValidator, GreaterThanEqualValidator, JSONValidator, LessThanValidator, LessThanEqualValidator, MaxValidator, MaxDateValidator, MinValidator, MinDateValidator, NotEqualValidator, NotEqualToValidator, NumberValidator, PropertyValidator, RangeValidator, RangeLengthValidator, UrlValidator, UUIDValidator] }); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-custom-validators.js.map

/***/ }),

/***/ 80997:
/*!*******************************************************!*\
  !*** ./src/app/shared/animations/egret-animations.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "egretAnimations": function() { return /* binding */ egretAnimations; }
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 56083);

const reusable = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        opacity: '{{opacity}}',
        transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})',
    }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)('*')),
], {
    params: {
        duration: '200ms',
        delay: '0ms',
        opacity: '0',
        scale: '1',
        x: '0',
        y: '0',
        z: '0',
    },
});
const egretAnimations = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('animate', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('void => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.useAnimation)(reusable)])]),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeInOut', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('0', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            display: 'none',
        })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('1', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            display: 'block',
        })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('0 => 1', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('300ms')),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('1 => 0', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('300ms')),
    ]),
];


/***/ }),

/***/ 89865:
/*!*********************************************************!*\
  !*** ./src/app/views/sessions/error/error.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": function() { return /* binding */ ErrorComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 49356);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 2895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3984);




const _c0 = function () { return ["/"]; };
class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 15, vars: 2, consts: [[1, "page-wrap", "h-full", "mat-bg-default"], [1, "app-error"], [1, "fix"], ["color", "warn", 1, "error-icon"], [1, "error-text"], [1, "error-title"], [1, "error-subtitle"], [1, "error-actions"], ["mat-raised-button", "", "color", "primary", 1, "mb-16", "mr-8", 3, "routerLink"], ["mat-raised-button", "", "color", "warn"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Server Error!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Back to Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Report this Problem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 76702:
/*!*****************************************************************************!*\
  !*** ./src/app/views/sessions/forgot-password/forgot-password.component.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": function() { return /* binding */ ForgotPasswordComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 2895);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-bar */ 73985);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 7639);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 46833);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 64372);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 72257);












function ForgotPasswordComponent_small_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ForgotPasswordComponent {
    constructor() { }
    ngOnInit() {
    }
    submitEmail() {
        this.submitButton.disabled = true;
        this.progressBar.mode = 'indeterminate';
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(); };
ForgotPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], viewQuery: function ForgotPasswordComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__.MatProgressBar, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.progressBar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.submitButton = _t.first);
    } }, decls: 24, vars: 5, consts: [[1, "page-wrap", "h-full", "slate"], [1, "session-form-hold"], ["mode", "determinate", 1, "session-progress"], [1, "text-center", "pt-8", "pb-16"], ["width", "60px", "src", "assets/images/logo.png", "alt", "", 1, "mb-8"], [1, "text-muted", "m-0"], [3, "ngSubmit"], ["fpForm", "ngForm"], [1, ""], [1, "full-width"], ["matInput", "", "name", "email", "required", "", "placeholder", "Email", "value", "", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["class", "form-error-msg", 4, "ngIf"], ["mat-raised-button", "", 1, "mat-primary", "full-width", "mb-16", 3, "disabled"], [1, "text-center"], [1, "mat-primary", "text-center", "full-width", 3, "routerLink"], ["fxFlex", ""], [1, "form-error-msg"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-progress-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "New password will be sent to your email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_9_listener() { return ctx.submitEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgotPasswordComponent_Template_input_ngModelChange_13_listener($event) { return ctx.userEmail = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ForgotPasswordComponent_small_15_Template, 2, 0, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Create a new account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors && (_r1.dirty || _r1.touched) && (_r1 == null ? null : _r1.errors == null ? null : _r1.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/sessions/signin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/sessions/signup");
    } }, directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__.MatProgressBar, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 62896:
/*!*******************************************************************!*\
  !*** ./src/app/views/sessions/lockscreen/lockscreen.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LockscreenComponent": function() { return /* binding */ LockscreenComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 2895);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-bar */ 73985);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 7639);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 72257);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 46833);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 64372);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 3984);












function LockscreenComponent_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LockscreenComponent {
    constructor() {
        this.lockscreenData = {
            password: ''
        };
    }
    ngOnInit() {
    }
    unlock() {
        console.log(this.lockscreenData);
        this.submitButton.disabled = true;
        this.progressBar.mode = 'indeterminate';
    }
}
LockscreenComponent.ɵfac = function LockscreenComponent_Factory(t) { return new (t || LockscreenComponent)(); };
LockscreenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LockscreenComponent, selectors: [["app-lockscreen"]], viewQuery: function LockscreenComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__.MatProgressBar, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.progressBar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.submitButton = _t.first);
    } }, decls: 23, vars: 4, consts: [[1, "page-wrap", "h-full", "mat-bg-default"], [1, "session-form-hold", "session-lockscreen"], ["mode", "determinate", 1, "session-progress"], ["fxFlex", "column", "fxFlexWrap", "wrap"], ["fxFlexWrap", "wrap", 1, "lockscreen-user"], ["src", "assets/images/face-3.jpg", "alt", "", 1, "lockscreen-face"], [1, "m-0", "font-normal"], [1, "text-muted"], [3, "ngSubmit"], ["lockscreenForm", "ngForm"], [1, ""], [1, "full-width"], ["type", "password", "name", "password", "required", "", "matInput", "", "placeholder", "Password", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["class", "form-error-msg", 4, "ngIf"], ["mat-raised-button", "", 1, "mat-primary", "full-width", "mb-8", 3, "disabled"], ["mat-raised-button", "", "color", "accent", 1, "mat-primary", "full-width", 3, "routerLink"], [1, "form-error-msg"]], template: function LockscreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-progress-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Last seen 1 hour ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LockscreenComponent_Template_form_ngSubmit_12_listener() { return ctx.unlock(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LockscreenComponent_Template_input_ngModelChange_16_listener($event) { return ctx.lockscreenData.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LockscreenComponent_small_18_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Unlock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "It's not me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lockscreenData.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors && (_r1.dirty || _r1.touched) && (_r1 == null ? null : _r1.errors == null ? null : _r1.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/sessions/signin");
    } }, directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__.MatProgressBar, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2Nrc2NyZWVuLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 25718:
/*!*****************************************************************!*\
  !*** ./src/app/views/sessions/not-found/not-found.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": function() { return /* binding */ NotFoundComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 49356);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 2895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3984);




const _c0 = function () { return ["/"]; };
class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 15, vars: 2, consts: [[1, "d-flex", "align-items-center", "h-full", "mat-bg-default"], [1, "app-error"], [1, "fix"], ["color", "warn", 1, "error-icon"], [1, "error-text"], [1, "error-title"], [1, "error-subtitle"], [1, "error-actions"], ["mat-raised-button", "", "color", "primary", 1, "mb-16", "mr-8", 3, "routerLink"], ["mat-raised-button", "", "color", "warn"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Page Not Found!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Back to Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Report this Problem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 95134:
/*!***************************************************!*\
  !*** ./src/app/views/sessions/sessions.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionsModule": function() { return /* binding */ SessionsModule; }
/* harmony export */ });
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5052);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/shared-material.module */ 84390);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout */ 374);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 75629);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ 76702);
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ 62896);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin/signin.component */ 48428);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ 36707);
/* harmony import */ var _sessions_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sessions.routing */ 88149);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ 25718);
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error/error.component */ 89865);
/* harmony import */ var _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup2/signup2.component */ 64373);
/* harmony import */ var _signup3_signup3_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup3/signup3.component */ 45096);
/* harmony import */ var _signup4_signup4_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup4/signup4.component */ 64856);
/* harmony import */ var _signin3_signin3_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signin3/signin3.component */ 16361);
/* harmony import */ var _signin4_signin4_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signin4/signin4.component */ 85195);
/* harmony import */ var _signin2_signin2_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./signin2/signin2.component */ 28779);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 74788);







// import { CommonDirectivesModule } from './sdirectives/common/common-directives.module';















class SessionsModule {
}
SessionsModule.ɵfac = function SessionsModule_Factory(t) { return new (t || SessionsModule)(); };
SessionsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: SessionsModule });
SessionsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
            app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_0__.SharedMaterialModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__.FlexLayoutModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__.PerfectScrollbarModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule.forChild(_sessions_routing__WEBPACK_IMPORTED_MODULE_5__.SessionsRoutes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](SessionsModule, { declarations: [_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordComponent, _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_2__.LockscreenComponent, _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__.SigninComponent, _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__.SignupComponent, _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__.NotFoundComponent, _error_error_component__WEBPACK_IMPORTED_MODULE_7__.ErrorComponent, _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_8__.Signup2Component, _signup3_signup3_component__WEBPACK_IMPORTED_MODULE_9__.Signup3Component, _signup4_signup4_component__WEBPACK_IMPORTED_MODULE_10__.Signup4Component, _signin3_signin3_component__WEBPACK_IMPORTED_MODULE_11__.Signin3Component, _signin4_signin4_component__WEBPACK_IMPORTED_MODULE_12__.Signin4Component, _signin2_signin2_component__WEBPACK_IMPORTED_MODULE_13__.Signin2Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_0__.SharedMaterialModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__.FlexLayoutModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__.PerfectScrollbarModule, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule] }); })();


/***/ }),

/***/ 88149:
/*!****************************************************!*\
  !*** ./src/app/views/sessions/sessions.routing.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionsRoutes": function() { return /* binding */ SessionsRoutes; }
/* harmony export */ });
/* harmony import */ var _signup4_signup4_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup4/signup4.component */ 64856);
/* harmony import */ var _signup3_signup3_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup3/signup3.component */ 45096);
/* harmony import */ var _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup2/signup2.component */ 64373);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ 76702);
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ 62896);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signin/signin.component */ 48428);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ 36707);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./not-found/not-found.component */ 25718);
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error/error.component */ 89865);
/* harmony import */ var _signin3_signin3_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signin3/signin3.component */ 16361);
/* harmony import */ var _signin4_signin4_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signin4/signin4.component */ 85195);
/* harmony import */ var _signin2_signin2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signin2/signin2.component */ 28779);












const SessionsRoutes = [
    {
        path: "",
        children: [
            {
                path: "signup",
                component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__.SignupComponent,
                data: { title: "Signup" }
            },
            {
                path: "signup2",
                component: _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_2__.Signup2Component,
                data: { title: "Signup2" }
            },
            {
                path: "signin2",
                component: _signin2_signin2_component__WEBPACK_IMPORTED_MODULE_11__.Signin2Component,
                data: { title: "Signin2" }
            },
            {
                path: "signup3",
                component: _signup3_signup3_component__WEBPACK_IMPORTED_MODULE_1__.Signup3Component,
                data: { title: "Signup3" }
            },
            {
                path: "signin3",
                component: _signin3_signin3_component__WEBPACK_IMPORTED_MODULE_9__.Signin3Component,
                data: { title: "sign-in-3" }
            },
            {
                path: "signup4",
                component: _signup4_signup4_component__WEBPACK_IMPORTED_MODULE_0__.Signup4Component,
                data: { title: "Signup4" }
            },
            {
                path: "signin4",
                component: _signin4_signin4_component__WEBPACK_IMPORTED_MODULE_10__.Signin4Component,
                data: { title: "Signin4" }
            },
            {
                path: "signin",
                component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_5__.SigninComponent,
                data: { title: "Signin" }
            },
            {
                path: "forgot-password",
                component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__.ForgotPasswordComponent,
                data: { title: "Forgot password" }
            },
            {
                path: "lockscreen",
                component: _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_4__.LockscreenComponent,
                data: { title: "Lockscreen" }
            },
            {
                path: "404",
                component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__.NotFoundComponent,
                data: { title: "Not Found" }
            },
            {
                path: "error",
                component: _error_error_component__WEBPACK_IMPORTED_MODULE_8__.ErrorComponent,
                data: { title: "Error" }
            }
        ]
    }
];


/***/ }),

/***/ 28779:
/*!*************************************************************!*\
  !*** ./src/app/views/sessions/signin2/signin2.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Signin2Component": function() { return /* binding */ Signin2Component; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-custom-validators */ 14588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 2895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5052);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 72257);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 46833);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 64372);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 89713);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ 50591);












const _c0 = function () { return {}; };
class Signin2Component {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        const password = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required);
        const confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', ngx_custom_validators__WEBPACK_IMPORTED_MODULE_1__.CustomValidators.equalTo(password));
        this.signupForm = this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.email]],
            password: password,
            agreed: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]
        });
    }
    onSubmit() {
        if (!this.signupForm.invalid) {
            // do what you wnat with your data
            console.log(this.signupForm.value);
        }
    }
}
Signin2Component.ɵfac = function Signin2Component_Factory(t) { return new (t || Signin2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder)); };
Signin2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Signin2Component, selectors: [["app-signin2"]], decls: 33, vars: 4, consts: [[1, "seciton-left"], [1, "section-left-content"], [1, "text-36", "font-weight-light"], [1, "mb-24", "text-small"], ["mat-flat-button", "", "color", "accent", 3, "routerLink"], [1, "form-holder", "h-full-screen", "mat-bg-card", "mat-elevation-z4", 3, "perfectScrollbar"], ["fxLayout", "column", 1, "signup-form", 3, "formGroup", "ngSubmit"], [1, "form-headline", "text-center", "mb-32"], [1, "font-weight-light"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "mb-48"], ["width", "200px", "src", "assets/images/illustrations/breaking_barriers.svg", "alt", ""], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "email", "type", "email", "name", "email", "placeholder", "Email"], ["matInput", "", "formControlName", "password", "type", "password", "name", "password", "placeholder", "********"], ["formControlName", "agreed", 1, "mb-24"], ["mat-raised-button", "", "color", "primary"], [1, "my-32"], ["fxLayout", "column", "fxLayoutGap", "16px", 1, "mb-24"], ["mat-raised-button", "", "color", "warn", "type", "button"]], template: function Signin2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Don't have an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Stop wasting time and money. It's free!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function Signin2Component_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Sign in to your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-checkbox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "I agree with terms and condtions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Signin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "mat-divider", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Signin with Auth0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Firebase Signin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/sessions/signup2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.signupForm);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckbox, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutGapDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduaW4yLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 16361:
/*!*************************************************************!*\
  !*** ./src/app/views/sessions/signin3/signin3.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Signin3Component": function() { return /* binding */ Signin3Component; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/animations/egret-animations */ 80997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5052);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 72257);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 46833);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 64372);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 2895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3984);










const _c0 = function () { return { y: "40px", opacity: "0", delay: "100ms", duration: "400ms" }; };
const _c1 = function (a1) { return { value: "*", params: a1 }; };
class Signin3Component {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.signupForm = this.fb.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
        });
    }
    onSubmit() {
        if (this.signupForm.valid) {
            // do what you want to do with your data
            console.log(this.signupForm.value);
        }
    }
}
Signin3Component.ɵfac = function Signin3Component_Factory(t) { return new (t || Signin3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder)); };
Signin3Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Signin3Component, selectors: [["app-signin3"]], decls: 24, vars: 5, consts: [[1, "signup3-wrap"], [1, "signup3-form-holder", "mat-bg-default", "mat-elevation-z4", "py-48", 3, "perfectScrollbar"], [1, "form-headline", "text-center", "mb-32"], [1, "font-weight-light"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "mb-32"], ["width", "200px", "src", "assets/images/illustrations/breaking_barriers.svg", "alt", ""], [1, "signup3-form", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "username", "type", "text", "name", "username", "placeholder", "Username"], ["matInput", "", "formControlName", "password", "type", "password", "name", "password", "placeholder", "********"], [1, "mb-24"], ["fxFill", "", "mat-raised-button", "", "color", "primary"], ["routerLink", "/sessions/signup3", 1, "mat-color-primary", "font-weight-bold", "mx-8"]], template: function Signin3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Sign in to your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function Signin3Component_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.signupForm);
    } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__.PerfectScrollbarDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.FlexFillDirective, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduaW4zLmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_0__.egretAnimations } });


/***/ }),

/***/ 85195:
/*!*************************************************************!*\
  !*** ./src/app/views/sessions/signin4/signin4.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Signin4Component": function() { return /* binding */ Signin4Component; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-custom-validators */ 14588);
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/animations/egret-animations */ 80997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 72257);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5052);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 46833);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 64372);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ 89713);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 2895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 3984);












const _c0 = function () { return {}; };
const _c1 = function () { return { y: "40px", opacity: "0", delay: "100ms", duration: "400ms" }; };
const _c2 = function (a1) { return { value: "*", params: a1 }; };
class Signin4Component {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        const password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required);
        const confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', ngx_custom_validators__WEBPACK_IMPORTED_MODULE_2__.CustomValidators.equalTo(password));
        this.signupForm = this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
            password: password,
            agreed: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
        });
    }
    onSubmit() {
        if (!this.signupForm.invalid) {
            // do what you wnat with your data
            console.log(this.signupForm.value);
        }
    }
}
Signin4Component.ɵfac = function Signin4Component_Factory(t) { return new (t || Signin4Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder)); };
Signin4Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: Signin4Component, selectors: [["app-signin4"]], decls: 24, vars: 7, consts: [["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "h-full-screen", "signup4-wrap", 3, "perfectScrollbar"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "start stretch", "fxFlex", "60", "fxFlex.xs", "94", "fxFlex.sm", "80", 1, "signup4-container", "mat-elevation-z4", "white"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxFlex", "40", 1, "signup4-header", "mat-bg-default"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, ""], ["width", "200px", "src", "assets/images/illustrations/lighthouse.svg", "alt", ""], ["fxFlex", "60", "fxLayout", "row wrap", "fxLayoutAlign", "center center"], [1, "signup4-form", "mat-bg-card", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "email", "type", "email", "name", "email", "placeholder", "Email"], ["matInput", "", "formControlName", "password", "type", "password", "name", "password", "placeholder", "********"], ["formControlName", "agreed"], ["fxLayout", "row wrap", "fxLayoutAlign", "start center", 2, "margin-top", "20px"], ["mat-flat-button", "", "color", "primary"], [1, "px-16"], ["routerLink", "/sessions/signup4", 1, "font-weight-bold", "mat-color-primary"]], template: function Signin4Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function Signin4Component_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-checkbox", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "I agree with terms and condtions");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "or");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.signupForm);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckbox, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduaW40LmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_0__.egretAnimations } });


/***/ }),

/***/ 48428:
/*!***********************************************************!*\
  !*** ./src/app/views/sessions/signin/signin.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninComponent": function() { return /* binding */ SigninComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 2895);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ 73985);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/auth/jwt-auth.service */ 93921);
/* harmony import */ var _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/app-loader/app-loader.service */ 77009);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 3069);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 75629);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 7639);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 46833);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 64372);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ 89713);


















function SigninComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.errorMsg);
} }
function SigninComponent_small_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Kullan\u0131c\u0131 ad\u0131 giriniz ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SigninComponent_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Parola giriniz ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class SigninComponent {
    constructor(jwtAuth, egretLoader, router, route, snackbar, translate) {
        this.jwtAuth = jwtAuth;
        this.egretLoader = egretLoader;
        this.router = router;
        this.route = route;
        this.snackbar = snackbar;
        this.translate = translate;
        this.errorMsg = '';
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.snackbar = snackbar;
    }
    ngOnInit() {
        this.signinForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            rememberMe: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(true)
        });
        // this.route.queryParams
        //   .pipe(takeUntil(this._unsubscribeAll))
        //   .subscribe(params => this.return = params['return'] || '/');
    }
    ngAfterViewInit() {
        // this.autoSignIn();
    }
    ngOnDestroy() {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
    signin() {
        const signinData = this.signinForm.value;
        //if (signinData.username == '' && signinData.password == '') {
        //    alert("Kullan�c� ad� ve �ifre girilmeli");
        //    return;
        //}
        this.submitButton.disabled = true;
        this.progressBar.mode = 'indeterminate';
        this.jwtAuth.signin(signinData.username, signinData.password)
            .subscribe(response => {
            if (response.isSuccess) {
                this.jwtAuth.setUserAndToken(response.data.sessionId, response.data, true);
                this.snackbar.open(this.translate.instant("GENERAL.SUCCES"), this.translate.instant(response.message), {
                    horizontalPosition: 'start',
                    verticalPosition: 'bottom',
                    duration: 1000
                });
                this.jwtAuth.signingIn = false;
                this.router.navigateByUrl(this.jwtAuth.return);
            }
            else {
                this.jwtAuth.signingIn = false;
                this.snackbar.open(this.translate.instant("GENERAL.ERROR"), this.translate.instant(response.errorMessage), {
                    horizontalPosition: 'start',
                    verticalPosition: 'bottom',
                    duration: 1000
                });
                this.submitButton.disabled = false;
                this.progressBar.mode = 'determinate';
            }
        }, err => {
            this.submitButton.disabled = false;
            this.progressBar.mode = 'determinate';
            this.errorMsg = err.message;
            // console.log(err);
        });
    }
    autoSignIn() {
        if (this.jwtAuth.return === '/') {
            return;
        }
        this.egretLoader.open(`Automatically Signing you in! \n Return url: ${this.jwtAuth.return.substring(0, 20)}...`, { width: '320px' });
        setTimeout(() => {
            this.signin();
            console.log('autoSignIn');
            this.egretLoader.close();
        }, 2000);
    }
}
SigninComponent.ɵfac = function SigninComponent_Factory(t) { return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_0__.JwtAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_1__.AppLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService)); };
SigninComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SigninComponent, selectors: [["app-signin"]], viewQuery: function SigninComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__.MatProgressBar, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.progressBar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.submitButton = _t.first);
    } }, decls: 24, vars: 8, consts: [[1, "page-wrap", "h-full", "slate"], [1, "session-form-hold"], ["mode", "determinate", 1, "session-progress"], [1, "text-center", "pt-8", "pb-16"], ["src", "assets/images/logos/Logo.jpeg", "width", "102", "height", "82"], [1, "text-muted", "m-0"], ["class", "text-center", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, ""], [1, "full-width"], ["matInput", "", "name", "username", "placeholder", "Kullan\u0131c\u0131 ad\u0131", "value", "", 3, "formControl"], ["class", "form-error-msg", 4, "ngIf"], ["type", "password", "name", "password", "matInput", "", "placeholder", "Parola", "value", "", 3, "formControl"], [1, "pb-16"], ["name", "rememberMe", 1, "pb-16", 3, "formControl"], ["mat-raised-button", "", 1, "mat-primary", "full-width", "mb-16", 3, "disabled"], [1, "text-center"], [1, "text-red"], [1, "form-error-msg"]], template: function SigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "mat-progress-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Yetkili Giri\u015Fi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SigninComponent_p_9_Template, 3, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_10_listener() { return ctx.signin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, SigninComponent_small_14_Template, 2, 0, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, SigninComponent_small_18_Template, 2, 0, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-checkbox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Beni hat\u0131rla ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Giri\u015F Yap");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.signinForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.signinForm.controls["username"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.signinForm.controls["username"].hasError("required") && ctx.signinForm.controls["username"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.signinForm.controls["password"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.signinForm.controls["password"].hasError("required") && ctx.signinForm.controls["password"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.signinForm.controls["rememberMe"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.signinForm.invalid);
    } }, directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__.MatProgressBar, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckbox, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduaW4uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 64373:
/*!*************************************************************!*\
  !*** ./src/app/views/sessions/signup2/signup2.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Signup2Component": function() { return /* binding */ Signup2Component; }
/* harmony export */ });
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-custom-validators */ 14588);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5052);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 72257);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 46833);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 64372);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 89713);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 2895);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 50591);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 3984);












const _c0 = function () { return {}; };
class Signup2Component {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        const password = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required);
        const confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', ngx_custom_validators__WEBPACK_IMPORTED_MODULE_1__.CustomValidators.equalTo(password));
        this.signupForm = this.fb.group({
            firstName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
            lastName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.email]],
            password: password,
            confirmPassword: confirmPassword,
            agreed: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]
        });
    }
    onSubmit() {
        if (!this.signupForm.invalid) {
            // do what you wnat with your data
            console.log(this.signupForm.value);
        }
    }
}
Signup2Component.ɵfac = function Signup2Component_Factory(t) { return new (t || Signup2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder)); };
Signup2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Signup2Component, selectors: [["app-signup2"]], decls: 50, vars: 4, consts: [[1, "seciton-left"], [1, "form-holder", "h-full-screen", "mat-elevation-z4", "mat-bg-card", 3, "perfectScrollbar"], ["fxLayout", "column", "fxLayoutAlign", "start", 1, "signup-form", 3, "formGroup", "ngSubmit"], [1, "form-headline", "text-center", "mb-16"], [1, "font-weight-bold"], [1, "text-muted"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "mb-32"], ["width", "200px", "src", "assets/images/illustrations/posting_photo.svg", "alt", ""], ["fxLayout", "row wrap", "fxLayoutGap.md", "16px", "fxLayoutGap.lg", "16px"], ["fxFlex", "1 1 0%", "appearance", "outline"], ["formControlName", "firstName", "matInput", "", "type", "text", "name", "first_name", "placeholder", "First name"], ["formControlName", "lastName", "matInput", "", "type", "text", "name", "Last_name", "placeholder", "Last name"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "username", "type", "text", "name", "username", "placeholder", "Username"], ["matInput", "", "formControlName", "email", "type", "email", "name", "email", "placeholder", "Email"], ["matInput", "", "formControlName", "password", "type", "password", "name", "password", "placeholder", "********"], ["matInput", "", "type", "password", "name", "confirm_password", "placeholder", "********", "formControlName", "confirmPassword"], ["formControlName", "agreed", 1, "mb-24"], ["mat-raised-button", "", "color", "primary"], [1, "my-32"], ["fxLayout", "column", "fxLayoutGap", "16px", 1, "mb-24"], ["mat-raised-button", "", "color", "warn", "type", "button"], [1, "text-center"], [1, "mat-color-primary", "text-center", "full-width", 3, "routerLink"]], template: function Signup2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function Signup2Component_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Lets get started!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Create an account get unlimited access");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Confirm password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Password didn't match ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-checkbox", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "I agree with terms and condtions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "mat-divider", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Signup with Auth0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Firebase Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Sign in with an existing account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/sessions/signin2");
    } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__.PerfectScrollbarDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutGapDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckbox, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 45096:
/*!*************************************************************!*\
  !*** ./src/app/views/sessions/signup3/signup3.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Signup3Component": function() { return /* binding */ Signup3Component; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/animations/egret-animations */ 80997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5052);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 72257);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 46833);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 64372);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 2895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3984);










const _c0 = function () { return {}; };
const _c1 = function () { return { y: "40px", opacity: "0", delay: "100ms", duration: "400ms" }; };
const _c2 = function (a1) { return { value: "*", params: a1 }; };
class Signup3Component {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.signupForm = this.fb.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
        });
    }
    onSubmit() {
        if (this.signupForm.valid) {
            // do what you want to do with your data
            console.log(this.signupForm.value);
        }
    }
}
Signup3Component.ɵfac = function Signup3Component_Factory(t) { return new (t || Signup3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder)); };
Signup3Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Signup3Component, selectors: [["app-signup3"]], decls: 30, vars: 7, consts: [[1, "signup3-wrap"], [1, "signup3-form-holder", "mat-bg-default", "mat-elevation-z4", "pt-48", "pb-16", 3, "perfectScrollbar"], [1, "form-headline", "text-center", "mb-32"], [1, "font-weight-bold"], [1, "text-muted"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "mb-32"], ["width", "200px", "src", "assets/images/illustrations/posting_photo.svg", "alt", ""], [1, "signup3-form", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "username", "type", "text", "name", "username", "placeholder", "Username"], ["matInput", "", "formControlName", "email", "type", "email", "name", "email", "placeholder", "Email"], ["matInput", "", "formControlName", "password", "type", "password", "name", "password", "placeholder", "********"], [1, "mb-24"], ["fxFill", "", "mat-raised-button", "", "color", "primary"], ["routerLink", "/sessions/signin3", 1, "mat-color-primary", "font-weight-bold", "mx-8"]], template: function Signup3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Lets get started!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Create an account get unlimited access");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function Signup3Component_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0))("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.signupForm);
    } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__.PerfectScrollbarDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.FlexFillDirective, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAzLmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_0__.egretAnimations } });


/***/ }),

/***/ 64856:
/*!*************************************************************!*\
  !*** ./src/app/views/sessions/signup4/signup4.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Signup4Component": function() { return /* binding */ Signup4Component; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-custom-validators */ 14588);
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/animations/egret-animations */ 80997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 72257);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5052);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 46833);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 64372);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ 89713);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 2895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 3984);












const _c0 = function () { return {}; };
const _c1 = function () { return { y: "120px", opacity: "0", delay: "100ms", duration: "400ms" }; };
const _c2 = function (a1) { return { value: "*", params: a1 }; };
class Signup4Component {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        const password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required);
        const confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', ngx_custom_validators__WEBPACK_IMPORTED_MODULE_2__.CustomValidators.equalTo(password));
        this.signupForm = this.fb.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
            password: password,
            agreed: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
        });
    }
    onSubmit() {
        if (!this.signupForm.invalid) {
            // do what you wnat with your data
            console.log(this.signupForm.value);
        }
    }
}
Signup4Component.ɵfac = function Signup4Component_Factory(t) { return new (t || Signup4Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder)); };
Signup4Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: Signup4Component, selectors: [["app-signup4"]], decls: 28, vars: 7, consts: [["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "h-full-screen", "signup4-wrap", 3, "perfectScrollbar"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "start stretch", "fxFlex", "60", "fxFlex.xs", "94", "fxFlex.sm", "80", 1, "signup4-container", "mat-elevation-z4"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxFlex", "40", 1, "signup4-header", "mat-bg-default"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, ""], ["width", "200px", "src", "assets/images/illustrations/posting_photo.svg", "alt", ""], ["fxFlex", "60", "fxLayout", "row wrap", "fxLayoutAlign", "center center"], [1, "signup4-form", "mat-bg-card", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "username", "type", "text", "name", "username", "placeholder", "Username"], ["matInput", "", "formControlName", "email", "type", "email", "name", "email", "placeholder", "Email"], ["matInput", "", "formControlName", "password", "type", "password", "name", "password", "placeholder", "********"], ["formControlName", "agreed"], ["fxLayout", "row wrap", "fxLayoutAlign", "start center", 2, "margin-top", "20px"], ["mat-flat-button", "", "color", "primary"], [2, "padding", "0px 8px 0px 16px"], ["routerLink", "/sessions/signin4", 1, "font-weight-bold", "mat-color-primary"]], template: function Signup4Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function Signup4Component_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-checkbox", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "I agree with terms and condtions");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "or");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.signupForm);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckbox, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXA0LmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_0__.egretAnimations } });


/***/ }),

/***/ 36707:
/*!***********************************************************!*\
  !*** ./src/app/views/sessions/signup/signup.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": function() { return /* binding */ SignupComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 2895);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-bar */ 73985);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-custom-validators */ 14588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 7639);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 46833);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 64372);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 89713);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 3984);














function SignupComponent_small_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_small_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invaild email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_small_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_small_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_small_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwords do not math.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_small_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You must agree to the terms and conditions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SignupComponent {
    constructor() { }
    ngOnInit() {
        const password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required);
        const confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', ngx_custom_validators__WEBPACK_IMPORTED_MODULE_2__.CustomValidators.equalTo(password));
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]),
            password: password,
            confirmPassword: confirmPassword,
            agreed: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', (control) => {
                const agreed = control.value;
                if (!agreed) {
                    return { agreed: true };
                }
                return null;
            })
        });
    }
    signup() {
        const signupData = this.signupForm.value;
        console.log(signupData);
        this.submitButton.disabled = true;
        this.progressBar.mode = 'indeterminate';
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(); };
SignupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], viewQuery: function SignupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__.MatProgressBar, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.progressBar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.submitButton = _t.first);
    } }, decls: 35, vars: 13, consts: [[1, "page-wrap", "h-full", "slate"], [1, "session-form-hold"], ["mode", "determinate", 1, "session-progress"], [1, "text-center", "pt-8", "pb-16"], ["src", "assets/images/logos/site-logo.png", "alt", "", 1, "mb-8", 2, "width", "160px"], [1, "text-muted", "m-0"], [3, "formGroup", "ngSubmit"], [1, ""], [1, "full-width"], ["matInput", "", "type", "email", "name", "email", "placeholder", "Your Email", "value", "", 3, "formControl"], ["class", "form-error-msg", 4, "ngIf"], ["type", "password", "name", "password", "matInput", "", "placeholder", "Password", "value", "", 3, "formControl"], ["type", "password", "name", "confirmPassword", "matInput", "", "placeholder", "Confirm Password", "value", "", 3, "formControl"], [1, "pb-16"], ["name", "agreed", 1, "pb-16", 3, "formControl"], ["mat-raised-button", "", 1, "mat-primary", "full-width", "mb-16", 3, "disabled"], [1, "text-center"], [1, "text-center", "full-width", 3, "routerLink"], [1, "form-error-msg"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-progress-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lets get started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sign up to use our service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_11_listener() { return ctx.signup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SignupComponent_small_15_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SignupComponent_small_16_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SignupComponent_small_20_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SignupComponent_small_24_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SignupComponent_small_25_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-checkbox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "I have read and agree to the terms of service.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SignupComponent_small_29_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sign in to existing account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.signupForm.controls["email"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls["email"].hasError("required") && ctx.signupForm.controls["email"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls["email"].hasError("email") && ctx.signupForm.controls["email"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.signupForm.controls["password"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls["password"].hasError("required") && ctx.signupForm.controls["password"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.signupForm.controls["confirmPassword"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls["confirmPassword"].hasError("required") && ctx.signupForm.controls["confirmPassword"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls["confirmPassword"].hasError("equalTo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.signupForm.controls["agreed"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls["agreed"].hasError("agreed") && ctx.signupForm.controls["agreed"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.signupForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/sessions/signin");
    } }, directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__.MatProgressBar, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckbox, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 48077:
/*!*************!*\
  !*** tslib ***!
  \*************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__assign": function() { return /* binding */ __assign; },
/* harmony export */   "__rest": function() { return /* binding */ __rest; },
/* harmony export */   "__decorate": function() { return /* binding */ __decorate; },
/* harmony export */   "__param": function() { return /* binding */ __param; },
/* harmony export */   "__metadata": function() { return /* binding */ __metadata; },
/* harmony export */   "__awaiter": function() { return /* binding */ __awaiter; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__createBinding": function() { return /* binding */ __createBinding; },
/* harmony export */   "__exportStar": function() { return /* binding */ __exportStar; },
/* harmony export */   "__values": function() { return /* binding */ __values; },
/* harmony export */   "__read": function() { return /* binding */ __read; },
/* harmony export */   "__spread": function() { return /* binding */ __spread; },
/* harmony export */   "__spreadArrays": function() { return /* binding */ __spreadArrays; },
/* harmony export */   "__await": function() { return /* binding */ __await; },
/* harmony export */   "__asyncGenerator": function() { return /* binding */ __asyncGenerator; },
/* harmony export */   "__asyncDelegator": function() { return /* binding */ __asyncDelegator; },
/* harmony export */   "__asyncValues": function() { return /* binding */ __asyncValues; },
/* harmony export */   "__makeTemplateObject": function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   "__importStar": function() { return /* binding */ __importStar; },
/* harmony export */   "__importDefault": function() { return /* binding */ __importDefault; },
/* harmony export */   "__classPrivateFieldGet": function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   "__classPrivateFieldSet": function() { return /* binding */ __classPrivateFieldSet; }
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ })

}]);
//# sourceMappingURL=src_app_views_sessions_sessions_module_ts-es2015.js.map