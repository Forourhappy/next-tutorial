import React, {FormEvent, useState} from 'react';
import classes from './event-search.module.css'
import Button from "@/practiceComponents/ui/button";

type PropsType = {
    onSearch(year: string, month: string): void;
}

const EventsSearch = (props: PropsType) => {
    const [year, setYear] = useState('2022');
    const [month, setMonth] = useState('1');
    const submitHandler = (event: FormEvent) => {
        event.preventDefault();

        props.onSearch(year, month);
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">년</label>
                    <select id="year" onChange={e => setYear(e.target.value)} value={year}>
                        <option value='2022'>2022</option>
                        <option value='2023'>2023</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">월</label>
                    <select id="month" onChange={e => setMonth(e.target.value)} value={month}>
                        <option value="1">1월</option>
                        <option value="2">2월</option>
                        <option value="3">3월</option>
                        <option value="4">4월</option>
                        <option value="5">5월</option>
                        <option value="6">6월</option>
                        <option value="7">7월</option>
                        <option value="8">8월</option>
                        <option value="9">9월</option>
                        <option value="10">10월</option>
                        <option value="11">11월</option>
                        <option value="12">12월</option>
                    </select>
                </div>
            </div>
            <Button>이벤트 찾기</Button>
        </form>
    );
};

export default EventsSearch;