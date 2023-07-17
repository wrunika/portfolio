import React from 'react';
import s from './Skills.module.scss';
import {Skill} from './Skill/Skill';
import {Title} from '../../common/components/Title/Title';
import tsIcon from './../../assets/images/typescript-icon.svg';
import reduxIcon from './../../assets/images/redux-icon.svg';
import axiosIcon from './../../assets/images/axios-icon.svg';
import postmanIcon from './../../assets/images/postman-icon.svg';
import apiIcon from './../../assets/images/api-icon.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faReact} from '@fortawesome/free-brands-svg-icons';
import {faHtml5} from '@fortawesome/free-brands-svg-icons';
import {faCss3Alt} from '@fortawesome/free-brands-svg-icons';
import {faSquareJs} from '@fortawesome/free-brands-svg-icons';
import {faGitAlt} from '@fortawesome/free-brands-svg-icons';
import {faSass} from '@fortawesome/free-brands-svg-icons';
import {faBugSlash, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {Slide} from "react-awesome-reveal";


export const Skills = () => {
    const skillsInfo: SkillsInfoType[] = [
        {title: 'HTML', icon: faHtml5},
        {title: 'CSS', icon: faCss3Alt},
        {title: 'JS', icon: faSquareJs},
        {title: 'TS', icon: tsIcon},
        {title: 'Git', icon: faGitAlt},
        {title: 'React', icon: faReact},
        {title: 'Redux', icon: reduxIcon},
        {title: 'REST API', icon: apiIcon},
        {title: 'Axios', icon: axiosIcon},
        {title: 'SASS', icon: faSass},
        {title: 'Unit Tests', icon: faBugSlash},
        {title: 'Postman', icon: postmanIcon},
    ];
    return (
        <div id={'skills'} className={s.skillsBlock}>
            {/*<AttentionSeeker effect={'pulse'} triggerOnce={true}>*/}
                <div className={s.container}>
                    <Title title={'Skills'}/>
                    <div className={s.skills}>
                        {skillsInfo.map((s, index) => {
                            return <Slide direction={'left'}>
                                <Skill key={index} title={s.title} iconComponent={ (typeof s.icon === 'string') ? s.icon :  <FontAwesomeIcon icon={s.icon}/>}/>
                            </Slide>
                        })}
                    </div>
                </div>
            {/*</AttentionSeeker>*/}
        </div>
    );
};

type SkillsInfoType = {
    title: string
    icon: IconDefinition | string
}