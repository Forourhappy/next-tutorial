import React, {FormEvent, useRef, useState} from 'react';

const MainPage = () => {
    const [feedbackItems, setFeedbackItems] = useState();

    const emailInputRef = useRef<HTMLInputElement>(null);
    const feedbackInputRef = useRef<HTMLTextAreaElement>(null);

    const submitFormHandler = (event: FormEvent) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current?.value;
        const enteredFeedback = feedbackInputRef.current?.value;

        const reqBody = {email: enteredEmail, text: enteredFeedback}

        fetch('/api/feedback', {
            method: 'post',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
            .then(data => console.log(data));
    }

    const loadFeedbackHandler = () => {
        fetch('/api/feedback')
            .then(res => res.json())
            .then((data) => {
                setFeedbackItems(data.feedback);
            })
    }

    return (
        <div>
            <h1>메인 페이지</h1>
            <form action="api-practice">
                <div>
                    <label htmlFor="email">이메일</label>
                    <input type="text" id="email" ref={emailInputRef}/>
                </div>
                <div>
                    <label htmlFor="feedback">피드백</label>
                    <textarea id='feedback' rows={5} ref={feedbackInputRef}></textarea>
                </div>
                <button onClick={submitFormHandler}>제출</button>
            </form>
            <hr/>
            <button>불러오기</button>
            <ul>
                {feedbackItems.map(item => <li key={item.id}>{item.text}</li>)}
            </ul>
        </div>
    );
};

export default MainPage;
