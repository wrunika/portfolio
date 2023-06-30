import React from 'react';
import s from './Projects.module.scss';
import {Project} from "./Project/Project";
import {Title} from "../../common/components/Title/Title";
import socialImg from "./../../assets/images/social.svg";
import todoImg from "./../../assets/images/checklist.svg";
import countImg from "./../../assets/images/count-plus.svg";
import {Slide} from "react-awesome-reveal";


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
    const projectsData: ProjectsDataType[] = [
        {style: socialStyle, title: 'Social network', description: 'some description'},
        {style: todoStyle, title: 'TODOLIST', description: 'some description'},
        {style: counterStyle, title: 'Counter', description: 'some description'},
    ]
    return (
        <div id={'projects'} className={s.projectsBlock}>
            {/*<AttentionSeeker effect={'pulse'} triggerOnce={true}>*/}
                <div className={s.container}>
                    <Title title={'Projects'}/>
                    <div className={s.projects}>
                        {projectsData.map( (pr) => {
                            return(
                                <Slide direction={'left'}>
                                    <Project style={pr.style} title={pr.title} description={pr.description}/>
                                </Slide>
                            )
                        } )}
                    </div>

                </div>
            {/*</AttentionSeeker>*/}
        </div>
    );
};

type ProjectsDataType = {
    style: {
        backgroundImage: string
    }
    title: string
    description: string
}