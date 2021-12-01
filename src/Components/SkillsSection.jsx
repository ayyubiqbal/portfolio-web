import React from 'react';

const SkillsSection = ({ skill, progress, width }) => {
    return (
        <div className="SkillsSection">
            <div className="skill-container">
                <h5 className="skills-title">{skill}</h5>
                <div className="skills-bar">
                    <p className="skills-text">{progress}</p>
                    <div className="skills-progress">
                        <div className="progress">
                            <div className="inner-progress" style={{ width: width }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;