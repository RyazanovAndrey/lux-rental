import { ToastContainer } from 'react-toastify';
import SideBar from '../components/SideBar/SideBar'
import style from './style.module.css';

export default function AdminLayout({ children }) {
  return (
    <div className="container">
        <ToastContainer theme='light' autoClose={2000} />
        <p className={style['admin-title']}>Адмін панель</p>
        <div className={style['admin-wrapper']}>
            <div className={style['admin-sidebar']}>
                <SideBar />
            </div>
            <div className={style['admin-content']}>
                 {children}
            </div>
        </div>
    </div>
  );
}