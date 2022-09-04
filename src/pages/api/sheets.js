/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { google } from 'googleapis';

// const createAuth = async () => {
//   const auth = new google.auth.GoogleAuth({
//     credentials: {
//       client_email: process.env.CLIENT_EMAIL,
//       client_id: process.env.CLIENT_ID,
//       private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
//     },
//     scopes: [
//       'https://www.googleapis.com/auth/drive',
//       'https://www.googleapis.com/auth/drive.file',
//       'https://www.googleapis.com/auth/spreadsheets',
//     ],
//   });
//   return auth;
// };

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'only post requests are allowed' });
  }

  const { firstName, email, phone, country, ptype, message } = req.body;

  try {
    //create auth

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    //initialize sheet
    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    //response

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Leads!A1:F1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[firstName, email, message, phone, ptype, country]],
      },
    });

    //return
    return res
      .status(201)
      .json({ response, result: 'Feedback posted to spreadsheet!' });
  } catch (error) {
    console.log(error.message);
  }
}
//  const { fname, message, mobile, email } = req.body;
//     try {
//     const authobj = createAuth();
//     const sheets = google.sheets({
//       authobj,
//       version: 'v4',
//     });

//     const response = await sheets.spreadsheets.values.append({
//       spreadsheetId: process.env.DATABASE_ID,
//       range: 'Sheet1!A2:C',
//       valueInputOption: 'USER_ENTERED',
//       requestBody: {
//         values: [[fname, message,mobile,email]],
//       },
//     });

//    return res
//       .status(201)
//       .json({ response, result: 'Feedback posted to spreadsheet!' });
//   }
//      catch (error) {
//         console.log(error.message);
//     }

// }
