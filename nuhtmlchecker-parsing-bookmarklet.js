javascript: (function() {
    var removeNg = true;
    var killWarnings = true;
    var filterStrings = ['tag seen', 'Stray end tag', 'Bad start tag', 'Duplicate ID', 'first occurrence of ID', 'Unclosed element', 'unclosed elements', 'unquoted attribute value', 'Duplicate attribute'];
    var validationStrings = ['violates nesting rules', 'not allowed as child of element',  'not allowed on element'];
    var filterRE, validationRE, root, results, result, resultText, i, cnt = 0;
    filterRE = filterStrings.join('|');
    validationRE = validationStrings.join('|');
    root = document.getElementById('results');
    if (!root) {
        alert('No results container found.');
        return
    }
    results = root.getElementsByTagName('li');
    for (i = 0; i < results.length; i += 1) {
        result = results[i];
        if(killWarnings && result.className.indexOf('info warning') !== -1){
            result.style.display = 'none';
        }
        if (result.className !== '') {
            resultText = (result.innerText !== undefined ? result.innerText : result.textContent) + '';
            if (resultText.match(filterRE) === null) {
                result.style.display = 'none';
                result.className = result.className + ' parsingIssues';
                cnt += 1
            } else if (removeNg == true) {
                if (resultText.indexOf('not allowed on element') !== -1 && resultText.indexOf('ng-') !== -1 && resultText.indexOf('ng-') < resultText.indexOf('not allowed on element')) {
                    result.style.display = 'none';
                    result.className = result.className + ' removeAngular';
                    cnt += 1
                }
            }
            if (resultText.match(validationRE) !== null) {
                result.style.background = '#fffaa0';
                result.style.display = 'block';
                var currentMarkup = result.innerHTML;
                result.innerHTML = currentMarkup + '<div style="background: aliceblue; padding: 1em; border: dashed 2px #000; margin-top: 1em; font-size:120%;"><strong>Not a WCAG 4.1.1 Parsing failure / Validation Issue:</strong> While not technically a pure violation of WCAG 4.1.1 Parsing, consider fixing this issue for maximum compatibility with assistive technology. Learn More: <a href="https://cstrobbe.gitlab.io/A11yWorks/wcagtests/html5/sc_4.1.1_syntax/index.html">Understanding and Testing WCAG 2.1 Success Criterion 4.1.1</a> | <a href="https://github.com/w3c/wcag/issues/2525>Proposal to Rephrase Success Criterion 4.1.1</a></div>';
                result.className = result.className + ' validationIssue';
            }
        }
    }
    alert('Complete. ' + cnt + ' items updated.')
})();