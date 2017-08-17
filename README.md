# HubSpot-Bolierplate

# CompanyStyle.css

CompanyStyle.CSS is a stylesheet full of empty CSS selectors that can be used to style commonly occurring HubSpot COS elements. The code is commented into sections to help explain the various selectors and HubL tokens. Since the selectors are empty, pasting this code into your CSS file will not change your pages presentation, but rather provide you with a template to add your own CSS properties to.

# CompanyModules.css

CompanyModules.css is a file that addresses some of the more challenging modules to style. This file includes code for making images/media responsive, styling HubSpot's responsive slider module, and more. Unlike the CompanyStyle.css, this CSS file contains complete CSS definitions that will affect the presentation of you page. This code can be pasted in the same file, included via a HubL include token, or pasted into a separate file and attached separately to a template. 

If you choose to paste CompanyModules.css into the same file as CompanyStyle.css you should replace the {% include "custom/page/Company_Theme/CompanyModules.css" %}, at the beginning of CompanyStyle.css, with the code from CompanyModules.css.
