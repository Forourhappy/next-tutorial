import {NextApiRequest, NextApiResponse} from "next";
import path from "path";
import fs from "fs";


const handler = <PagesAPIRouteHandler>(req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'post') {
        const email = req.body.email;
        const feedbackText = req.body.text;

        const newFeedback = {
            id: new Date().toDateString(),
            email: email,
            text: feedbackText
        }

        const filePath = path.join(process.cwd(), 'data', 'feedback.json');
        const fileData = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileData);
        data.push(newFeedback);
        fs.writeFileSync(filePath, JSON.stringify(data));
        res.status(201).json({message: 'Success!', feedback: newFeedback})
    } else {
        // 성공(200)하면 JSON형식의 파일을 반환.
        res.status(200).json({message: 'This works!'});
    }

}

export default handler;