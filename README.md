# INCOMPLETE - WORK IN PROGRESS

This is a work in progress, I am publishing early
to preserve the name in npm while I work on it over
the next couple days.

# md-datepicker

Date Picker Control

* Inspired by Material Design
* Stand Alone
* [demo](http://tracker1.github.io/md-datepicker/)

## Installation

```js
npm install -save md-datepicker
```

Alternatively, you can clone the github repository,
`npm i && npm build` then use the output script under
`dist/` which if included directly in the browser will
be `DatePickerModal`.

### Styles

In the `dist/` directory, there is a build `DatePickerModal.css`.
This needs to be included in order for the constol to render properly.

I had considered embedding the styles programatically, however this
would require more work that I am prepared to do at this time in order
to support customization of the styles.


## Usage

```js
DatePickerModal.choose(options, callbackMethod);
```

### Options (object)

Input dates (`value`, `min`, `max`) support short syntax ISO-style strings,
such as `yyyy`, `yyyy-mm`, `yyyy-mm-dd` which will be parsed as a localized date.

```js
var options = {
  // (optional) minimum allowed date (inclusive)
  // string will be coerced via new Date(min)
  // default 1880-01-01
  min: new Date(2015, 09, 12),

  // (optional) the maximum allowed date (exclusive)
  // string will be coerced via new Date(max)
  // defaults to 100 years from the end of this year.
  max: new Date(2019, 0, 1),

  // (optional) Incomming "Selected" Date
  value: Date or String, // Default: Current Date

  // (optional) Display more than one month in the Day chooser
  monthsToShow: 1 - 3, // Default: 1

  // (optional) Start of week
  startOfWeek: 0, // Default: sunday == 0

  // (optional) custom date checking
  // return a falsy value to disable the date
  // return a truthy value to enable the date
  // return a string, to have that added to the className for the button
  checkDate: function(dtm) {
    // first friday of a month unavailable
    if (dtm.getDate() < 8 && dtm.getDay() == 5) return false;

    // all other days good to go
    return true;
  }
};
```

### Callback (Node-style)

```js
function callbackMethod(err, date) {
  // err will be an Error Object
  if (err) {
    //do something with error
    return;
  }

  // if no value is specified, null is returned upon cancel
  if (!date) {
    // cancelled without a default value
    return;
  }

  // date will be a Date object set
  // as local Date
  console.log(date.getFullYear(), date.getMonth()+1, date.getDate());

  //do something with selected date
}
```