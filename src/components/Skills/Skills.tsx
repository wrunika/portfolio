import React from 'react';
import s from './Skills.module.scss';
import {Skill} from './Skill/Skill';
import {Title} from '../../common/components/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faSquareJs } from '@fortawesome/free-brands-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';
import {faBugSlash, IconDefinition} from '@fortawesome/free-solid-svg-icons';


export const Skills = () => {
    const skillsInfo: SkillsInfoType[] = [
        {title: 'HTML', icon: faHtml5},
        {title: 'CSS', icon: faCss3Alt},
        {title: 'JS', icon: faSquareJs},
        {title: 'TS', icon: faBugSlash},
        {title: 'Git', icon: faGitAlt},
        {title: 'React', icon: faReact},
        {title: 'Redux', icon: faBugSlash},
        {title: 'REST API', icon: faBugSlash},
        {title: 'Axios', icon: faBugSlash},
        {title: 'SASS', icon: faSass},
        {title: 'Unit Tests', icon: faBugSlash},
        {title: 'Postman', icon: faBugSlash},
    ];
    return (
        <div className={s.skillsBlock}>
            <div className={s.container}>
                <Title title={'Skills'} />
                <div className={s.skills}>
                    {skillsInfo.map((s, index) => {
                        return <Skill key={index} title={s.title} iconComponent={<FontAwesomeIcon icon={s.icon} />} />
                    })}
                </div>
            </div>
        </div>
    );
};

type SkillsInfoType = {
    title: string
    icon: IconDefinition
}