import React from 'react';
import {buildFeedbackPath, extractFeedback, FeedbackData} from "@/pages/api/api-practice/feedback";
import {GetStaticProps, InferGetStaticPropsType} from "next";

const FeedbackPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <ul>
            {props.feedbackItems.map((item: FeedbackData) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    // 외부 API가 아닌 자체 API를 불러올 때에는 fetch를 사용하지 않고 export한 함수를 불러온다.
    const filePath = buildFeedbackPath();
    const data: FeedbackData[] = extractFeedback(filePath);

    return {
        props: {
            feedbackItems: data
        }
    }
}

export default FeedbackPage;
