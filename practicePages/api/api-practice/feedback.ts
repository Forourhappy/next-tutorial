import {NextApiRequest, NextApiResponse} from "next";
import path from "path";
import fs from "fs";

export type FeedbackData = {
    id: string,
    email: string,
    text: string
}

export const buildFeedbackPath = () => {
    return path.join(process.cwd(), 'data', 'feedback.json');
}

export const extractFeedback = (filePath: string) => {
    const fileData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileData);
    return data;
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'post') {
        const email = req.body.email;
        const feedbackText = req.body.text;

        const newFeedback: FeedbackData = {
            id: new Date().toDateString(),
            email: email,
            text: feedbackText
        }

        const filePath = buildFeedbackPath();
        const data = extractFeedback(filePath);
        data.push(newFeedback);
        fs.writeFileSync(filePath, JSON.stringify(data));
        res.status(201).json({message: 'Success!', feedback: newFeedback})
    } else {
        const filePath = buildFeedbackPath();
        const data = extractFeedback(filePath);
        // 성공(200)하면 JSON형식의 파일을 반환.
        res.status(200).json({feedback: filePath});
    }

}

export default handler;