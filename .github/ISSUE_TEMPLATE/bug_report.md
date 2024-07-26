---
name: Bug report
about: Create a report to help us improve
title: "[BUG]"
labels: bug
assignees: ''
body:
    - type: markdown
        attributes:
        value: |
            Thanks for taking the time to fill out this bug report!
    - type: input
        id: template-name
        attributes:
            label: Template name
            description: Please tell us which template is the issue related to
            placeholder: Template name
            value: "Template name"
            validations:
              required: true

    - type: input
        id: browser
        attributes:
            label: Browser
            description: Please tell us which browser and version of the browser you are using
            placeholder: Browser name
            value: "Browser name"
            validations:
              required: true

    - type: textarea
        id: what-happened
        attributes:
            label: What happened?
            description: Also tell us, what did you expect to happen?
            placeholder: Tell us what you see!
            value: "A bug happened!"
            validations:
              required: true

    - type: checkboxes
        id: related-issues
        attributes:
            label: This is a new issue
            description: I have checked for same issue in the issues panel
            validations:
              required: true
---

**Describe the bug**
A clear and concise description of what the bug is.


**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.


**Additional context**
Add any other context about the problem here.