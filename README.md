# OneStarter

A jQuery plugin for easily making HTML appear in the style of Salesforce1.  OneStarter utilizes CSS from the Salesforce1 style guide here:

http://sfdc-styleguide.herokuapp.com/

However, instead of having to port a wide variety of css classes, a la:

```html
<ul class="list-plain fw-normal bg-2 man pan">
  <li class="active--list-1 pam text-color-1 f4 border-bottom border--3">List Item 1</li>
  <li class="active--list-1 pam text-color-1 f4 border-bottom border--3">List Item 2</li>
  <li class="active--list-1 pam text-color-1 f4 border-bottom border--3">List Item 3</li>
  <li class="active--list-1 pam text-color-1 f4">List Item 4</li>
</ul>
```

You can just have:

```html
<h2>Basic List Example</h2>
<ul class="list-simple">
	<li class="list-simple">Item 1</li>
	<li class="list-simple">Item 2</li>
	<li class="list-simple">Item 3</li>
</ul>
```

And style the div using OneStarter.  The plugin also includes the ability to mimic or control various S1 navigation points, including:

* Enabling / Disabling the Submit
* Closing an Action
* Carousel style divs

## Pre Reqs 
1. jQuery
2. The OneStarter and Style Guide CSS
3. For Carousel navigation, the TouchSwipe jQuery plugin

## Basic Usage
To apply the baseline CSS to your page, wrap your content in a single div and then call the plugin.  The default plugin method takes one parameter, which denotes whether the page is intended as a global-action,record-action or app.

```html
<div id="one-app">
	<h1>One Starter jQuery Plugin</h1>
	<article class="padded">
		This is a sample application using the One Starter jQuery plugin.
	</article>
</div>
```

```javascript
	$(document).ready(function() {
   		
       	s1 = $('div#one-app').oneStarter('global-action');

     });
```	
## Additional Styles
OneStarter can typically style base HTML elements like H1 and input fields, there are a few additional styles to detail elements:


| Class | Element | Effect|
|-------|---------|--------|
|padded | article, section, div, span | forces a 5px padding |
|list-simple | ul | basic list with rule lines |
|list-plain | ul | basic list without rule lines |
|field-label| span | sets up text for a field label |
|simple-bold | h, span, div | sets fonts for bold |


## Interacting with the Submit Button
The plugin returns an object which includes methods for enabling and disabling the Submit button found in Salesforce1 for global and record level actions.  In the desktop browser, a submit button will be created for the record action (or removed on disable).  The enable method can take a callback to handle the submission itself.  For instance:

```javascript
 $(document).ready(function() {
   		
       	s1 = $('div#one-app').oneStarter('record-action').enableSubmit(function() {
            EmailScorecard.createEmail("{!Scorecard__c.Id}",function(res, mes) {
         			    s1.close();
                		s1.disableSubmit();
        		    }); 
            });
            
    	});
```
Will enable the submit button on load, and on click enact the Remote Action method in Apex.  Then it will close the action / disable the submit button.

## Creating Carousel Divs

