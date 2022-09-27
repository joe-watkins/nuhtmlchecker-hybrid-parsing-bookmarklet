# nuhtmlchecker-parsing-bookmarklet
Hybrid bookmarklet to run after validating markup using the [Nu HTML Checker](https://validator.w3.org/nu/about.html) to check for WCAG 4.1.1 Parsing conformance.

## Background
There are currently two schools of thought with regards to testing for conformance to WCAG `4.1.1 Parsing` after running the [Nu Html Checker](https://validator.w3.org/nu/). 

- [Check for WCAG 2.0 parsing compliance bookmarklet - Steve Faulkner](https://validator.w3.org/nu/about.html) [validation type issues remain e.g. content model]
- [WCAG Syntax Only Bookmarklet - Christophe Strobbe](https://cstrobbe.gitlab.io/A11yWorks/wcagtests/html5/sc_4.1.1_syntax/wcag-syntax-bookmarklet.html) [removes all validation type issues leaving pure syntax-style issues]

I've combined these two approaches so that only true WCAG 4.1.1 failures are presented, but issues that are not hard failures but are worth consideration of fixing are still present in the results and clearly marked as such.

## How to use
- Create the Nu HTML Checker Hybrid bookmarklet with [this JavaScript](https://github.com/joe-watkins/nuhtmlchecker-parsing-bookmarklet/blob/main/nuhtmlchecker-parsing-bookmarklet.js) as the URL for the bookmarklet. Or, visit this URL and drag it to your bookmarks.
- Run the [Check serialized DOM of current page](https://validator.w3.org/nu/about.html) bookmarklet to validate the page.
- Then run the Nu HTML Checker Hybrid bookmarklet by clicking on it in your bookmarks to see the results.

## Learn More
- [Understanding and Testing WCAG 2.1 Success Criterion 4.1.1](https://cstrobbe.gitlab.io/A11yWorks/wcagtests/html5/sc_4.1.1_syntax/index.html)
- [Proposal to Rephrase Success Criterion 4.1.1 #2525](https://github.com/w3c/wcag/issues/2525)