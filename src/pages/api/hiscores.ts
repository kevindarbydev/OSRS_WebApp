import { NextApiRequest, NextApiResponse } from 'next';
import hiscores, { getStats } from 'osrs-json-hiscores';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {

    var { rsn } = req.query;
    var stringifyd = `${rsn}`;
    
   
    const stats = await hiscores.getStats("Lynx Titan");
    if (stats.main){
    res.status(200).json(stats);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving player stats, ' + error });
  }
}
