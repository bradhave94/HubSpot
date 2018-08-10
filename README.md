# Cheat Sheet for HubSpot Code Snippets and Modules.

## Boilerplate
* [CompanyStyle.css](https://github.com/bradhave94/HubSpot/blob/master/Boilerplate/CompanyStyle.css)
* [CompanyModules.css](https://github.com/bradhave94/HubSpot/blob/master/Boilerplate/CompanyModules.css)
* [CompanyMain.js](https://github.com/bradhave94/HubSpot/blob/master/Boilerplate/CompanyMain.js)

## Modules (Pre DM2)
* [FAQ/Accordion](https://github.com/bradhave94/HubSpot/wiki/FAQ-Accordion)
* [Well](https://github.com/bradhave94/HubSpot/wiki/Well)
* [Tabber](https://github.com/bradhave94/HubSpot/wiki/Tabber)
* [Back To Top](https://github.com/bradhave94/HubSpot/blob/master/Custom%20Modules/back-to-top.html)
* [Small Header](https://github.com/bradhave94/HubSpot/blob/master/Custom%20Modules/small-header.html)
* [FA Social](https://github.com/bradhave94/HubSpot/blob/master/Custom%20Modules/fa-social.html)
* [YouTube Modal](https://github.com/bradhave94/HubSpot/wiki/YouTube-Modal)
* [Half Half Block](https://github.com/bradhave94/HubSpot/wiki/Half-Half-Block)

## HubL
* [Banner Image](https://github.com/bradhave94/HubSpot/blob/master/HubL/banner-image)
* [Export To Template](https://github.com/bradhave94/HubSpot/blob/master/HubL/export-to-template)
* [Toggle](https://github.com/bradhave94/HubSpot/blob/master/HubL/toggle.html)
* [Recent Posts](https://github.com/bradhave94/HubSpot/blob/master/HubL/blog_recent_posts)
* [Recent Post by Topic](https://github.com/bradhave94/HubSpot/blob/master/HubL/blog_recent_topic_posts)

## JavaScript
* [Equal Heights](https://github.com/bradhave94/HubSpot/blob/master/js/equalHeights.js)


## CSS
* [Media Queries](https://github.com/bradhave94/HubSpot/blob/master/css/Bootstrap4Breakpoints.css)

# Custom Module Fields

### Available Fields

* [Choice](#choice)
* Text
* Image
* Number
* Date
* Date and Time
* CTA
* Blog
* Tag
* Form
* Color
* Page
* Follow-up Email
* Email Address
* File
* HubDB Table
* Simple Menu
* Menu
* Meetings
* Logo
* Icon

## Choice
A radio select/pick list option visible in the content editor that lets the marketer select and insert a predefined value into the content of the module

``` 
{
    "id" : "",
    "name" : "",
    "label" : "",
    "display" : "select",
    "max_depth" : 0,
    "choices" : [ 
        [ "min", "Minimum" ], 
        [ "narrow", "Narrow" ], 
        [ "wide", "Wide" ], 
        [ "max", "Maximum" ] 
    ],
    "type" : "choice",
    "default" : ""
}
```

### Text
Use this for single-line text sections of your custom module, like the header
```
{
    "id" : "",
    "name" : "",
    "label" : "",
    "type" : "text",
    "default" : null
}
```

### Image
A single image container module that includes sizing options, default image, and alt text parameters
* `resizable` - will hide display options


```
{
    "id" : "",
    "name" : "",
    "label" : " Image",
    "type" : "image",
    "resizable" : false,
    "default" : {
        "src" : "",
        "alt" : "",
        "width" : "",
        "height" : ""
    }
}
```
