# Next.js Link Component Navigation Issue

This repository demonstrates a common issue with the Next.js `Link` component where navigation to another page doesn't work as expected.  The provided code example shows a basic `Link` component, but the navigation to the '/about' page fails silently.

## Problem

The `Link` component is used correctly; however, the application doesn't navigate to the '/about' route.

## Solution

The solution addresses the issue by ensuring the '/about' page exists in the `pages` directory.  If the '/about' page is missing, the navigation will not work.  Creating a simple '/about' page file solves this issue.

## Steps to Reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe that clicking on the "About Us" link does not navigate to a new page.
5. Implement the solution from `bugSolution.js`. 
6. Rerun `npm run dev` and verify that the link now works.