var PDF_TEMPLATE =
  '<!DOCTYPE html> \
<html> \
  <head> \
    <style> \
      #form-data { \
        font-family: Helvetica, sans-serif; \
        border-collapse: collapse; \
        width: 100%; \
      } \
      #form-data td, \
      #form-data th { \
        border: 1px solid #ddd; \
        padding: 8px; \
      } \
      #form-data tr:nth-child(even) { \
        background-color: #f2f2f2; \
      } \
      #form-data tr:hover { \
        background-color: #ddd; \
      } \
      #form-data th { \
        padding-top: 12px; \
        padding-bottom: 12px; \
        text-align: left; \
        background-color: #333538; \
        color: white; \
      } \
      #logo { \
          text-align: center; \
      } \
      #logo img { \
          width: 256px; \
          height: auto; \
      } \
      #title { \
        text-align: center; \
        color:  #333538; \
      } \
    </style> \
  </head> \
  <body> \
    <div id="logo"> \
        <img id="logo" src="data:image/png;base64,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" /> \
    </div> \
    <h1 id="title"> \
        {{ TEMPLATE_TITLE }} \
    </h1> \
    <table border="1" id="form-data"> \
      <tbody> \
        <tr> \
          <th align="center">Item</th> \
          <th align="center">Value</th> \
        </tr> \
        {{ TABLE }} \
      </tbody> \
    </table> \
   {{ SIGNATURE }} \
  </body> \
</html>';

var EMAIL_TEMPLATE =
  '<h1 id="title"> \
  {{ TEMPLATE_TITLE }} \
</h1> \
<table border="1"> \
  <tbody> \
   {{ TABLE }} \
  </tbody> \
</table> \
{{ SIGNATURE }}';

var TEMPLATE_TITLE = ""; // Eg, "New Form Submission" - if blank by default this will be the form name.
var EMAIL_SUBJECT = ""; // Eg, "New Form Submission" - if blank by default this will be 'New ' + TEMPLATE_TITLE + ' submission'

// Comma separated list of email recipients
var PDF_EMAIL_RECIPIENTS = "name@yourcompany.com.au"; // Eg: "name@yourcompany.com.au, name2@yourcompany.com.au"

// This HAS to be set otherwise the ID generation will not work. Using URL rather than ID as had issues with the ID not working on certain forms.
var FORM_URL = ""; // Eg, "https://docs.google.com/forms/d/1nkI-u4ENTthkTgKD_wC2wWHuek6GZp7bzDd-BWR2eoc/edit"

// Should we include answers with blank responses in the pdf and email body?
var SKIP_BLANK_ANSWERS = false;

// Should the submitter receive a copy of the email?
var SEND_EMAIL_TO_SUBMITTER = false;

//Should an ID be auto generated for each response?
var AUTO_GENERATE_ID = false;

//What should the ID field be called? (if required)
var SUBMISSION_ID_FIELD_NAME = "Submission ID";

//What should the prefix be for the ID? (if required) 
//The prefix will appear before the ID number. Eg: using "ID" as the prefix will result in an ID like "ID205".
var SUBMISSION_ID_PREFIX = "";

//Does the Form Require a signature section?
var SIGNATURE_REQUIRED = false;

