import React from 'react';
import s from './Projects.module.scss';
import {Project} from "./Project/Project";
import {Title} from "../../common/components/Title/Title";
import socialImg from "./../../assets/images/social.svg";
import todoImg from "./../../assets/images/checklist.svg";
import countImg from "./../../assets/images/count-plus.svg";


export const Projects = () => {
    const socialStyle = {
        backgroundImage: `url(${socialImg})`,
    };
    const todoStyle = {
        backgroundImage: `url(${todoImg})`,
    };
    const counterStyle = {
        backgroundImage: `url(${countImg})`,
    };
    return (
        <div className={s.projectsBlock}>
            <div className={s.container}>
                <Title title={'Projects'} />
                <div className={s.projects}>
                    <Project style={socialStyle} title={'Social network'} description={'some description'} />
                    <Project style={todoStyle} title={'TODOLIST'} description={'some description'} />
                    <Project style={counterStyle} title={'Counter'} description={'some description'} />
                </div>

            </div>

        </div>
    );
};
