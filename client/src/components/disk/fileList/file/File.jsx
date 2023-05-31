import React from 'react';
import './file.css'
import dirLogo from '../../../../assets/image/dir.svg'
import fileLogo from '../../../../assets/image/file.svg'
const File = ({file}) => {
    return (
        <div className='file'>
            <img src={file.type === 'dir' ? dirLogo : fileLogo} alt="" className="file__img"/>
            <div className="filelist__name">{file.name}</div>
            <div className="filelist__date">{file.date.slice(0,10)}</div>
            <div className="filelist__size">{file.size}</div>

        </div>
    );
};

export default File;