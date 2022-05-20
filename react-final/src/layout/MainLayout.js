import { Route, Routes } from 'react-router-dom';
import React from "react";
import HomePage from '../pages/HomePage';
import UserPage from '../pages/UserPage';
import UserListPage from '../pages/UserListPage';
import HooksPage from '../pages/HooksPage';
import RegistrationPage from '../pages/RegistrationPage';
import LoginPage from '../pages/LoginPage';
import ListComponent from '../pages/ListComponent';
import FunctionComponent from '../pages/FunctionComponent';
import JsonCom from '../pages/JsonComp';
export default class MainLayout extends React.Component {

    render() {
        return (
            <div className="thbs-main container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/user" element={<UserPage />} />
                    <Route path="/list" element={<UserListPage />} />
                    <Route path="/hooks" element={<HooksPage />} />
                    <Route path="/reg" element={<RegistrationPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/listcom" element={<ListComponent />} />
                    <Route path="/function" element={<FunctionComponent />} />
                    <Route path="/jsoncom" element={<JsonCom />} />
                    
                    
                </Routes>
            </div>
        )
    }
}
