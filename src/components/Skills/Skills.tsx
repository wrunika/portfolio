import React from 'react';
import s from './Skills.module.scss';
import styleContainer from '../../common/styles/Container.module.scss'
import {Skill} from './Skill/Skill';
import {Title} from '../../common/components/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faSquareJs } from '@fortawesome/free-brands-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';
import { faBugSlash } from '@fortawesome/free-solid-svg-icons';


export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={'Skills'} />
                <div className={s.skills}>
                    <Skill title={'HTML'} icon={<FontAwesomeIcon icon={faHtml5} />} />
                    <Skill title={'CSS'} icon={<FontAwesomeIcon icon={faCss3Alt} />} />
                    <Skill title={'JS'} icon={<FontAwesomeIcon icon={faSquareJs} />} />
                    <Skill title={'TypeScript'} />
                    <Skill title={'Git'} icon={<FontAwesomeIcon icon={faGitAlt} />} />
                    <Skill title={'React'} icon={<FontAwesomeIcon icon={faReact}/>} />
                    <Skill title={'Redux'} />
                    <Skill title={'REST API'} />
                    <Skill title={'Axios'} />
                    <Skill title={'SASS'} icon={<FontAwesomeIcon icon={faSass} />} />
                    <Skill title={'Unit Tests'} icon={<FontAwesomeIcon icon={faBugSlash} />} />
                    <Skill title={'Postman'} />
                </div>
            </div>
        </div>
    );
};