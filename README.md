# nuhtmlchecker-parsing-bookmarklet
Hybrid bookmarklet to run after validating markup using the [Nu HTML Checker](https://validator.w3.org/nu/about.html) to check for WCAG 4.1.1 Parsing conformance.

## How to use
- Create the Nu HTML Checker Hybrid bookmarklet with [this JavaScript](https://github.com/joe-watkins/nuhtmlchecker-parsing-bookmarklet/blob/main/nuhtmlchecker-parsing-bookmarklet.js) as the URL for the bookmarklet. Or, visit [Nu HTMl Checker Bookmarklet page](https://cdpn.io/pen/debug/JjvMzeO) and drag it to your bookmarks.
- Run the [Check serialized DOM of current page](https://validator.w3.org/nu/about.html) bookmarklet to validate the page.
- Then run the Nu HTML Checker Hybrid bookmarklet by clicking on it in your bookmarks to see the results.
- Issues that are not pure WCAG 4.1.1 Parsing issues are removed.
- Issues that may not be hard WCAG 4.1.1 Parsing issues but should be considered for fixing will be identified as "Not a WCAG 4.1.1 Parsing failure / Validation Issue: ..."

![Screenshot of issue that is not a WCAG 4.1.1 Failure marked as Not a WCAG 4.1.1 Parsing failure / Validation Issue](https://user-images.githubusercontent.com/3695795/192619200-a23453b5-b346-45ca-b829-937515885a57.png)

## Background
There are currently two schools of thought with regards to testing for conformance to WCAG `4.1.1 Parsing` after running the [Nu Html Checker](https://validator.w3.org/nu/). 

- [Check for WCAG 2.0 parsing compliance bookmarklet - Steve Faulkner](https://validator.w3.org/nu/about.html) [validation type issues remain e.g. content model]
- [WCAG Syntax Only Bookmarklet - Christophe Strobbe](https://cstrobbe.gitlab.io/A11yWorks/wcagtests/html5/sc_4.1.1_syntax/wcag-syntax-bookmarklet.html) [removes all validation type issues leaving pure syntax-style issues]

I've combined these two approaches so that only true WCAG 4.1.1 failures are presented, but issues that are not hard failures and are worth consideration of fixing are still present in the results and clearly marked as such.

## Learn More
- [Understanding and Testing WCAG 2.1 Success Criterion 4.1.1](https://cstrobbe.gitlab.io/A11yWorks/wcagtests/html5/sc_4.1.1_syntax/index.html)
- [Proposal to Rephrase Success Criterion 4.1.1 #2525](https://github.com/w3c/wcag/issues/2525)
