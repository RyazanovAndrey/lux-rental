import React from 'react';
import style from './style.module.css';
import Link from 'next/link';

const ButtonSlim = ({ children, path }) => {
    return (
          <Link href={path} className={style.btn}>{children}</Link>
    );
}

export default ButtonSlim;
