const files = ['./fyle-app/main/index.html', './fyle-app/accounts/index.html', './fyle-app/settings/index.html', './fyle-app/router/index.html'];
const api_map = ['main_API', 'accounts_API', 'settings_API', 'router_API'];
const main_API = [
  {
    text: `API_ENDPOINT: 'https://staging.fyle.in' + '/api'`,
    textToReplace: `API_ENDPOINT: ROOT + '/api'`
  },
  {
    text: `PARSER_ENDPOINT: 'https://staging.fyle.in' + '/parser'`,
    textToReplace: `PARSER_ENDPOINT: ROOT + '/parser'`
  },
  {
    text: `DATA_EXTRACTION_ENDPOINT: 'https://staging.fyle.in' + '/data_extraction'`,
    textToReplace: `DATA_EXTRACTION_ENDPOINT: ROOT + '/data_extraction'`
  },
  {
    text: `BANK_STATEMENTS_PARSER_ENDPOINT: 'https://staging.fyle.in' + '/bank_statements'`,
    textToReplace: `BANK_STATEMENTS_PARSER_ENDPOINT: ROOT + '/bank_statements'`
  },
  {
    text: `EXPENSE_AGGREGATION_ENDPOINT: 'https://staging.fyle.in' + '/expense_aggregation'`,
    textToReplace: `EXPENSE_AGGREGATION_ENDPOINT: ROOT + '/expense_aggregation'`
  },
  {
    text: `EXPORT_SERVICE_ENDPOINT: 'https://staging.fyle.in' + '/csv_excel_export'`,
    textToReplace: `EXPORT_SERVICE_ENDPOINT: ROOT + '/csv_excel_export'`
  },
  {
    text: `TSHEETS_SERVICE_ENDPOINT: 'https://staging.fyle.in' + '/tsheets'`,
    textToReplace: `TSHEETS_SERVICE_ENDPOINT: ROOT + '/tsheets'`
  },
  {
    text: `GMAIL_SERVICE_ENDPOINT: 'https://staging.fyle.in' + '/gmail'`,
    textToReplace: `GMAIL_SERVICE_ENDPOINT: ROOT + '/gmail'`
  },
  {
    text: `GOLD_DIGGER_SERVICE_ENDPOINT: 'https://staging.fyle.in' + '/gold_digger'`,
    textToReplace: `GOLD_DIGGER_SERVICE_ENDPOINT: ROOT + '/gold_digger'`
  },
  {
    text: `REPORTS_MIS_SERVICE_ENDPOINT: 'https://staging.fyle.in' + '/mis_reports'`,
    textToReplace: `REPORTS_MIS_SERVICE_ENDPOINT: ROOT + '/mis_reports'`
  },
  {
    text: `MIS_REIMBURSEMENTS_SERVICE_ENDPOINT: 'https://staging.fyle.in' + '/mis_reimbursements'`,
    textToReplace: `MIS_REIMBURSEMENTS_SERVICE_ENDPOINT: ROOT + '/mis_reimbursements'`
  },
  {
    text: `TRIP_REQUEST_POLICY_SERVICE_ENDPOINT : 'https://staging.fyle.in' + '/policy/trip_requests'`,
    textToReplace: `TRIP_REQUEST_POLICY_SERVICE_ENDPOINT : ROOT + '/policy/trip_requests'`
  },
  {
    text: `ADVANCE_REQUEST_SERVICE_ENDPOINT: 'https://staging.fyle.in' + '/policy/advance_requests'`,
    textToReplace: `ADVANCE_REQUEST_SERVICE_ENDPOINT: ROOT + '/policy/advance_requests'`
  },
  {
    text: `DUPLICATE_DETECTION_SERVICE_ENDPOINT: 'https://staging.fyle.in' + '/duplicate_detection'`,
    textToReplace: `DUPLICATE_DETECTION_SERVICE_ENDPOINT: ROOT + '/duplicate_detection'`
  },
  {
    text: `REMINDERS_SERVICE_ENDPOINT: 'https://staging.fyle.in' + '/reminders'`,
    textToReplace: `REMINDERS_SERVICE_ENDPOINT: ROOT + '/reminders'`
  },
  {
    text: `LOCATION_SERVICE_ENDPOINT: 'https://staging.fyle.in' + '/location'`,
    textToReplace: `LOCATION_SERVICE_ENDPOINT: ROOT + '/location'`
  },
  {
    text: `POLICY_SERVICE_ENDPOINT: 'https://staging.fyle.in' + '/policy/expenses'`,
    textToReplace: `POLICY_SERVICE_ENDPOINT: ROOT + '/policy/expenses'`
  },
  {
    text: `AUTH_SERVICE_ENDPOINT: 'https://staging.fyle.in' + '/auth'`,
    textToReplace: `AUTH_SERVICE_ENDPOINT: ROOT + '/auth'`
  },
  {
    text: `VENDORS_SERVICE_ENDPOINT: 'https://staging.fyle.in' + '/vendors'`,
    textToReplace: `VENDORS_SERVICE_ENDPOINT: ROOT + '/vendors'`
  }
];

