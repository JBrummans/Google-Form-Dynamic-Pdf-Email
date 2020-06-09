# Google Form Dynamic PDF Creation and Email

This Google script creates a PDF based on a Google form response, attaches to an email and emails listed recipients. In addition it also inserts an ID column into the responses spreadsheet and generates a unique ID for reach response. The script has been designed to be as dynamic as possible allowing it to be quickly copied for use in other projets.

## Quick Start

This script must be added to a Google Sheets document, which itself is linked to a Google Form. To get started, open a Google Sheet and then open the script editor. Copy and pase the code into the script editor and save. Create a trigger ```onFormSubmit``` for the function. The trigger should be created with a generic account as this is the account used to authorise and send the email as. Update variables in the script as required. A Google Form ID is required for unique ID generation. Email recipients must be updated as well.

Test the code by completing a form submission. Check the execution log in the Google Script Editor for details.

## Getting Started

### Setup

Before running this Google Script, the below must be completed

* A Google Form
* A Google Sheet linked to a Form which is logging responses
* The script code copied to the Script Editor of the Google Sheet
* Variables adjusted within the script code. Eg, recipients email, Form ID etc
* Update Base64 logo
* A trigger created on the script to run on form submission

### Running the script

Once the setup has been completed. Simply submit a form to test. If successful, an email with a PDF attached will be sent to the listed recipients in the script.

### Troubleshooting

If encountering issues when running the script you can check the execution log. From the Script Editor select ***view*** > ***executions***. This will open the Google Developer Hub page where details of the scripts executions can be found. Each execution of the script will be logged showing timestamps and any errors encountered.

For additional troubleshooting, you can use the `console.log()` function in the Google Script. 

E.g if you wanted to log a variable to check its contents, you can add the line `console.log("The variable contents are:" + variableName)` then execute the script by submitting a form. Check the execution on the Google Developer Hub page. Expanding the execution will provide any output from console.log functions.

## Notes / Good to know

* Google Script uses a form of JavaScript.
* Google Scripts do not execute in a consistent and reliable time frame. Some executions can take several seconds while others happen within a second or two. Keep this in mind when considering race conditions.
* The unique ID created by the script for each response is a combination of a prefix (if set), number of months since Jan 2020 and the Form response number. This prevents possible collisions in the event that a row from the spreadsheet is deleted, as well as if the reponses are cleared from the Form (as long as at least one month has past). However does cause the ID numbering to not be sequential.
* As stated above in [Quick Start](#quick-start), the trigger should be created using a generic account not a personal one. As the email is sent with the details of the person who created the trigger. If you have created a trigger with a personal account and wish to change this, delete the old trigger and recreate it from the generic account.

## Authors

**Ben Letchford** - *Initial work*

**Jacob Brummans** - *Initial work*

## Acknowledgements

* Thanks Google... 
