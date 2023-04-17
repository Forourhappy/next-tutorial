import {NextApiRequest, NextApiResponse} from "next";
import {buildFeedbackPath, extractFeedback, FeedbackData} from "@/practicePages/api/api-practice/feedback";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const feedbackId = req.query.feedbackId;
    const filePath = buildFeedbackPath();
    const feedbackData: FeedbackData[] = extractFeedback(filePath);
    const selectedFeedback = feedbackData.find(feedback => feedback.id === feedbackId);
    res.status(200).json({feedback: selectedFeedback})
}

export default handler;