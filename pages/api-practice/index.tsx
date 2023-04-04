import React, {FormEvent, useRef} from 'react';

const MainPage = () => {

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
        </div>
    );
};

export default MainPage;
