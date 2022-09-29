# Nu Html Checker Hybrid Parsing Bookmarklet
Hybrid bookmarklet to run after validating markup using the [Nu Html Checker](https://validator.w3.org/nu/about.Html) to check for WCAG `4.1.1 Parsing` conformance.

## How to use
- Visit [Nu Html Checker Bookmarklet page](https://cdpn.io/pen/debug/JjvMzeO) and drag it to your bookmarks. Or, manually create your own by using [this JavaScript](https://raw.githubusercontent.com/joe-watkins/nuHtmlchecker-hybrid-parsing-bookmarklet/main/nuHtmlchecker-parsing-bookmarklet.js) as the URL.
- Run the [Check serialized DOM of current page](https://validator.w3.org/nu/about.Html) bookmarklet to validate the page. Or, use the "Send selected DOM" button in the [ARC Toolkit](https://www.tpgi.com/arc-platform/arc-toolkit/) to send the DOM to the validator.
- Then run the Nu Html Checker Hybrid Parsing bookmarklet by clicking on it in your bookmarks to see the results.
- Issues that are not pure WCAG `4.1.1 Parsing` issues are removed.
- Issues that may not be hard WCAG `4.1.1 Parsing` issues but should be considered for fixing will be identified as "Not a WCAG 4.1.1 Parsing failure / Validation Issue: ..."

![Screenshot of issue that is not a WCAG 4.1.1 Failure marked as Not a WCAG 4.1.1 Parsing failure / Validation Issue](https://user-images.githubusercontent.com/3695795/192630728-1ade6959-2282-4cb4-9e0f-f2c9011bd49b.png)

## Background
There are currently two schools of thought with regards to testing for conformance to WCAG `4.1.1 Parsing` after running the [Nu Html Checker](https://validator.w3.org/nu/). 

- [Check for WCAG 2.0 parsing compliance bookmarklet - Steve Faulkner](https://validator.w3.org/nu/about.Html) [validation type issues remain e.g. content model]
- [WCAG Syntax Only Bookmarklet - Christophe Strobbe](https://cstrobbe.gitlab.io/A11yWorks/wcagtests/Html5/sc_4.1.1_syntax/wcag-syntax-bookmarklet.Html) [removes all validation type issues leaving pure syntax-style issues]

I've combined these two approaches so that only true WCAG `4.1.1` failures are presented, but issues that are not hard failures and are worth consideration of fixing are still present in the results and clearly marked as such.

## Learn More
- [Understanding and Testing WCAG 2.1 Success Criterion 4.1.1](https://cstrobbe.gitlab.io/A11yWorks/wcagtests/Html5/sc_4.1.1_syntax/index.Html)
- [Proposal to Rephrase Success Criterion 4.1.1 #2525](https://github.com/w3c/wcag/issues/2525)


## Thank you
- Thank you to Steve Faulkner for his contributions to the web and the code this was based on. [wcagparsing](https://github.com/stevefaulkner/wcagparsing)
- Thank you to Christophe Strobbe who helped us understand what true `4.1.1 Parsing` conformance is and what some of this code is based on. [WCAG Syntax Only Bookmarklet - Christophe Strobbe](https://cstrobbe.gitlab.io/A11yWorks/wcagtests/Html5/sc_4.1.1_syntax/wcag-syntax-bookmarklet.Html)