const accounts_API = [
  {
    text: `API_ENDPOINT: 'https://staging.fyle.in' + '/api'`,
    textToReplace: `API_ENDPOINT: ROOT + '/api'` 
  }
];

const settings_API = [
  {
    text: `API_ENDPOINT: 'https://staging.fyle.in' + '/api'`,
    textToReplace: `API_ENDPOINT: ROOT + '/api'` 
  },
  {
    text: `PARSER_ENDPOINT: 'https://staging.fyle.in' + '/parser'`,
    textToReplace: `PARSER_ENDPOINT: ROOT + '/parser'` 
  },
  {
    text: `DATA_EXTRACTION_ENDPOINT: 'https://staging.fyle.in' + '/data_extraction'`,
    textToReplace: `DATA_EXTRACTION_ENDPOINT: ROOT + '/data_extraction'` 
  },
  {
    text: `BANK_STATEMENTS_PARSER_ENDPOINT: 'https://staging.fyle.in' + '/bank_statements'`,
    textToReplace: `BANK_STATEMENTS_PARSER_ENDPOINT: ROOT + '/bank_statements'` 
  },
  {
    text: `EXPENSE_AGGREGATION_ENDPOINT: 'https://staging.fyle.in' + '/expense_aggregation'`,
    textToReplace: `EXPENSE_AGGREGATION_ENDPOINT: ROOT + '/expense_aggregation'` 
  },
  {
    text: `EXPORT_SERVICE_ENDPOINT: 'https://staging.fyle.in' + '/csv_excel_export'`,
    textToReplace: `EXPORT_SERVICE_ENDPOINT: ROOT + '/csv_excel_export'` 
  },
  {
    text: `TSHEETS_SERVICE_ENDPOINT: 'https://staging.fyle.in' + '/tsheets'`,
    textToReplace: `TSHEETS_SERVICE_ENDPOINT: ROOT + '/tsheets'` 
  },
  {
    text: `GMAIL_SERVICE_ENDPOINT: 'https://staging.fyle.in' + '/gmail'`,
    textToReplace: `GMAIL_SERVICE_ENDPOINT: ROOT + '/gmail'` 
  },
  {
    text: `GOLD_DIGGER_SERVICE_ENDPOINT: 'https://staging.fyle.in' + '/gold_digger'`,
    textToReplace: `GOLD_DIGGER_SERVICE_ENDPOINT: ROOT + '/gold_digger'` 
  },
  {
    text: `TRIP_REQUEST_POLICY_SERVICE_ENDPOINT : 'https://staging.fyle.in' + '/policy/trip_requests'`,
    textToReplace: `TRIP_REQUEST_POLICY_SERVICE_ENDPOINT : ROOT + '/policy/trip_requests'` 
  },
  {
    text: `ADVANCE_REQUEST_SERVICE_ENDPOINT: 'https://staging.fyle.in' + '/policy/advance_requests'`,
    textToReplace: `ADVANCE_REQUEST_SERVICE_ENDPOINT: ROOT + '/policy/advance_requests'` 
  },
  {
    text: `POLICY_SERVICE_ENDPOINT: 'https://staging.fyle.in' + '/policy/expenses'`,
    textToReplace: `POLICY_SERVICE_ENDPOINT: ROOT + '/policy/expenses'` 
  },
  {
    text: `REMINDERS_SERVICE_ENDPOINT: 'https://staging.fyle.in' + '/reminders'`,
    textToReplace: `REMINDERS_SERVICE_ENDPOINT: ROOT + '/reminders'` 
  }
];

const router_API = [
  {
    text: `window.fyle.endpoints.API_ENDPOINT = 'https://staging.fyle.in' + '/api'`,
    textToReplace: `window.fyle.endpoints.API_ENDPOINT = ROOT + '/api'`
  }
]

module.exports = { main_API, accounts_API, settings_API, router_API, files, api_map };