function onFormSubmit(e) {
  var values = e.namedValues; //content of the submission

  //Check if no values found in submission. Resolves issue with Google triggering multiple times for a single submission.
  valueLength = 0
  for (var i = 0; i < e.values.length; i++){
    if (e.values[i] != ""){
      valueLength += 1
    }
  }
  if (valueLength === 1){
    console.log("Exited, no values found")
    return false 
  }

  //Read first row for headers. Required to keep list in email ordered.
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var firstRowValues = sheet
    .getRange(1, 1, 1, sheet.getLastColumn())
    .getValues()[0];
	
  var form = FormApp.openByUrl(FORM_URL);

  if (AUTO_GENERATE_ID === true){
    // Using difference in months since Jan 2020 as an always increasing number to create the ID. By combining with the response number, even if the responses where reset it would be near impossible to overlap numbers once a month has passed.
    //May need to add a check for existing IDs just incase.
    var Month = monthDiff(new Date(2020, 01), new Date());

    
    //Get response number for creating ID
    var responseNum = form.getResponses().length;
    //Ensure the response number is at least 2 digits.
    if (responseNum < 10){ 
      responseNum = "0" + responseNum;
    }

    var subId = SUBMISSION_ID_PREFIX + "" + responseNum;
    var subIndex = firstRowValues.indexOf(SUBMISSION_ID_FIELD_NAME); //Returns -1 if not found.
    if ( subIndex === -1) {
        sheet.insertColumns(1, 1);
        sheet.getRange(1, 1).setValues([[SUBMISSION_ID_FIELD_NAME]]);
    }
    //Set ID number
    sheet
    .getRange(sheet.getLastRow(), subIndex + 1)
    .setValue(subId);
  }
  
  //Build html for email
  var table = "";
  for (var i = 0; i < firstRowValues.length; i++) {
    var currentKey = firstRowValues[i];
    if (!values[currentKey]) continue;

    var value = [];
    if (values[currentKey].length) {
      for (var j = 0; j < values[currentKey].length; j++) {
        if (values[currentKey][j] !== "") {
          value.push(values[currentKey][j]);
        }
      }
    }

    if (value.length === 0) {
      if (SKIP_BLANK_ANSWERS === false) value = "not provided";
      else continue;
    }

    table =
      table +
      "<tr>" +
      "<td>" +
      currentKey +
      "</td>" +
      "<td>" +
      value +
      "</td>" +
      "</tr>";
  }

  //Generate email Subject
  var template_title = TEMPLATE_TITLE || form.getTitle();
  var email_subject = EMAIL_SUBJECT || "New " + template_title + " submission";
  if(subId){
    email_subject = EMAIL_SUBJECT || "#" + subId + " - New " + template_title + " submission";
  }

  //Generate signature item if required
  var signature = ""
  if (SIGNATURE_REQUIRED === true){
    signature =
        "<br>" +
        "<div>Approver Name: ___________________________ </div>" +
        "<br>" +
        "<div>Approver Signature: ______________________ </div>";
  }

  //End table and save to htmlBody var
  var pdfHtmlBody = PDF_TEMPLATE.replace(
    "{{ TEMPLATE_TITLE }}",
    template_title
  ).replace("{{ TABLE }}", table).replace("{{ SIGNATURE }}", signature);

  var htmlBody = EMAIL_TEMPLATE.replace(
    "{{ TEMPLATE_TITLE }}",
    template_title
  ).replace("{{ TABLE }}", table).replace("{{ SIGNATURE }}", signature);

  var htmlFile = DriveApp.createFile(
    template_title,
    pdfHtmlBody,
    MimeType.HTML
  );
  
  //Append submitter email if required
  if (SEND_EMAIL_TO_SUBMITTER === true){
    var emailIndex = firstRowValues.indexOf("Email address");
    var submitterEmail = sheet.getRange(sheet.getLastRow(),emailIndex+1).getValues();
	if (PDF_EMAIL_RECIPIENTS === ""){
      PDF_EMAIL_RECIPIENTS = submitterEmail;
    }else{
      PDF_EMAIL_RECIPIENTS = PDF_EMAIL_RECIPIENTS + ", " + submitterEmail;
    } 
  }

  MailApp.sendEmail(PDF_EMAIL_RECIPIENTS, email_subject, "", {
    htmlBody: htmlBody,
    attachments: [htmlFile.getAs("application/pdf")]
  });

  htmlFile.setTrashed(true);
}

//Function to get difference in months from a certain date. Eg: from Jan 2020 to May 2020 will return 3 as there is a 3 month gap between the two months.
function monthDiff(dateFrom, dateTo) {
  return dateTo.getMonth() - dateFrom.getMonth() + 
    (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
 }