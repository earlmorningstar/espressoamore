// import { readFile, writeFile } from 'fs/promises';
// import path from 'path';

// const filePath = path.resolve('./users.json');

// export default async function handler(req, res) {
//   if (req.method === 'GET') {
//     try {
//       const data = await readFile(filePath, 'utf8');
//       const users = JSON.parse(data);
//       res.status(200).json(users);
//     } catch (err) {
//       console.error('Error reading user data:', err);
//       res.status(500).json({ error: 'Error reading user data' });
//     }
//   } else if (req.method === 'POST') {
//     const users = req.body;
//     try {
//       await writeFile(filePath, JSON.stringify(users, null, 2));
//       res.status(200).json({ message: 'User data saved successfully' });
//     } catch (err) {
//       console.error('Error saving user data:', err);
//       res.status(500).json({ error: 'Error saving user data' });
//     }
//   } else {
//     res.setHeader('Allow', ['GET', 'POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
