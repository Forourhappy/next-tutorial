import React, {useState} from 'react';
import {buildFeedbackPath, extractFeedback, FeedbackData} from "@/practicePages/api/api-practice/feedback";
import {GetStaticProps, InferGetStaticPropsType} from "next";

const FeedbackPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [feedbackData, setFeedbackData] = useState<FeedbackData>();
    const loadFeedbackHandler = (id: string) => {
        fetch(`/api/api-practice/${id}`)
            .then(res => res.json())
            .then(data => {
                setFeedbackData(data.feedback);
            })
    }

    return (
        <>
            {feedbackData && <p>{feedbackData.email}</p>}
            <ul>
                {props.feedbackItems.map((item: FeedbackData) => (
                    <li key={item.id}>
                        {item.text}
                        <button onClick={() => loadFeedbackHandler(item.id)}>상세 보기</button>
                    </li>
                ))}
            </ul>
        </>
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
