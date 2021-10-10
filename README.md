# Server Side Calculator

## Description

This project is a calculator that computes basic math using two input fields and buttons for the math operations (Addition, subtraction, multiplication, and division).  All calculations are done and stored on the server side, keeping the history of all previous calculations even with a page refresh.

An object with keys for both input fields and the selected operation are sent to the server, the server then sends back the three previous keys, along with a new key for the answer of the calculation.  The newly calculated answer gets put on the DOM, along with the entire history of all prior calculations.