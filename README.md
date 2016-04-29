# INCOMPLETE - WORK IN PROGRESS

This is a work in progress, I am publishing early 
to preserve the name in npm while I work on it over 
the next couple days.

# md-datepicker

Date Picker Control

* Inspired by Material Design
* Stand Alone

## Installation

```
npm install -save md-datepicker
```

Alternatively, you can clone the github repository, 
`npm i && npm build` then use the output script under 
`dist/` which if included directly in the browser will 
be `DatePickerControl`.

## Usage

```
DatePickerControl.choose(options, callback);
```

### Options (object)

```
DatePickerControl.choose({
    
    // Incomming "Selected" Date
    value: Date or String, // Default: Current Date
    
    // Display more than one month in the Day chooser
    monthsToShow: 1 - 3, // Default: 1
    
    // Show week counter in Day chooser
    showWeekCount: Boolean, // Default: false
    
}, ...);
```

### Callback (Node-style)

```
DatePickerControl.choose(..., function(err, date) {
    
    // err will be an Error Object
    
    // date will be a Date object set 
    // as UTC without a time part
    console.log(date.ToISOString()); 
    
    // outputs '2015-01-01T00:00:00.000Z'
}
```